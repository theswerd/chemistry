<script>
    let hreq;
    let heat;
    let mass;

    $: hreq = heat / mass;
</script>
<h3>H<sub>req</sub> from ΔHeat and Mass</h3>
<table>
    <tr>
        <th>Mass (g)</th>
        <th>ΔHeat (J)</th>
    </tr>
    <tr>
        <td><input bind:value={mass} type="number" placeholder="0"/></td>    
        <td><input bind:value={heat} type="number" placeholder="0"/></td>    
    </tr>
</table>
<ul>
    <li>
        {heat == null? "ΔHeat": heat} / {mass == null? "Mass (g)": mass} = <b>{hreq == null || isNaN(hreq)? "Hreq": hreq} (J/g)</b>
    </li>
</ul>
