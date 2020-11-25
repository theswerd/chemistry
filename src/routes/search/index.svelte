<script>
import Tag from "../../components/tag.svelte";
let value;
let handleInput = ()=>{};
</script>
<h1>
    Search
</h1>
<div>
    <h2>
        Given
    </h2>
    <p contenteditable='true' bind:innerHTML={value} on:input={handleInput}>
    {@html value}
    </p>
</div>