<script lang="ts">
  import { MailIcon, KeyIcon } from "svelte-feather-icons";

  // Form
  let email: string;
  let password: string;
</script>

<h1 class="title">Sign up</h1>

<div class="box">
  <form>
    <div class="field">
      <label for="" class="label">Email</label>
      <div class="control has-icons-left">
        <input type="email" placeholder="Enter email" class="input" bind:value={email} required>
        <span class="icon is-left">
          <MailIcon />
        </span>
      </div>
    </div>
    
    <div class="field">
      <label for="" class="label">Password</label>
      <div class="control has-icons-left">
        <input type="password" placeholder="Enter password" class="input" bind:value={password} required>
        <span class="icon is-left">
          <KeyIcon />
        </span>
      </div>
    </div>
    
    <div class="field">
      <button class="button is-link is-fullwidth">
        Sign up
      </button>
    </div>
  </form>
</div>

