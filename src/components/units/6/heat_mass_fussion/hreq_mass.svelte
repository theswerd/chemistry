<script>
    let hreq;
    let heat;
    let mass;

    $: heat = hreq * mass;
</script>
<h3>ΔHeat from H<sub>req</sub> and Mass</h3>
<table>
    <tr>
        <th>Mass (mols)</th>
        <th>H<sub>req</sub></th>
    </tr>
    <tr>
        <td><input bind:value={mass} type="number" placeholder="0"/></td>    
        <td><input bind:value={hreq} type="number" placeholder="0"/></td>    
    </tr>
</table>
<ul>
    <li>
        {hreq == null || isNaN(hreq)? "Hreq": hreq} (J/g) * {mass == null? "Mass (mols)": mass} = <b>{heat == null? "ΔHeat": heat}</b>
    </li>
</ul>
