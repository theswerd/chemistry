<script>
    let hreq;
    let heat;
    let mass;

    $: mass = hreq * heat;
</script>
<h2>Moles from Heat Requirement and ΔHeat</h2>
<table>
    <tr>
        <th>H<sub>___</sub> (J/g)</th>
        <th>Heat (J)</th>
    </tr>
    <tr>
        <td><input bind:value={hreq} type="number"/></td>    
        <td><input bind:value={heat} type="number"/></td>    
    </tr>
</table>
<ul>
    <li>
        {heat == null? "Heat": null} * {hreq == null? "Hreq": hreq} = <b>{mass == null || isNaN(mass)? "Mass": mass} mols</b>
    </li>
</ul>
<!-- //ΔH = Heat (J)
Hfus = Heat of Fusion (J/g)
m = mass (g) -->
