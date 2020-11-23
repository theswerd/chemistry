<script>
  let molarityOfAcid = "";
  let molarityOfBase = "";
  let volumeOfBase = "";
  let volumeOfAcid = "";

  let molsOfAcid = "";
  let molsOfBase = "";
  let acidIsLimiting = false;
  let remainingMols = "";
  let remainingMolarity = "";
  let fullVolume = "";

  let pH = "";
  let pOH = "";

  let handleUpdate = () => {
    molsOfAcid = molarityOfAcid * volumeOfAcid;
    molsOfBase = molarityOfBase * volumeOfBase;
    acidIsLimiting = molsOfAcid < molsOfBase;
    remainingMols = Math.abs(molsOfAcid - molsOfBase);
    fullVolume = volumeOfAcid + volumeOfBase;
    remainingMolarity = remainingMols / fullVolume;
    if (acidIsLimiting) {
      pOH = Math.log10(remainingMolarity);
      pH = 14 - pOH;
    } else {
      pH = Math.log10(remainingMolarity);
      pOH = 14 - pH;
    }
    if (remainingMols == 0) {
      pH = 7;
      pOH = 7;
    }
  };
</script>

<h3>Strong Base/Strong Acid</h3>
<table>
  <tr>
    <th>Molarity of Acid</th>
    <th>Volume of Acid (ml)</th>
    <th>Molarity of Base</th>
    <th>Volume of Base (ml)</th>
  </tr>
  <tr>
    <th>
      <input
        type="number"
        bind:value={molarityOfAcid}
        on:input={handleUpdate} />
    </th>
    <th>
      <input type="number" bind:value={volumeOfAcid} on:input={handleUpdate} />
    </th>
    <th>
      <input
        type="number"
        bind:value={molarityOfBase}
        on:input={handleUpdate} />
    </th>
    <th>
      <input type="number" bind:value={volumeOfBase} on:input={handleUpdate} />
    </th>
  </tr>
</table>
<ol>
  <li>{molarityOfAcid} M [H] * {volumeOfAcid} ml = {molsOfAcid} mol [H]</li>
  <li>
    {molarityOfBase}
    M [OH<sup>-</sup>] *
    {volumeOfBase}
    ml =
    {molsOfBase}
    mol [OH<sup>-</sup>]
  </li>
  <li>
    As we have fewer mols of the
    {acidIsLimiting ? 'acid' : 'base'}, it is limiting, and we will subtract it
    from the
    {acidIsLimiting ? 'base' : 'acid'}<br />
    {acidIsLimiting ? molsOfBase : molsOfAcid}
    -
    {acidIsLimiting ? molsOfAcid : molsOfBase}
    =
    <b>{remainingMols} mols</b>
  </li>
  <li>
    New Volume =
    {volumeOfAcid}
    ml +
    {volumeOfBase}
    ml =
    <b>{fullVolume} ml</b>
  </li>
  <li>
    Molarity =
    {remainingMols}/{fullVolume}
    =
    <b>{remainingMolarity} M</b>
  </li>
  <li>
    {acidIsLimiting ? 'pOH' : 'pH'}
    = -log({remainingMolarity}) =
    <b>{acidIsLimiting ? pOH : pH}</b>
  </li>
  <li>
    {acidIsLimiting ? 'pH' : 'pOH'}
    = 14 -
    {acidIsLimiting ? 'pOH' : 'pH'}
    = 14 -
    {acidIsLimiting ? pOH : pH}
    =
    <b>{acidIsLimiting ? pH : pOH}</b>
  </li>

  <li />
</ol>
