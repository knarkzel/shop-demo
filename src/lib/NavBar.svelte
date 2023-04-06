<script lang="ts">
  import LogoPng from "../photos/logo.png";
  import LogoAvif from "../photos/logo.avif";
  import { currentUser } from "$lib/pocketbase";
  import { UserIcon, ShoppingCartIcon, SearchIcon } from "svelte-feather-icons";
  
  // Menu logic
  let openMenu = false;
  function toggleMenu() {
    openMenu = !openMenu;
  }

  // Route for account
  $: accountName = $currentUser ? $currentUser.email : "Account";
  $: accountRoute = $currentUser ? "/account" : "/account/signin";
</script>

<nav class="navbar" aria-label="main navigation">
  <div class="container">
    <div class="navbar-brand">
      <a id="logo" class="navbar-item p-4 m-4" href="/">
        <picture class="image">
          <source srcset={LogoAvif} type="image/avif">
          <img width="66" height="28" src={LogoPng} alt="Logo" />
        </picture>
      </a>
      
      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbar" on:click={toggleMenu} on:keydown={toggleMenu} class:is-active={openMenu} tabindex="0">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    
    <div id="navbar" class="navbar-menu" class:is-active={openMenu}>
      {#if $currentUser}
        <div class="navbar-start">
          <a href="/product/add" class="navbar-item" >
            Add product
          </a>
        </div>
      {/if}
      
      <div class="navbar-end">
        <a href="/cart" class="navbar-item">
          <span class="icon-text">
            <span class="icon">
              <ShoppingCartIcon />
            </span>
            <span>
              Cart
            </span>
          </span>
        </a>

        <a href={accountRoute} class="navbar-item">
          <span class="icon-text">
            <span class="icon">
              <UserIcon />
            </span>
            <span>
              {accountName}
            </span>
          </span>
        </a>
        
        <div class="navbar-item">
          <div class="field">
            <form class="control has-icons-left" action="/search">
              <input class="input" type="search" name="query" placeholder="Search" />
              <span class="icon is-left">
                <SearchIcon />
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>

<style>
  #logo {
    outline: 2px solid black;
  }
</style>
