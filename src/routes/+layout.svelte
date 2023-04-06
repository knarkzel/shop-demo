<script lang="ts">
  import "bulma/css/bulma.min.css";
  import NavBar from "$lib/NavBar.svelte";
</script>

<NavBar />
<main class="container p-2">
  <slot/>
</main>

<style>
  main {
    margin-bottom: 10em;
  }
</style>
