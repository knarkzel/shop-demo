<script lang="ts">
  import { pb } from "$lib/pocketbase";
  import { applyAction, enhance } from "$app/forms";
  import { LogOutIcon } from "svelte-feather-icons";

  // Loading logic
  let loading = false;
  
  function formEnhance() {
    loading = true;
    return async ({result}) => {
      pb.authStore.clear();
      await applyAction(result);
    };
  };
</script>

<h1 class="title">Account</h1>

<form method="POST" action="/account/logout" use:enhance={formEnhance}>
  <button class="button is-primary" class:is-loading={loading}>
    <span class="icon-text">
      <span class="icon">
        <LogOutIcon />
      </span>
      <span>
        Logout
      </span>
    </span>
  </button>
</form>
