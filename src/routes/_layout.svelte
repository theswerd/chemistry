<script>
  import Nav from "../components/Nav.svelte";
  import {
    Email,
    LinkedIn,
    Facebook,
    Twitter,
  } from "svelte-share-buttons-component";
  

  const title = "Chem.Land";

  const url = "https://chem.land";
 
  export let segment;
</script>

<style>
  main {
    position: relative;
    max-width: 80em;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
  footer {
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
</style>

<Nav {segment} />

<main>
  <slot />
  <footer>
    <Email subject={title} body={url} />
    <LinkedIn class="share-button" {url} />
    <Facebook class="share-button" {url} />
    <Twitter class="share-button" text={title} {url} />
  </footer>
</main>
