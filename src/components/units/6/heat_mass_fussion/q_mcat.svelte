<script>
    let heat;
    let mass;
    let heat_capacity;
    let temp_change;

    $: {
        if(mass && heat_capacity && temp_change != null){
            heat = mass * heat_capacity * temp_change
        }
        else if(heat && heat_capacity && temp_change != null){
            mass = heat / (heat_capacity * temp_change)
        }
        else if(heat && mass && temp_change){
            heat_capacity = heat / (mass * temp_change)
        }
        else if(heat && mass && heat_capacity){
            temp_change = heat / (mass * heat_capacity)
        }
    }
</script>
<h3>q = mcΔT</h3>
<table>
    <tr>
        <th>ΔHeat (J)</th>
        <th>Mass (g)</th>
        <th>Specific Heat Capacity</th>
        <th>Change in temp</th>
    </tr>
    <tr>
        <td><input bind:value={heat} type="number" placeholder="0"/></td>    
        <td><input bind:value={mass} type="number" placeholder="0"/></td>
        <td><input bind:value={heat_capacity} type="number" placeholder="0"/></td> 
        <td><input bind:value={temp_change} type="number" placeholder="0"/></td>     
    </tr>
</table>
<ul>
    <li>
        {heat == null? "ΔHeat (J)": heat} = {mass == null? "Mass (g)": mass} * {heat_capacity == null? "Heat Capacity (J/g°C)": heat_capacity} * {temp_change == null? "Change in temp(Final Temp (°C) - Initial Temp (°C))": temp_change}
    </li>
</ul>