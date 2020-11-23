<script>
    let molarityOfAcid = "";
    let molarityOfBase = "";
    let volumeOfAcid = "";
    let volumeOfBase = "";
    let ka = "";
  
    let startingMolsOfBase = "";
    let startingMolsOfAcid = "";
  
    let isAcidLimiting = false;
    let limitingReactant = "";
  
    let endingMolsOfBase = "";
    let endingMolsOfAcid = "";
  
    let fullVolume = "";
    let finalUsedAmount = "";
    let finalMolarity = "";
  
    let pOH = "";
    let pH = "";
  
    let handleChange = () => {
      startingMolsOfBase = molarityOfBase * volumeOfBase;
      startingMolsOfAcid = molarityOfAcid * volumeOfAcid;
      isAcidLimiting = startingMolsOfAcid < startingMolsOfBase;
      limitingReactant = isAcidLimiting ? startingMolsOfAcid : startingMolsOfBase;
      endingMolsOfBase = startingMolsOfBase - limitingReactant;
      endingMolsOfAcid = startingMolsOfAcid - limitingReactant;
      finalUsedAmount = isAcidLimiting ? endingMolsOfBase : endingMolsOfAcid;
      fullVolume = volumeOfAcid + volumeOfBase;
      finalMolarity = finalUsedAmount / fullVolume;
      pOH = -Math.log10(finalMolarity);
      pH = 14 - pOH;
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
      <td><input type="number" bind:value={ka} on:input={handleChange} /></td>
    </tr>
  </table>
  <ol>
    <li>{molarityOfBase} * {volumeOfBase} = {startingMolsOfBase} mols Base</li>
    <li>{molarityOfAcid} * {volumeOfAcid} = {startingMolsOfAcid} mols Acid</li>
    <li>{isAcidLimiting ? 'Acid' : 'Base'} is limiting</li>
    <li>
      <table>
        <tr>
          <td>{startingMolsOfBase}</td>
          <td>{startingMolsOfAcid}</td>
          <td>&#8594;</td>
          <td>0</td>
        </tr>
        <tr>
          <td>-{limitingReactant}</td>
          <td>-{limitingReactant}</td>
          <td>&#8594;</td>
          <td>+{limitingReactant}</td>
        </tr>
        <tr>
          <td>{endingMolsOfBase}</td>
          <td>{endingMolsOfAcid}</td>
          <td>&#8594;</td>
          <td>{limitingReactant}</td>
        </tr>
      </table>
    </li>
    <li>Full Volume = {volumeOfAcid} + {volumeOfBase} = {fullVolume}</li>
    <li>{finalUsedAmount}/{fullVolume} = {finalMolarity}</li>
    <li>pOH = -log({finalMolarity}) = <b>{pOH}</b></li>
    <li>pH = 14 - {pOH} = <b>{pH}</b></li>
  
  </ol>