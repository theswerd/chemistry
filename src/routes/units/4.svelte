<script>
  let ph = "";
  let pOH = "";
  let H = "";
  let OH = "";
  let acidity = "-";

  let handlePHChange = () => {
    if (ph === "" || ph === null) {
      emptyValues();
    }
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
      ph = -Math.log10(14 - OH);
      pOH = 14 - ph;

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
</script>

<style>
  h1 {
    text-align: center;
    margin: 0 auto;
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  h2 {
    margin: 0 auto;
    font-size: 2em;
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
      font-size: 4em;
    }
    h2 {
      font-size: 2.8em;
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
    <th>Acid / Base/ Neutral</th>
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
  <summary>How to:</summary>
  <ol>
    <li>1. Calculate PH</li>
    <ul>
	  <li>PH from pOH: 14 - {pOH == '' ? 'pOH' : pOH} = {ph == '' ? 'PH' : ph}</li>
	  <li>PH from H: -log<sub>10</sub>({H == '' ? 'H' : H}); = {ph == '' ? 'PH' : ph}</li>
	  <li>PH from OH: -log<sub>10</sub>(14 - {OH == '' ? 'OH' : OH}) = {ph == '' ? 'PH' : ph}</li>

    </ul>
    <li>
      2. Plug PH In
      <ul>
        <li>pOH from PH: 14 - {ph == '' ? 'PH' : ph} = {pOH == '' ? 'pOH':pOH}</li>
        <li>[H<sup>+</sup>] from PH: 10<sup>-{ph == '' ? 'PH' : ph}</sup> = [{H == '' ? 'H':H}<sup>+</sup>]</li>
        <li>[OH<sup>-</sup>] from PH: 10<sup>-(14 - {ph == '' ? 'PH' : ph})</sup> = [{OH== '' ? 'OH':OH}<sup>-</sup>]</li>
      </ul>
    </li>
  </ol>
</details>
