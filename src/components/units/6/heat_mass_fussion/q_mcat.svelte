<script>
    let heat;
    let mass;
    let heat_capacity;
    let temp_change;
    let make_bold;

    function handleClick() {
        (heat = null),
            (mass = null),
            (heat_capacity = null),
            (temp_change = null),
            (make_bold = null);
    }

    $: {
        if (mass && heat_capacity && temp_change != null) {
            heat = mass * heat_capacity * temp_change;
            make_bold = 1;
        } else if (heat && heat_capacity && temp_change != null) {
            mass = heat / (heat_capacity * temp_change);
            make_bold = 2;
        } else if (heat && mass && temp_change) {
            heat_capacity = heat / (mass * temp_change);
            make_bold = 3;
        } else if (heat && mass && heat_capacity) {
            temp_change = heat / (mass * heat_capacity);
            make_bold = 4;
        }
    }
</script>

<h3>q = mcΔT</h3>
<table>
    <tr>
        <th>ΔHeat (J)</th>
        <th>Mass (g)</th>
        <th>Specific Heat Capacity (J/g°C)</th>
        <th>Change in temp (Final Temp (°C) - Initial Temp (°C))</th>
    </tr>
    <tr>
        <td><input bind:value={heat} type="number" placeholder="0" /></td>
        <td><input bind:value={mass} type="number" placeholder="0" /></td>
        <td><input bind:value={heat_capacity} type="number" placeholder="0" /></td>
        <td><input bind:value={temp_change} type="number" placeholder="0" /></td>
    </tr>
</table>
<button on:click={handleClick}>
	Reset
</button>
<ul>
    <li>
<<<<<<< HEAD
        {heat == null? "ΔHeat (J)": heat+"(J)"} = {mass == null? "Mass (g)": mass+"(g)"} * {heat_capacity == null? "Heat Capacity (J/g°C)": heat_capacity+"(J/g°C)"} * {temp_change == null? "Change in temp(Final Temp (°C) - Initial Temp (°C))": temp_change+"(Final Temp °C - Initial Temp °C)"}
    </li>
</ul>
<style>
    button {
        border: none;
        background-color: lightcoral;
        padding: 8px 16px;
        margin:  10px 0px;
        transition: 300ms ease;
        outline: none !important;
    }

    button:hover {
        background-color: red;
    }
</style> 
=======
        <text style="font-weight: {make_bold == 1 ? 'bold' : 'normal'}">
            {heat == null ? 'ΔHeat (J)' : heat.toString() + '(J)'}
        </text>
        =
        <text style="font-weight: {make_bold == 2 ? 'bold' : 'normal'}">
            {mass == null ? 'Mass (g)' : mass.toString() + '(g)'}
        </text>
        *
        <text style="font-weight: {make_bold == 3 ? 'bold' : 'normal'}">
            {heat_capacity == null ? 'Heat Capacity (J/g°C)' : heat_capacity.toString() + '(J/g°C)'}
        </text>
        *
        <text style="font-weight: {make_bold == 4 ? 'bold' : 'normal'}">
            {temp_change == null ? 'Change in temp(Final Temp (°C) - Initial Temp (°C))' : temp_change.toString() + '(Final Temp - Initial Temp)'}
        </text>
    </li>
</ul>
<button on:click={handleClick}> Click me </button>
>>>>>>> 75745b76f6c780de8e2d89d0b8d3012d69cc04fb
