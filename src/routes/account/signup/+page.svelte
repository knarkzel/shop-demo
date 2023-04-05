<script lang="ts">
  import { MailIcon, KeyIcon } from 'svelte-feather-icons';
  import { applyAction, enhance } from '$app/forms';
  import { pb } from '$lib/pocketbase';
</script>

<h1 class="title">Sign up</h1>

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
      <label for="" class="label">Confirm password</label>
      <div class="control has-icons-left">
        <input type="password" placeholder="Enter password again" class="input" name="passwordConfirm" required>
        <span class="icon is-left">
          <KeyIcon />
        </span>
      </div>
    </div>
    
    <div class="field">
      <button class="button is-link is-fullwidth" type="submit">
        Sign up
      </button>
    </div>
  </form>
</div>

