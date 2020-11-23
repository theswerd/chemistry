<script>
    let molarity1 = "";
    let molarity2 = "";
    let volume1 = "";

</script>
<h3>Solve for volume needed to <b>titrate</b></h3>
<table>
  <tr>
    <th colspan="2">Element #1</th>
    <th colspan="2">Element #2</th>
  </tr>
  <tr>
    <th>Molarity (M)</th>
    <th>Volume</th>
    <th>Molarity (M)</th>
    <th>Volume</th>
  </tr>
  <tr>
    <td><input bind:value={molarity1} type="number"></td>
    <td><input bind:value={volume1}  type="number"/></td>
    <td><input bind:value={molarity2}  type="number"/></td>
    <td>-</td>
  </tr>
</table>

<p>
    M<sub>1</sub>V<sub>1</sub>= M<sub>2</sub>V<sub>2</sub> &#8594; {molarity1} * {volume1} = {molarity2} * x &#8594;  {molarity1} * {volume1}/{molarity2} =  <b>{isNaN(molarity1 * volume1/molarity2)?"___":molarity1 * volume1/molarity2}</b>  
    <br>
    - Remember to add measurements and the element
</p>

