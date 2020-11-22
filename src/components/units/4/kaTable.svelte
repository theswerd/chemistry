<script>
  let searchValue = "";
  const tableData = [
    { acid: "iodic acid", formula: "HIO3", ka: "0.17", pka: 0.77 },
    { acid: "oxalic acid", formula: "H2C2O4", ka: "5.9*10‒2", pka: 1.23 },
    {
      acid: "acidsulphurous acid",
      formula: "H2SO3",
      ka: "1.5*10‒2",
      pka: 1.82,
    },
    {
      acid: "hydrogen sulphate acid",
      formula: "HSO4‒",
      ka: "1.2*10‒2",
      pka: 1.92,
    },
    { acid: "chlorous acid", formula: "HClO2", ka: "1.2*10‒2", pka: 1.92 },
    { acid: "phosphoric acid", formula: "H3PO4", ka: "7.5*10‒3", pka: 2.12 },
    { acid: "hydrofluoric acid", formula: "HF", ka: "7.2*10‒4", pka: 3.14 },
    { acid: "nitrous acid", formula: "HNO2", ka: "4.0*10‒4", pka: 3.4 },
    {
      acid: "hydrogen oxalate acid",
      formula: "HC2O4‒",
      ka: "6.1*10‒5",
      pka: 4.21,
    },
    {
      acid: "acetic acid",
      formula: "HC2H3O2 (or CH3COOH)",
      ka: "1.8*10‒5",
      pka: 4.74,
    },
    { acid: "carbonic acid", formula: "H2CO3", ka: "4.3*10‒7", pka: 6.37 },
    {
      acid: "hydrogen sulphite acid",
      formula: "HSO3‒",
      ka: "1.0*10‒7",
      pka: 7.0,
    },
    { acid: "hydrosulphuric acid", formula: "H2S", ka: "1.0*10‒7", pka: 7.0 },
    {
      acid: "dihydrogen phosphate acid",
      formula: "H2PO4‒",
      ka: "6.2*10‒8",
      pka: 7.21,
    },
    { acid: "hypochlorous acid", formula: "HOCl", ka: "3.5*10‒8", pka: 7.46 },
    { acid: "hypobromous acid", formula: "HOBr", ka: "2.0*10‒9", pka: 8.7 },
    { acid: "hydrocyanic acid", formula: "HCN", ka: "6.2*10‒10", pka: 9.21 },
    { acid: "boric acid", formula: "H3BO3", ka: "5.8*10‒10", pka: 9.24 },
    { acid: "ammonium acid", formula: "NH4+", ka: "5.6*10‒10", pka: 9.25 },
    {
      acid: "hydrogen carbonate acid",
      formula: "HCO3‒",
      ka: "5.6*10‒11",
      pka: 10.25,
    },
    {
      acid: "hydrogen phosphate acid",
      formula: "HPO4 2‒",
      ka: "4.8*10‒13",
      pka: 12.32,
    },
    {
      acid: "hydrogen sulphide acid",
      formula: "HS‒",
      ka: "1.3*10‒13",
      pka: 12.89,
    },
  ];
  let currentTableData = tableData.filter((value) => {
    console.log(value);
    return (
      value.acid.toLowerCase().startsWith(searchValue.toLowerCase()) ||
      value.formula.toLowerCase().startsWith(searchValue.toLowerCase()) ||
      value.ka.toLowerCase().startsWith(searchValue.toLowerCase()) ||
      value.pka.toString().startsWith(searchValue.toLowerCase())
    );
  });

  let handleSearchChange = () => {
    currentTableData = tableData.filter((value) => {
      return (
        value.acid.toLowerCase().startsWith(searchValue.toLowerCase()) ||
        value.formula.toLowerCase().startsWith(searchValue.toLowerCase()) ||
        value.ka.toLowerCase().startsWith(searchValue.toLowerCase()) ||
        value.pka.toString().startsWith(searchValue.toLowerCase())
      );
    });
  };
</script>

<table>
  <td colspan="4">
    <input
      bind:value={searchValue}
      on:input={handleSearchChange}
      placeholder="Search" />
  </td>
  <tr>
    <th>Acid</th>
    <th>Formula</th>
    <th>Ka</th>
    <th>pKa</th>
  </tr>
  {#each currentTableData as acid}
    <tr>
      <td>{acid.acid}</td>
      <td>{acid.formula}</td>
      <td>{acid.ka}</td>
      <td>{acid.pka}</td>
    </tr>
  {/each}
</table>
