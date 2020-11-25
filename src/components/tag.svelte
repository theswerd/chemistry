<script>
    export let color = "#ddddff";
    export let margin = "0px";
    export let onClick = null;
</script>
<style>
    div {
        border-radius: 24px;
        padding: 3px 12px;
        font-size: 13px;
        text-align: center;
        display: inline-block;
        font-weight: bold;
        margin: 0px;
        user-select: none;

    }
</style>
<div style="background-color: {color}; margin: {margin};" on:click={onClick}>
    <slot></slot>
</div>