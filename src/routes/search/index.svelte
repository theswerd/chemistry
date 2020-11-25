<script>
import Tag from "../../components/tag.svelte";
import { validateSearch } from '../../logic/search';
let value = "";
let handleInput = ()=>{
    console.log("value", value);

    let smh = validateSearch(value);
};
</script>
<h1>
    Search
</h1>
<div>
    <h2>
        Given
    </h2>
    <p contenteditable='true' bind:innerHTML={value} on:input={handleInput} >
    
    </p>
</div>