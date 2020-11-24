<script>
  import Notification from "../../../../notification.svelte";

  let molarityOfAcid = "";
  let molarityOfBase = "";
  let volumeOfAcid = "";
  let volumeOfBase = "";
  let kaa = ""; //TODO: SWITCH WITH KB

  let startingMolsOfBase = "";
  let startingMolsOfAcid = "";

  let filledInMols = false;
  let zeroBase = false;

  let isBaseLimiting = false;
  let atEquivalencePoint = false;

  let limitingReactant = "";

  let endingMolsOfBase = "";
  let endingMolsOfAcid = "";
  let endingMolsOfConjugateBase = "";

  let endingMolarityOfBase = "";
  let endingMolarityOfAcid = "";

  let endingMolarityOfConjugateBase = "";

  let fullVolume = "";

  let pka = "";
  let kbb = "";
  let HH = "";
  let OHH = "";

  let pOHH = "";
  let pHH = "";

  let handleChange = () => {
    filledInMols =
      (molarityOfAcid ?? "").toString() &&
      (volumeOfAcid ?? "").toString() &&
      (molarityOfBase ?? "").toString() &&
      (volumeOfBase ?? "").toString();

    if (!filledInMols) {
      return;
    }

    startingMolsOfBase = (molarityOfBase * volumeOfBase) / 1000;
    startingMolsOfAcid = (molarityOfAcid * volumeOfAcid) / 1000;

    fullVolume = (volumeOfAcid + volumeOfBase) / 1000;

    zeroBase = startingMolsOfBase == 0;

    atEquivalencePoint =
      startingMolsOfAcid === startingMolsOfBase &&
      !isNaN(startingMolsOfAcid) &&
      !isNaN(startingMolsOfBase) &&
      filledInMols;

    isBaseLimiting = startingMolsOfBase < startingMolsOfAcid;
    limitingReactant = isBaseLimiting ? startingMolsOfBase : startingMolsOfAcid;

    endingMolsOfBase = startingMolsOfBase - limitingReactant;
    endingMolsOfAcid = startingMolsOfAcid - limitingReactant;
    endingMolsOfConjugateBase = limitingReactant;

    endingMolarityOfConjugateBase = endingMolsOfConjugateBase / fullVolume;
    if (zeroBase) {
      HH = Math.sqrt(molarityOfAcid * kaa);
      pHH = -Math.log10(HH);
      pOHH = 14 - pHH;
    } else if (atEquivalencePoint) {
      /* WORKS WITH BASE OR ACID */
      kbb = Math.pow(10, -14) / kaa;

      OHH = Math.sqrt(endingMolarityOfConjugateBase * kbb);
      pOHH = -Math.log10(OHH);
      pHH = 14 - pOHH;
    } else {
      if (isBaseLimiting) {
        endingMolarityOfAcid = endingMolsOfAcid / fullVolume;

        pka = -Math.log10(kaa);
        pOHH =
          pka -
          Math.log10(endingMolarityOfAcid / endingMolarityOfConjugateBase);
        pHH = 14 - pOHH;
      } else {
        kbb = Math.pow(10, -14) / kaa;
        endingMolarityOfBase = endingMolsOfBase / fullVolume;
        pOHH = -Math.log10(endingMolarityOfBase);
        pHH = 14 - pOHH;
      }
    }
  };
</script>

<h3>Weak Acid/Strong Base</h3>
<table>
  <tr>
    <th>Molarity of Acid (M)</th>
    <th>Volume of Acid (ml)</th>
    <th>Molarity of Base (M)</th>
    <th>Volume of Base (ml)</th>
    <th>Ka</th>
  </tr>
  <tr>
    <td>
      <input
        type="number"
        bind:value={molarityOfAcid}
        on:input={handleChange} />
    </td>
    <td>
      <input type="number" bind:value={volumeOfAcid} on:input={handleChange} />
    </td>
    <td>
      <input
        type="number"
        bind:value={molarityOfBase}
        on:input={handleChange} />
    </td>
    <td>
      <input type="number" bind:value={volumeOfBase} on:input={handleChange} />
    </td>
    <td><input type="number" bind:value={kaa} on:input={handleChange} /></td>
  </tr>
