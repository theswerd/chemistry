<script>
    let acidOrBase = 'b';
  let inputElement = '';
  let element1 = '';
  let element2 = '';

</script>
<h2>Conjugate Bases and Acids</h2>
<h3>Bases ⇄ Acids</h3>
<table>
  <tr>
    <th style="width:120px" />
    <th>Bases</th>
    <th>Acids</th>
  </tr>
  <tr>
    <th>Rule</th>
    <td style="padding:10px">
      Bases give away one
      <b>H</b>, and in most cases, subtract 1 from the charge
    </td>
    <td style="padding:10px">
      Acids take one
      <b>H</b>, and in most cases, add 1 to the charge
    </td>
  </tr>
  <tr />
  <tr>
    <th>Example</th>
    <td style="text-align:start">
      <ul>
        <li><b>H</b>OCl -&gt; OCl<sup>-</sup></li>
        <li><b>H</b>NO<sub>2</sub> -&gt; NO<sub>2</sub><sup>-</sup></li>
        <li>
          <b>H</b><sub>2</sub>SO<sub>3</sub>
          -&gt;
          <b>H</b>SO<sub>3</sub><sup>-</sup>
        </li>
        <li>
          <b>H</b>C<sub>2</sub>O<sub>4</sub><sup>-</sup>
          -&gt; C<sub>2</sub>O<sub>4</sub><sup>2-</sup>
        </li>
      </ul>
    </td>
    <td style="text-align:start">
      <ul>
        <li>N<b>H</b><sub>3</sub> -&gt; N<b>H</b><sub>4</sub><sup>+</sup></li>
        <li>
          C<sub>6</sub><b>H</b><sub>5</sub>N<b>H</b><sub>2</sub>
          -&gt; C<sub>6</sub><b>H</b><sub>5</sub>N<b>H</b><sub><b>3</b></sub><sup>+</sup>
        </li>
        <li>
          <b>H</b>SO<sub>3</sub><sup>-</sup>
          -&gt;
          <b>H</b><sub>2</sub>SO<sub>3</sub>
        </li>
        <li>
          C<sub>2</sub>O<sub>4</sub><sup>2-</sup>-&gt;
          <b>H</b>C<sub>2</sub>O<sub>4</sub><sup>-</sup>
        </li>
      </ul>
    </td>
  </tr>
  <tr />
</table>
<h3>K<sub>a</sub> and K<sub>b</sub> expressions</h3>
<table>
  <tr>
    <th>Acid / Base</th>
    <th style="padding:5px">Water</th>
    <th style="padding:5px">→</th>
    <th>Element #1</th>
	<th>Element #2</th>
	<th>Acid or Base</th>
  </tr>
  <tr>
    <td><input bind:value={inputElement}/></td>
    <td>H<sub>2</sub>O (I)</td>
    <td>→</td>
    <td><input bind:value={element1}/></td>
	<td><input bind:value={element2}/></td>
	<td><select bind:value={acidOrBase}>
		<option value="a">Acid</option>
		<option value="b">Base</option>
	  </select></td>
  </tr>
</table>
<details>
  <summary>Example</summary>
  <table>
    <td>HCN (aq)</td>
    <td>H<sub>2</sub>O (I)</td>
    <td>→</td>
    <td>H<sub>3</sub>O<sup>+</sup> (aq)</td>
    <td>CN<sup>-</sup> (aq)</td>
  </table>
</details>
<details>
  <summary>How to determine if an element is an acid or base</summary>
  <ol>
	<li>Count the hydrogens on the substance that is before and after the reaction.</li>
	<li>If the number of hydrogens has decreased that substance is the acid. If the number of hydrogens has increased that substance is the base.</li>

  </ol>
</details>
<p>
	K<sub>{acidOrBase}</sub> = [{element1==''?"Output Element #1": element1}][{element2==''?"Output Element #2": element2}]/[{inputElement==''?"Original Element": inputElement}] {	isNaN(element1) == false && element1 != '' && isNaN(element2) == false && element2 != '' && isNaN(inputElement) == false && inputElement != '' ? " = "+((element1*element2)/inputElement)  :""	}
</p>