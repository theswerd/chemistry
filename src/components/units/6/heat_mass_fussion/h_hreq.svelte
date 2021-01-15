<script>
    let hreq;
    let heat;
    let mass;

    $: mass = hreq / heat;
</script>
<h3>Mass from Heat Requirement and ΔHeat</h3>
<table>
    <tr>
        <th>H<sub>req</sub> (J/g)</th>
        <th>Heat (J)</th>
    </tr>
    <tr>
        <td><input bind:value={hreq} type="number" placeholder="0"/></td>    
        <td><input bind:value={heat} type="number" placeholder="0"/></td>    
    </tr>
</table>
<ul>
    <li>
        {heat == null? "Heat": heat} / {hreq == null? "Hreq": hreq} = <b>{mass == null || isNaN(mass)? "Mass": mass} g</b>
    </li>
</ul>
