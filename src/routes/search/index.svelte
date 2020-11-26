<script lang="ts">
  import Tag from "../../components/tag.svelte";
  import { validateSearch } from "../../logic/search";

  let value = "compound: 3 a, 6 b, ?c";

  const types = ["compound"];

  $: output = value.split(";").map((block) => ({
    type: block.split(":")[0],
    values: (block.split(":")[1] ?? "").split(","),
  }));

  const handleKeydown = (e) => {
    console.log(e);
    switch (e.key) {
      case "Backspace":
        return (value = value.slice(0, -1));
      case "Shift":
        break;
      default:
        return (value = value + e.key);
    }
  };
</script>

<style>
  entry {
    background-color: rgb(236, 236, 236);
    width: 100%;
    height: 50pt;
    display: block;
    padding: 20pt;
  }

  value {
    display: inline-flex;
    background-color: white;
    font-size: 14pt;
    padding: 5pt;
    margin: 0;
    border-right: solid 2px black;
  }

  type {
    display: inline-flex;
    border-radius: 5px 0px 0px 5px;
    background-color: rgb(175, 175, 255);
    font-size: 14pt;
    padding: 5pt;
    margin: 0;
  }
</style>

<svelte:window on:keydown={handleKeydown} />

<entry>
  {#each output as block}
    <type>{block.type}</type>
    {#each block.values as value}
      <value>{value}</value>
    {/each}
  {/each}
</entry>
