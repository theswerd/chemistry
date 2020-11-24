<script>
  import Nav from "../components/Nav.svelte";

  import Github from "@icons-pack/svelte-simple-icons/src/components/Github.svelte";
  import Instagram from "@icons-pack/svelte-simple-icons/src/components/Instagram.svelte";
  //import LinkedIn from "@icons-pack/svelte-simple-icons/src/components/LinkedIn.svelte";

  import GoogleAnalytics from "sapper-google-analytics/GoogleAnalytics.svelte";
  import { stores } from "@sapper/app";

  let ga_measurment_id = "G-M279NV0YWZ";
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
    padding-top: 25px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  footer a {
    text-decoration: none;
    color: #777777;
    padding: 10px;
  }
  footer a:hover {
    color: black;
  }
</style>

<Nav {segment} />

<main>
  <slot />
  <footer>
    <a
      href="https://github.com/theswerd/chemistry/issues/new?assignees=&labels=&template=bug_report.md"
      target="_blank">Report a Bug</a>
    <a
      href="https://github.com/theswerd/chemistry/issues/new?assignees=&labels=&template=feature_request.md"
      target="_blank">Request a Feature</a>
    <a href="https://github.com/theswerd/chemistry" target="_blank"><Github
        size={25} /></a>
    <a href="https://instagram.com/ben_swerdlow" target="_blank"><Instagram
        size={25} /></a>
    <!-- <a href="https://www.linkedin.com/in/benswerdlow/" target="_blank"><LinkedIn
        size={25} /></a> -->
  </footer>
</main>
<GoogleAnalytics {stores} id={ga_measurment_id} />
