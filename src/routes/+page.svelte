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

{#if data.products.length > 0}
  <h1 id="header" class="title my-4">Buy from us today!</h1>
{/if}

<div id="grid">
  {#each data.products as product}
    <article class="box">
      <h1 class="title is-3">{product.name}</h1>
      <p class="subtitle">{product.default_price.unit_amount_decimal}$ each</p>
      <picture class="image is-square">
        <img alt="Product" src={product.images[0]} />
      </picture>
      <button class="button title is-5 mt-4 is-fullwidth">Add to cart</button>
    </article>
  {/each}
</div>

<style>
  #grid {
    display: grid;
    grid-gap: 0 1em;
    grid-auto-rows: 1fr;
  }

  @media (min-width: 768px) {
    #grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media (min-width: 1024px) {
    #grid { grid-template-columns: repeat(3, 1fr); }
  }
</style>
