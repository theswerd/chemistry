<script>
  let weightOf1 = "";
  let volumeOf2 = "";
  let molarityOf2 = "";

  let moles = "__";

  let onChange = () => {
    moles = volumeOf2 * (1 / 1000) * molarityOf2;
  };
</script>

<h3>Solve for molar mass of Titrated element</h3>
<table>
  <tr>
    <th>Weight of Element #1 (g)</th>
    <th>Volume of Element #2 (ml)</th>
    <th>Molarity of Element #2 (M)</th>
  </tr>
  <tr>
    <td><input bind:value={weightOf1} on:input={onChange} type="number" /></td>
    <td><input bind:value={volumeOf2} on:input={onChange} type="number" /></td>
    <td><input bind:value={molarityOf2} on:input={onChange} type="number" /></td>
  </tr>
</table>
<ol>
  <li>Moles of #1 ={volumeOf2} * (1L / 1000 ml) * {molarityOf2} = <b>{moles} mols</b></li>
  <li>Moles of #2 = Moles of #2 = {moles}</li>
  <li>Molar Mass of #2 = {weightOf1} / {moles} = <b>{weightOf1/moles} g/mol</b></li>

</ol>
