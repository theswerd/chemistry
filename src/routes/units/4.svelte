<script>

  let ph = "";
  let pOH = "";
  let H = "";
  let OH = "";
  let acidity = "-";

  let handlePHChange = () => {
    if (ph === "" || ph === null) {
      emptyValues();
    } else {
      pOH = 14 - ph;

      H = Math.pow(10, -ph);
      OH = Math.pow(10, -pOH);
      if (ph > 7) {
        acidity = "Base";
      } else if (ph < 7) {
        acidity = "Acid";
      } else {
        acidity = "Neutral";
      }
    }
  };

  let handlepOHChange = () => {
    if (pOH === "" || pOH === null) {
      emptyValues();
    } else {
      ph = 14 - pOH;

      OH = Math.pow(10, -pOH);
      H = Math.pow(10, -ph);

      if (ph > 7) {
        acidity = "Base";
      } else if (ph < 7) {
        acidity = "Acid";
      } else {
        acidity = "Neutral";
      }
    }
  };

  let handleHChange = () => {
    if (H === "" || H === null) {
      emptyValues();
    } else {
      ph = -Math.log10(H);
      pOH = 14 - ph;

      OH = Math.pow(10, -pOH);

      if (ph > 7) {
        acidity = "Base";
      } else if (ph < 7) {
        acidity = "Acid";
      } else {
        acidity = "Neutral";
      }
    }
  };

  let handleOHChange = () => {
    if (OH === "" || OH === null) {
      emptyValues();
    } else {
      pOH = -Math.log10(OH);
      ph = 14 - pOH;

      H = Math.pow(10, -ph);

      if (ph > 7) {
        acidity = "Base";
      } else if (ph < 7) {
        acidity = "Acid";
      } else {
        acidity = "Neutral";
      }
    }
  };

  let emptyValues = () => {
    ph = "";
    pOH = "";
    H = "";
    OH = "";
    acidity = "-";
  };

  //Ka and Kb data
  let acidOrBase = 'b';
  let inputElement = '';
  let element1 = '';
  let element2 = '';
</script>

<style>
  h1 {
    text-align: center;
    margin: 0 auto;
    font-size: 2.4em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  h2 {
    margin: 0 auto;
    font-size: 1.4em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  h3 {
    margin: 0 auto;
    font-size: 1em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    border: 2px solid black;
  }

  table td,
  table th {
    border: 2px solid black;
  }

  table tr:first-child td,
  table tr:first-child th {
    border-top: 0;
  }
  table tr td:first-child,
  table tr th:first-child {
    border-left: 0;
  }
  table tr:last-child td,
  table tr:last-child th {
    border-bottom: 0;
  }
  table tr td:last-child,
  table tr th:last-child {
    border-right: 0;
  }

  .conjugateTable tr td {
    padding: 15px;
    margin: 15px;
  }

  td {
    margin: 0px;
    text-align: center;
  }

  input {
    margin: auto;
    text-align: center;
    width: 100%;
    height: 100%;
    padding: 5px;
    border: none;
    align-self: center;
    box-sizing: border-box;
  }
  input:active,
  input:focus {
    border: none;
    outline: none;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 2.8em;
    }
    h2 {
      font-size: 2em;
    }
    h3 {
      font-size: 1.4em;
    }
  }
</style>

<svelte:head>
  <title>Unit 4</title>
</svelte:head>

<h1>Unit 4: Acids & Bases</h1>

<h2>PH Conversions</h2>
<table>
  <tr>
    <th>PH</th>
    <th>pOH</th>
    <th>[H<sup>+</sup>]</th>
    <th>[OH<sup>-</sup>]</th>
    <th>Acid / Base  / Neutral</th>
  </tr>
  <tr>
    <td><input type="number" bind:value={ph} on:input={handlePHChange} /></td>
    <td><input type="number" bind:value={pOH} on:input={handlepOHChange} /></td>
    <td><input type="number" bind:value={H} on:input={handleHChange} /></td>
    <td><input type="number" bind:value={OH} on:input={handleOHChange} /></td>
    <td>{acidity}</td>
  </tr>
</table>
<details>
  <summary>How to</summary>
  <ol>
    <li>Calculate PH</li>
    <ul>
      <li>
        PH from pOH: 14 -
        {pOH == '' ? 'pOH' : pOH}
        =
        {ph == '' ? 'PH' : ph}
      </li>
      <li>
        PH from H: -log<sub>10</sub>({H == '' ? 'H' : H}); =
        {ph == '' ? 'PH' : ph}
      </li>
      <li>
        PH from OH: -log<sub>10</sub>(14 -
        {OH == '' ? 'OH' : OH}) =
        {ph == '' ? 'PH' : ph}
      </li>
    </ul>

    <li>Plug PH In</li>
    <ul>
      <li>
        pOH from PH: 14 -
        {ph == '' ? 'PH' : ph}
        =
        {pOH == '' ? 'pOH' : pOH}
      </li>
      <li>
        [H<sup>+</sup>] from PH: 10<sup>-{ph == '' ? 'PH' : ph}</sup>
        = [{H == '' ? 'H' : H}<sup>+</sup>]
      </li>
      <li>
        [OH<sup>-</sup>] from PH: 10<sup>-(14 - {ph == '' ? 'PH' : ph})</sup>
        = [{OH == '' ? 'OH' : OH}<sup>-</sup>]
      </li>
    </ul>
  </ol>
</details>
<details>
  <summary>Note Sig Figs</summary>
  <p>
    <b>pH</b>
    and
    <b>pOH</b>
    have one
    <b>1 more</b>
    decimal place than
    <b>[H<sup>+</sup>]</b>
    and
    <b>[OH<sup>-</sup>]</b>
  </p>
</details>
<div style="height:15px" />
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
