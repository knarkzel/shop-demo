<script lang="ts">
  import CoverJpg from "../photos/cover.jpg";
  import CoverAvif from "../photos/cover.avif";
</script>

<svelte:head>
  <title>oddharald.xyz</title>
</svelte:head>

<h1 class="title">Welcome to the shop!</h1>
<picture class="image">
  <source srcset={CoverAvif} type="image/avif">
  <img width="1328" height="424" src={CoverJpg} alt="Cover" />
</picture>
