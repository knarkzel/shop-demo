<script lang="ts">
  import { FileIcon } from "svelte-feather-icons";
  import { applyAction, enhance } from "$app/forms";

  // Form logic
  let files: FileList;
  let loading = false;
  
  function formEnhance() {
    loading = true;
    return async ({result}) => {
      await applyAction(result);
    }    
  }
</script>

<h1 class="title">Add product</h1>

<form method="POST" use:enhance={formEnhance}>
  <div class="field">
    <label class="label" for="title">Title</label>
    <div class="control">
      <input class="input" type="text" name="title" placeholder="Enter title" required>
    </div>
  </div>

  <div class="field">
    <label class="label" for="price">Price (in USD)</label>
    <div class="control">
      <input class="input" type="number" step="0.01" name="price" placeholder="Enter price" required>
    </div>
  </div>

  <div class="field">
    <label class="label" for="image">Product image</label>    
    <div class="file has-name is-boxed">
      <label class="file-label">
        <input class="file-input" type="file" name="cover" accept="image/avif, image/jpeg, image/png, image/webp" bind:files required>
        <span class="file-cta">
          <span class="file-icon">
            <FileIcon />
          </span>
          <span class="file-label">
            Choose a file...
          </span>
        </span>
        {#if files && files[0]}
          <span class="file-name has-text-centered">
            {files[0].name}
          </span>
        {/if}
      </label>
    </div>
  </div>
  
  <div class="field is-grouped">
    <div class="control">
      <button class="button is-primary" type="submit" class:is-loading={loading}>Add product</button>
    </div>
    <div class="control">
      <a href="/" class="button is-link is-light">Cancel</a>
    </div>
  </div>
</form>
