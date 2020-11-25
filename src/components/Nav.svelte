<script lang="typescript">
  import Tag from "./tag.svelte";

  export let segment: string;
</script>

<style>
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0 1em;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    clear: both;
    display: block;
  }

  li {
    display: block;
    float: left;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: inline-block;
  }
</style>

<nav>
  <ul>
    <li>
      <a
        aria-current={segment === undefined ? 'page' : undefined}
        href=".">HOME</a>
    </li>
    <li>
      <a
        aria-current={segment === 'about' ? 'page' : undefined}
        href="about">ABOUT</a>
    </li>
    <li>
      <a
        rel="prefetch"
        aria-current={segment === 'units' ? 'page' : undefined}
        href="units">SUBJECTS</a>
    </li>
    <li>
      <a
        rel="prefetch"
        aria-current={segment === 'search' ? 'page' : undefined}
        href="search">SEARCH</a>
      <sup>
        <Tag margin="0px 0px 0px -10px" color="yellow">In Development</Tag>
      </sup>
    </li>
  </ul>
</nav>
