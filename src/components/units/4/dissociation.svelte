<script>
  let percentDissociation = "";
  let initialMolarity = "";
  let H = "";
  let pH = "";

  let tableFilledIn = false;

  let handleChange = () => {
    tableFilledIn = (percentDissociation.toString() && initialMolarity.toString())
    
    H = percentDissociation * initialMolarity;

    pH = -Math.log10(H);
  };
</script>

<h2>Percent Dissociation</h2>
<table>
  <tr>
    <th>Percent Dissociation (Decimal)</th>
    <th>Initial Molarity (M)</th>
  </tr>
  <tr>
    <th>
      <input
        type="number"
        bind:value={percentDissociation}
        on:input={handleChange} />
    </th>
    <th>
      <input
        type="number"
        bind:value={initialMolarity}
        on:input={handleChange} />
    </th>
  </tr>
</table>
{#if tableFilledIn}
<ol>
<li>
  {percentDissociation} = [H<sup>+</sup>] / {initialMolarity}
</li>
<li>
  [H<sup>+</sup>] = {percentDissociation} * {initialMolarity} = <b>{H}</b> M
</li>
<li>
  pH = -log({H}) = {pH}
</li>
</ol>
{/if}
