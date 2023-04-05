<script lang="ts">
  import LogoPng from "../photos/logo.png";
  import LogoAvif from "../photos/logo.avif";
  import { UserIcon, ShoppingCartIcon, SearchIcon, LogOutIcon } from "svelte-feather-icons";
  
  // Menu logic
  let openMenu = false;

  function toggleMenu() {
    openMenu = !openMenu;
  }

  // User logic
  import { applyAction, enhance } from '$app/forms';
  import { pb, currentUser } from '$lib/pocketbase';
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
      <div class="navbar-start">
        <a href="/product/add" class="navbar-item" >
          Add product
        </a>
      </div>
      
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

        {#if $currentUser}
          <form method="POST" action="/account/logout" class="navbar-item" use:enhance={() => {
            return async ({result}) => {
            pb.authStore.clear();
            await applyAction(result);
            }}}>
            <button>
              <span class="icon-text">
                <span class="icon">
                  <LogOutIcon />
                </span>
                <span>
                  Logout
                </span>
              </span>            
            </button>
          </form>
        {:else}
          <a href="/account/signin" class="navbar-item">
            <span class="icon-text">
              <span class="icon">
                <UserIcon />
              </span>
              <span>
                Account
              </span>
            </span>
          </a>        
        {/if}
        
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
