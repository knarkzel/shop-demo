<script lang="ts">
  import { page } from "$app/stores";
  const query = $page.url.searchParams.get("query");
</script>

<h1 class="title">Searching for {query}...</h1>
