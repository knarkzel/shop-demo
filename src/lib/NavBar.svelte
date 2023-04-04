<script lang="ts">
  import Logo from "../logo.png";
  import { UserIcon, ShoppingCartIcon, SearchIcon } from "svelte-feather-icons";

  // Menu logic
  let openMenu = false;

  function toggleMenu() {
    openMenu = !openMenu;
  }
</script>

<nav class="navbar" aria-label="main navigation">
  <div class="container">
    <div class="navbar-brand">
      <a id="logo" class="navbar-item p-4 m-4" href="/">
        <img src={Logo} alt="Logo">
      </a>
      
      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbar" on:click={toggleMenu} on:keydown={toggleMenu} class:is-active={openMenu} tabindex="0">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbar" class="navbar-menu" class:is-active={openMenu}>
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

        <a href="/account/login" class="navbar-item">
          <span class="icon-text">
            <span class="icon">
              <UserIcon />
            </span>
            <span>
              Account
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
