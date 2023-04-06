<script lang="ts">
  import CoverJpg from "../photos/cover.jpg";
  import CoverAvif from "../photos/cover.avif";
  import type { PageData } from "./$types";

  // Products
  export let data: PageData;
</script>

<svelte:head>
  <title>oddharald.xyz</title>
</svelte:head>

<h1 class="title">Welcome to the shop.</h1>

<picture class="image">
  <source srcset={CoverAvif} type="image/avif">
  <img width="1328" height="424" src={CoverJpg} alt="Cover" />
</picture>

<h1 class="title my-4">Buy from us today!</h1>

<div class="columns">
  {#each data.products as product}
    <div class="column is-one-third-desktop">
      <article class="box">
        <h1 class="title">{product.title}</h1>
        <p class="subtitle">{product.price}$ each</p>
        <picture class="image is-square">
          <img alt="Product" src="https://db.oddharald.xyz/api/files/{product.collectionId}/{product.id}/{product.image}" />
        </picture>
        <button class="button title is-5 mt-4 is-fullwidth">Add to cart</button>
      </article>
    </div>
  {/each}
</div>
