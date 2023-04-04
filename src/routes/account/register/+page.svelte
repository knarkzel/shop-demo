<script>
  import { MailIcon, KeyIcon } from "svelte-feather-icons";
</script>

<h1 class="title">Register</h1>

<div class="box">
  <form>
    <div class="field">
      <label for="" class="label">Email</label>
      <div class="control has-icons-left">
        <input type="email" placeholder="Enter email" class="input" required>
        <span class="icon is-left">
          <MailIcon />
        </span>
      </div>
    </div>
    
    <div class="field">
      <label for="" class="label">Password</label>
      <div class="control has-icons-left">
        <input type="password" placeholder="Enter password" class="input" required>
        <span class="icon is-left">
          <KeyIcon />
        </span>
      </div>
    </div>
    
    <div class="field">
      <button class="button is-link is-fullwidth">
        Register
      </button>
    </div>
  </form>
</div>

