<script lang="ts">
  import { FileIcon } from "svelte-feather-icons";
  
  let title: string;
  let price: number;
  let files: FileList;
</script>

<h1 class="title">Add product</h1>

<form action="?/addProduct" method="POST">
  <div class="field">
    <label class="label" for="title">Title</label>
    <div class="control">
      <input class="input" type="text" name="title" placeholder="Enter title" bind:value={title} required>
    </div>
  </div>

  <div class="field">
    <label class="label" for="price">Price (in USD)</label>
    <div class="control">
      <input class="input" type="number" step="0.01" name="price" placeholder="Enter price" bind:value={price} required>
    </div>
  </div>

  <div class="field">
    <label class="label" for="image">Product image</label>    
    <div class="file has-name is-boxed">
      <label class="file-label">
        <input class="file-input" type="file" name="image" bind:files>
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
      <button class="button is-primary" type="submit">Add product</button>
    </div>
    <div class="control">
      <a href="/" class="button is-link is-light">Cancel</a>
    </div>
  </div>
</form>
