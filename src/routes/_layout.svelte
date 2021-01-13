<script>
  import Nav from "../components/Nav.svelte";

  import GoogleAnalytics from "sapper-google-analytics/GoogleAnalytics.svelte";
  import { stores } from "@sapper/app";

  let ga_measurment_id = "G-M279NV0YWZ";

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
      <a
      href="https://github.com/sponsors/theswerd"
      target="_blank">Support Chem.land</a>

  </footer>
</main>
<GoogleAnalytics {stores} id={ga_measurment_id} />
