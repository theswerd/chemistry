<script>
  import Notification from "../../../../notification.svelte";

  let molarityOfAcid = "";
  let molarityOfBase = "";
  let volumeOfAcid = "";
  let volumeOfBase = "";
  let kb = "";

  let startingMolsOfBase = "";
  let startingMolsOfAcid = "";

  let filledInMols = false;
  let zeroAcid = false;

  let isAcidLimiting = false;
  let atEquivalencePoint = false;

  let limitingReactant = "";

  let endingMolsOfBase = "";
  let endingMolsOfAcid = "";
  let endingMolsOfConjugateAcid = "";

  let endingMolarityOfBase = "";
  let endingMolarityOfAcid = "";

  let endingMolarityOfConjugateAcid = "";

  let fullVolume = "";

  let pkb = "";
  let ka = "";
  let H = "";
  let OH = "";

  let pOH = "";
  let pH = "";

  let handleChange = () => {
    filledInMols =
      (molarityOfAcid ?? "").toString() &&
      (volumeOfAcid ?? "").toString() &&
      (molarityOfBase ?? "").toString() &&
      (volumeOfBase ?? "").toString();

    if (!filledInMols) {
    
      return;
    } else {
    }

    startingMolsOfBase = (molarityOfBase * volumeOfBase) / 1000;
    startingMolsOfAcid = (molarityOfAcid * volumeOfAcid) / 1000;

    fullVolume = (volumeOfAcid + volumeOfBase) / 1000;

    zeroAcid = startingMolsOfAcid == 0;

    atEquivalencePoint =
      startingMolsOfAcid === startingMolsOfBase &&
      !isNaN(startingMolsOfAcid) &&
      !isNaN(startingMolsOfBase) &&
      filledInMols;
      
    isAcidLimiting = startingMolsOfAcid < startingMolsOfBase;
    limitingReactant = isAcidLimiting ? startingMolsOfAcid : startingMolsOfBase;

    endingMolsOfBase = startingMolsOfBase - limitingReactant;
    endingMolsOfAcid = startingMolsOfAcid - limitingReactant;
    endingMolsOfConjugateAcid = limitingReactant;

    endingMolarityOfConjugateAcid = endingMolsOfConjugateAcid / fullVolume;
    if (zeroAcid) {
      OH = Math.sqrt(molarityOfBase * kb);
      pOH = -Math.log10(OH);
      pH = 14 - pOH;
    } else if (atEquivalencePoint) {
      /* WORKS WITH BASE OR ACID */
      ka = Math.pow(10, -14) / kb;

      H = Math.sqrt(endingMolarityOfConjugateAcid * ka);
      pH = -Math.log10(H);
      pOH = 14 - pH;
    } else {
      if (isAcidLimiting) {
        endingMolarityOfBase = endingMolsOfBase / fullVolume;
        pkb = -Math.log10(kb);
        pOH =
          pkb -
          Math.log10(endingMolarityOfBase / endingMolarityOfConjugateAcid);
        pH = 14 - pOH;
      } else {
        ka = Math.pow(10, -14) / kb;
        endingMolarityOfAcid = endingMolsOfAcid / fullVolume;
        pH = -Math.log10(endingMolarityOfAcid);
        pOH = 14 - pH;
      }
    }
  };
</script>

<h3>Strong Acid/Weak Base</h3>
<table>
  <tr>
    <th>Molarity of Acid (M)</th>
    <th>Volume of Acid (ml)</th>
    <th>Molarity of Base (M)</th>
    <th>Volume of Base (ml)</th>
    <th>Kb</th>
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
    <td><input type="number" bind:value={kb} on:input={handleChange} /></td>
  </tr>
</table>

{#if filledInMols}
  {#if atEquivalencePoint}
    <Notification>This is at the equivalence point</Notification>
  {/if}
  <ol>
    <li>
      {molarityOfBase}
      *
      {volumeOfBase}
      =
      {startingMolsOfBase}
      mols
      {atEquivalencePoint ? '' : 'Base'}
    </li>
    {#if !zeroAcid}
      {#if atEquivalencePoint}
        <li>
          {startingMolsOfBase}
          /
          {fullVolume}
          =
          {endingMolarityOfConjugateAcid}
          M
        </li>
        <li>10<sup>-14</sup> = Ka * {kb}</li>
        <li>Ka = 10<sup>-14</sup>/{kb} = {ka}</li>
        <li>
          [H<sup>-</sup>] = &#8730;({endingMolarityOfConjugateAcid}
          *
          {ka}) =
          {H}
        </li>
        <li>pH = -log({H}) =<b>{pH}</b></li>
        <li>pOH = 14 - {pH} = <b>{pOH}</b></li>
      {:else}
        <li>
          {molarityOfAcid}
          *
          {volumeOfAcid}
          =
          {startingMolsOfAcid}
          mols Acid
        </li>
        <li>{isAcidLimiting ? 'Acid' : 'Base'} is limiting</li>

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
              <td>{endingMolsOfConjugateAcid}</td>
            </tr>
          </table>
        </li>

        <li>Full Volume = {volumeOfAcid} + {volumeOfBase} = {fullVolume}</li>
        {#if isAcidLimiting}
          <li>
            Molarity of Base =
            {endingMolsOfBase}
            /
            {fullVolume}
            =
            {endingMolarityOfBase}
          </li>
          <li>
            Molarity of Conjugate Acid =
            {endingMolsOfConjugateAcid}
            /
            {fullVolume}
            =
            {endingMolarityOfConjugateAcid}
          </li>
          <li>pKb = -log({kb}) = {pkb}</li>
          <!-- <li>{finalUsedAmount}/{fullVolume} = {finalMolarity}</li> -->
          <li>
            pOH =
            {pkb}
            - log({endingMolarityOfBase}
            /
            {endingMolarityOfConjugateAcid}) =
            <b>{pOH}</b>
          </li>
          <li>pH = 14 - {pOH} = <b>{pH}</b></li>
        {:else}
          <li>Ka = 10<sup>-14</sup> / {kb} = {ka}</li>
          <li>
            Molarity of acid =
            {endingMolsOfAcid}
            /
            {fullVolume}
            =
            {endingMolarityOfAcid}
          </li>
          <li>pH = log({endingMolarityOfAcid}) = <b>{pH}</b></li>
          <li>pOH = 14 - {pH} = <b>{pOH}</b></li>
        {/if}
      {/if}
    {:else}
      <!-- OH = Math.sqrt(molarityOfBase * kb);
      pOH = -Math.log10(OH);
      pH = 14 - pOH; -->

      <li>{kb} = x<sup>2</sup> / {molarityOfBase}</li>
      <li>x = &#8730;({molarityOfBase} * {kb}) = {OH} M [OH<sup>-</sup>]</li>
      <li>pOH = -log({OH}) = <b>{pOH}</b></li>
      <li>pH = 14 - {pOH} = <b>{pH}</b></li>
    {/if}
  </ol>
{/if}
