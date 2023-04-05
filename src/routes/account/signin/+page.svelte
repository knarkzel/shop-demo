<script>
  import { MailIcon, KeyIcon } from "svelte-feather-icons";
  import { applyAction, enhance } from '$app/forms';
  import { pb } from '$lib/pocketbase';
</script>

<h1 class="title">Sign in</h1>

<div class="box">
  <form method="POST" use:enhance={() => {
    return async ({result}) => {
      pb.authStore.loadFromCookie(document.cookie);
      await applyAction(result);
    }
    }}>
    <div class="field">
      <label for="" class="label">Email</label>
      <div class="control has-icons-left">
        <input type="email" placeholder="Enter email" class="input" name="email" required>
        <span class="icon is-left">
          <MailIcon />
        </span>
      </div>
    </div>
    
    <div class="field">
      <label for="" class="label">Password</label>
      <div class="control has-icons-left">
        <input type="password" placeholder="Enter password" class="input" name="password" required>
        <span class="icon is-left">
          <KeyIcon />
        </span>
      </div>
    </div>
    
    <div class="field">
      <button class="button is-success is-fullwidth">
        Sign in
      </button>
    </div>
  </form>

  <p class="mt-4 has-text-centered">Don't have an account? <a href="/account/signup">Create new account</a></p>
</div>

