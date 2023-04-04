<script lang="ts">
  import Logo from "../static/logo.png";
  import { UserIcon, ShoppingCartIcon, SearchIcon } from "svelte-feather-icons";
</script>

<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="container">
    <div class="navbar-brand">
      <a class="navbar-item box p-4 m-4" href="/">
        <img src={Logo} alt="Logo">
      </a>
      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbar">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbar" class="navbar-menu">
      <div class="navbar-start">
        <a href="/books" class="navbar-item">
          Books
        </a>
        <a href="/clothes" class="navbar-item">
          Clothes
        </a>
        <a href="/perfumes" class="navbar-item">
          Perfumes
        </a>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <div class="field mt-2 mr-4">
            <p class="control has-icons-left">
              <input class="input" type="search" placeholder="Search">
              <span class="icon is-left">
                <SearchIcon />
              </span>
            </p>
          </div>

          <a href="#">
            <span class="icon mr-2">
              <ShoppingCartIcon />
            </span>
          </a>

          <a href="#">
            <span class="icon ml-2">
              <UserIcon />
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
