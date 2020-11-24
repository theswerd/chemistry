<script>
  let searchValue = "";
  const acidsData = [
    { acid: "iodic acid", formula: "HIO<sub>3<sub/>", ka: "0.17", pka: 0.77 },
    { acid: "oxalic acid", formula: "H<sub>2</sub>C<sub>2</sub>O<sub>4<sub/>", ka: "5.9*10‒2", pka: 1.23 },
    {
      acid: "sulphurous acid",
      formula: "H<sub>2</sub>SO<sub>3</sub>",
      ka: "1.5*10‒2",
      pka: 1.82,
    },
    {
      acid: "hydrogen sulphate acid",
      formula: "HSO<sub>4</sub><sup>‒</sup>",
      ka: "1.2*10‒2",
      pka: 1.92,
    },
    { acid: "chlorous acid", formula: "HClO<sub>2</sub>", ka: "1.2*10‒2", pka: 1.92 },
    { acid: "phosphoric acid", formula: "H<sub>3</sub>PO<sub>4</sub>", ka: "7.5*10‒3", pka: 2.12 },
    { acid: "hydrofluoric acid", formula: "HF", ka: "7.2*10‒4", pka: 3.14 },
    { acid: "nitrous acid", formula: "HNO<sub>2</sub>", ka: "4.0*10‒4", pka: 3.4 },
    {
      acid: "hydrogen oxalate acid",
      formula: "HC<sub>2</sub>O<sub>4</sub><sup>‒</sup>",
      ka: "6.1*10‒5",
      pka: 4.21,
    },
    {
      acid: "acetic acid",
      formula: "HC<sub>2</sub>H<sub>3</sub>O<sub>2</sub> (or CH<sub>3</sub>COOH)",
      ka: "1.8*10‒5",
      pka: 4.74,
    },
    { acid: "carbonic acid", formula: "H<sub>2</sub>CO<sub>3</sub>", ka: "4.3*10‒7", pka: 6.37 },
    {
      acid: "hydrogen sulphite acid",
      formula: "HSO<sub>3</sub><sup>‒</sup>",
      ka: "1.0*10‒7",
      pka: 7.0,
    },
    { acid: "hydrosulphuric acid", formula: "H<sub>2</sub>S", ka: "1.0*10‒7", pka: 7.0 },
    {
      acid: "dihydrogen phosphate acid",
      formula: "H<sub>2</sub>PO<sub>4</sub>‒",
      ka: "6.2*10‒8",
      pka: 7.21,
    },
    { acid: "hypochlorous acid", formula: "HOCl", ka: "3.5*10‒8", pka: 7.46 },
    { acid: "hypobromous acid", formula: "HOBr", ka: "2.0*10‒9", pka: 8.7 },
    { acid: "hydrocyanic acid", formula: "HCN", ka: "6.2*10‒10", pka: 9.21 },
    { acid: "boric acid", formula: "H<sub>3</sub>BO<sub>3</sub>", ka: "5.8*10‒10", pka: 9.24 },
    { acid: "ammonium acid", formula: "NH<sub>4</sub><sup>+</sup>", ka: "5.6*10‒10", pka: 9.25 },
    {
      acid: "hydrogen carbonate acid",
      formula: "HCO<sub>3</sub><sup>‒</sup>",
      ka: "5.6*10‒11",
      pka: 10.25,
    },
    {
      acid: "hydrogen phosphate acid",
      formula: "HPO<sub>4</sub><sup>2‒</sup>",
      ka: "4.8*10‒13",
      pka: 12.32,
    },
    {
      acid: "hydrogen sulphide acid",
      formula: "HS<sup>‒<\sup>",
      ka: "1.3*10‒13",
      pka: 12.89,
    },
  ];

  const basesData = [
    {
      base: "diethylamine",
      formula: "C<sub>4</sub>H<sub>10</sub>NH",
      conjugateAcid: "C<sub>4</sub>H<sub>10</sub>NH<sub>2</sub><sup>+</sup>",
      kb: "1.3x10‒3",
      pkb: 2.89,
    },
    {
      base: "ethylamine",
      formula: "C<sub>2</sub>H<sub>5</sub>NH<sup>2</sup>",
      conjugateAcid: "C<sub>2</sub>H<sub>5</sub>NH<sub>3</sub><sup>+</sup>",
      kb: "5.6x10‒4",
      pkb: 3.25,
    },
    {
      base: "methylamine",
      formula: "CH<sub>3</sub>NH<sub>2</sub>",
      conjugateAcid: "CH<sub>3</sub>NH<sub>3</sub><sup>+</sup>",
      kb: "4.4x10‒4",
      pkb: 3.36,
    },
    {
      base: "triethylamine",
      formula: "C<sub>6</sub>H<sub>15</sub>N",
      conjugateAcid: "C<sub>6</sub>H<sub>15</sub>NH<sup>+</sup>",
      kb: "4.0x10‒4",
      pkb: 3.4,
    },
    {
      base: "ammonia",
      formula: "NH<sub>3</sub>",
      conjugateAcid: "NH<sub>4</sub><sup>+</sup>",
      kb: "1.8x10‒5",
      pkb: 4.74,
    },
    {
      base: "hydrazine",
      formula: "H<sub>2</sub>NNH<sub>2</sub> (or N<sub>2</sub>H<sub>4</sub>)",
      conjugateAcid: "H<sub>2</sub>NNH<sub>3</sub><sup>+</sup> (or N<sub>2</sub>H<sub>5</sub><sup>+</sup>)",
      kb: "3.0x10‒6",
      pkb: 5.52,
    },
    {
      base: "hydroxylamine",
      formula: "HONH<sub>2</sub> (or ONH<sub>3</sub>)",
      conjugateAcid: "HONH<sub>3</sub>+ (or ONH<sub>4</sub><sup>+</sup>)",
      kb: "1.1x10‒8",
      pkb: 7.96,
    },
    {
      base: "pyridine",
      formula: "C<sub>5</sub>H<sub>5</sub>N",
      conjugateAcid: "C<sub>5</sub>H<sub>5</sub>NH<sup>+</sup>",
      kb: "1.7x10‒9",
      pkb: 8.77,
    },
    {
      base: "aniline",
      formula: "C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub>",
      conjugateAcid: "C<sub>6</sub>H<sub>5</sub>NH<sub>3</sub><sup>+</sup>",
      kb: "3.8x10‒10",
      pkb: 9.42,
    },
  ];

  let currentTableAcidsData = acidsData;
  let currentTableBasesData = basesData;

  function stripHtml(html)
{
    return html.replace(/<[^>]*>?/gm, '');

}

  let handleSearchChange = () => {
    currentTableAcidsData = acidsData.filter((value) => {
      return (
        stripHtml(value.acid.toLowerCase()).startsWith(searchValue.toLowerCase()) ||
        stripHtml(value.formula.toLowerCase()).startsWith(searchValue.toLowerCase()) ||
        stripHtml(value.ka.toLowerCase()).startsWith(searchValue.toLowerCase()) ||
        stripHtml(value.pka.toString()).startsWith(searchValue.toLowerCase())
      );
    });
    currentTableBasesData = basesData.filter((value)=>{
        return (
            stripHtml(value.base.toLowerCase()).startsWith(searchValue.toLowerCase()) ||
            stripHtml(value.conjugateAcid.toLowerCase()).startsWith(searchValue.toLowerCase()) ||
            stripHtml(value.formula.toLowerCase()).startsWith(searchValue.toLowerCase()) ||
            stripHtml(value.kb.toString()).startsWith(searchValue.toLowerCase()) ||
            stripHtml(value.pkb.toString()).startsWith(searchValue.toLowerCase())

      );
    })
  };
</script>

<table>
  <td colspan="5">
    <input
      bind:value={searchValue}
      on:input={handleSearchChange}
      placeholder="Search" />
  </td>
  <tr colspan="5">
    <th>Acid</th>
    <th>Formula</th>
    <th>Conjugate Base</th>
    <th>Ka</th>
    <th>pKa</th>
  </tr>
  {#each currentTableAcidsData as acid}
    <tr>
      <td>{@html acid.acid}</td>
      <td>{@html acid.formula}</td>
      <td>-</td>
      <td>{acid.ka}</td>
      <td>{acid.pka}</td>
    </tr>
  {/each}
  <tr>
    <th>Base</th>
    <th>Formula</th>
    <th>Conjugate Acid</th>
    <th>kb</th>
    <th>pkb</th>
  </tr>
  {#each currentTableBasesData as base}
    <tr>
            <td>{@html base.base}</td>
            <td>{@html base.formula}</td>
            <td>{@html base.conjugateAcid}</td>
            <td>{base.kb}</td>
            <td>{base.pkb}</td>

    </tr>
  {/each}
</table>
