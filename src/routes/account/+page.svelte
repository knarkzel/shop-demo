<script lang="ts">
  import { pb } from "$lib/pocketbase";
  import { applyAction, enhance } from "$app/forms";
  import { LogOutIcon } from "svelte-feather-icons";

  function formEnhance() {
    return async ({result}) => {
      pb.authStore.clear();
      await applyAction(result);
    };
  };
</script>

<h1 class="title">Account</h1>

<form method="POST" action="/account/logout" use:enhance={formEnhance}>
  <button class="button is-primary">
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
