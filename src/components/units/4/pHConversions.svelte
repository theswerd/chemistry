
<script>
import Header2 from '../../Headers/Header2.svelte';
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
</script>
<Header2>PH Conversions</Header2>
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