</table>

{#if filledInMols}
  {#if atEquivalencePoint}
    <Notification>This is at the equivalence point</Notification>
  {/if}
  <ol>
    <li>
      {molarityOfAcid}
      *
      {volumeOfAcid}
      =
      {startingMolsOfAcid}
      mols
      {atEquivalencePoint ? '' : 'Acid'}
    </li>
    {#if !zeroBase}
      {#if atEquivalencePoint}
        <li>
          {startingMolsOfAcid}
          /
          {fullVolume}
          =
          {endingMolarityOfConjugateBase}
          M
        </li>
        <li>10<sup>-14</sup> = Ka * {kaa}</li>
        <li>Ka = 10<sup>-14</sup>/{kaa} = {kbb}</li>
        <li>
          [H<sup>-</sup>] = &#8730;({endingMolarityOfConjugateBase}
          *
          {kbb}) =
          {OHH}
        </li>
        <li>pH = -log({OHH}) =<b>{pOHH}</b></li>
        <li>pOH = 14 - {pOHH} = <b>{pHH}</b></li>
      {:else}
        <li>
          {molarityOfBase}
          *
          {volumeOfBase}
          =
          {startingMolsOfBase}
          mols Base
        </li>
        <li>{isBaseLimiting ? 'Base' : 'Acid'} is limiting</li>
        <li>
          <table>
            <tr>
              <th>B</th>
              <td>{startingMolsOfBase}</td>
              <td>{startingMolsOfAcid}</td>
              <td>&#8594;</td>
              <td>0</td>
            </tr>
            <tr>
              <th>C</th>
              <td>-{limitingReactant}</td>
              <td>-{limitingReactant}</td>
              <td>&#8594;</td>
              <td>+{limitingReactant}</td>
            </tr>
            <tr>
              <th>A</th>
              <td>{endingMolsOfBase}</td>
              <td>{endingMolsOfAcid}</td>
              <td>&#8594;</td>
              <td>{endingMolsOfConjugateBase}</td>
            </tr>
          </table>
        </li>
        <li>Full Volume = {volumeOfAcid} + {volumeOfBase} = {fullVolume}</li>
        {#if isBaseLimiting}
          <li>
            Molarity of Acid =
            {endingMolsOfAcid}
            /
            {fullVolume}
            =
            {endingMolarityOfAcid}
          </li>
          <li>
            Molarity of Conjugate Base =
            {endingMolsOfConjugateBase}
            /
            {fullVolume}
            =
            {endingMolarityOfConjugateBase}
          </li>
          <li>pKb = -log({kaa}) = {pka}</li>
          <!-- <li>{finalUsedAmount}/{fullVolume} = {finalMolarity}</li> -->
          <li>
            pH =
            {pka}
            - log({endingMolarityOfBase}
            /
            {endingMolarityOfConjugateBase}) =
            <b>{pHH}</b>
          </li>
          <li>pOH = 14 - {pHH} = <b>{pOHH}</b></li>
        {:else}
          <li>
            Molarity of base =
            {endingMolsOfBase}
            /
            {fullVolume}
            =
            {endingMolarityOfBase}
          </li>
          <li>pOH = log({endingMolarityOfBase}) = <b>{pOHH}</b></li>
          <li>pH = 14 - {pOHH} = <b>{pHH}</b></li>
        {/if}
      {/if}
    {:else}
      <li>{kaa} = x<sup>2</sup> / {molarityOfAcid}</li>
      <li>x = &#8730;({molarityOfAcid} * {kaa}) = {HH} M [H<sup>+</sup>]</li>
      <li>pH = -log({HH}) = <b>{pHH}</b></li>
      <li>pOH = 14 - {pHH} = <b>{pOHH}</b></li>
    {/if}
  </ol>
{/if}
