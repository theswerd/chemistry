<script>
    let fullJson = [
        {
            Substance_and_State: "<b>Aluminum</b>",
            deltaH: "",
            deltaG: "",
            S: ""
        },
        {
            Substance_and_State: "Al(s)",
            deltaH: "0",
            deltaG: "0",
            S: 28
        },
        {
            Substance_and_State: "Al2O3(s)",
            deltaH: "–1676",
            deltaG: "–1582",
            S: 51
        },
        {
            Substance_and_State: "Al(OH)3(s)",
            deltaH: "1277",
            deltaG: "",
            S: ""
        },
        {
            Substance_and_State: "AlCl3(s)",
            deltaH: "–704",
            deltaG: "–629",
            S: 111
        },
        {
            Substance_and_State: "<b>Barium</b>",
            deltaH: "",
            deltaG: "",
            S: ""
        },
        {
            Substance_and_State: "Ba(s)",
            deltaH: "0",
            deltaG: "0",
            S: 67
        },
        {
            Substance_and_State: "BaCO3(s)",
            deltaH: "–1219",
            deltaG: "–1139",
            S: 112
        },
        {
            Substance_and_State: "BaO(s)",
            deltaH: "–582",
            deltaG: "–552",
            S: 70
        },
        {
            Substance_and_State: "Ba(OH)2(s)",
            deltaH: "–946",
            deltaG: "",
            S: ""
        },
        {
            Substance_and_State: "BaSO4(s)",
            deltaH: "–1465",
            deltaG: "–1353",
            S: 132
        },

        {
            Substance_and_State: "<b>Beryllium</b>",
            deltaH: "",
            deltaG: "",
            S: ""
        },
        {
            Substance_and_State: "Be(s)",
            deltaH: "0",
            deltaG: "0",
            S: 10
        },
        {
            Substance_and_State: "BeO(s)",
            deltaH: "–599",
            deltaG: "–569",
            S: 14
        },
        {
            Substance_and_State: "Be(OH)2(s)",
            deltaH: "–904",
            deltaG: "–815",
            S: 47
        },

        {
            Substance_and_State: "<b>Bromine</b>",
            deltaH: "",
            deltaG: "",
            S: ""
        },
        {
            Substance_and_State: "Br2(l)",
            deltaH: "0",
            deltaG: "0",
            S: 152
        },
        {
            Substance_and_State: "Br2(g)",
            deltaH: "31",
            deltaG: "3",
            S: 245
        },
        {
            Substance_and_State: "Br2(aq)",
            deltaH: "–3",
            deltaG: "4",
            S: 130
        },
        {
            Substance_and_State: "Br–(aq)",
            deltaH: "–121",
            deltaG: "–104",
            S: 82
        },
        {
            Substance_and_State: "HBr(g)",
            deltaH: "–36",
            deltaG: "–53",
            S: 199
        },

        {
            Substance_and_State: "<b>Cadmium</b>",
            deltaH: "",
            deltaG: "",
            S: ""
        },
        {
            Substance_and_State: "Cd(s)",
            deltaH: "0",
            deltaG: "0",
            S: 52
        },
        {
            Substance_and_State: "CdO(s)",
            deltaH: "–258",
            deltaG: "–228",
            S: 55
        },
        {
            Substance_and_State: "Cd(OH)2(s)",
            deltaH: "–561",
            deltaG: "–474",
            S: 96
        },
        {
            Substance_and_State: "CdS(s)",
            deltaH: "–162",
            deltaG: "–156",
            S: 65
        },
        {
            Substance_and_State: "CdSO4(s)",
            deltaH: "–935",
            deltaG: "–823",
            S: 123
        },

        {
            Substance_and_State: "<b>Calcium</b>",
            deltaH: "",
            deltaG: "",
            S: ""
        },
        {
            Substance_and_State: "Ca(s)",
            deltaH: "0",
            deltaG: "0",
            S: 41
        },
        {
            Substance_and_State: "CaC2(s)",
            deltaH: "–63",
            deltaG: "–68",
            S: 70
        },
        {
            Substance_and_State: "CaCO3(s)",
            deltaH: "–1207",
            deltaG: "–1129",
            S: 93
        },
        {
            Substance_and_State: "CaO(s)",
            deltaH: "–635",
            deltaG: "–604",
            S: 40
        },
        {
            Substance_and_State: "Ca(OH)2(s)",
            deltaH: "–987",
            deltaG: "–899",
            S: 83
        },
        {
            Substance_and_State: "Ca3(PO4)2(s)",
            deltaH: "–4126",
            deltaG: "–3890",
            S: 241
        },
        {
            Substance_and_State: "CaSO4(s)",
            deltaH: "–1433",
            deltaG: "–1320",
            S: 107
        },
        {
            Substance_and_State: "CaSiO3(s)",
            deltaH: "–1630",
            deltaG: "–1550",
            S: 84
        },

        {
            Substance_and_State: "<b>Carbon</b>",
            deltaH: "",
            deltaG: "",
            S: ""
        },
        {
            Substance_and_State: "C(s)(graphite)",
            deltaH: "0",
            deltaG: "0",
            S: 6
        },
        {
            Substance_and_State: "C(s)(diamond)",
            deltaH: "2",
            deltaG: "3",
            S: 2
        },
        {
            Substance_and_State: "CO(g)",
            deltaH: "–110.5",
            deltaG: "–137",
            S: 198
        },
        {
            Substance_and_State: "CO2(g)",
            deltaH: "–393.5",
            deltaG: "–394",
            S: 214
        },
        {
            Substance_and_State: "CH4(g)",
            deltaH: "–75",
            deltaG: "–51",
            S: 186
        },
        {
            Substance_and_State: "CH3OH(g)",
            deltaH: "–201",
            deltaG: "–163",
            S: 240
        },
        {
            Substance_and_State: "CH3OH(l)",
            deltaH: "–239",
            deltaG: "–166",
            S: 127
        },
        {
            Substance_and_State: "H2CO(g)",
            deltaH: "–116",
            deltaG: "–110",
            S: 219
        },
        {
            Substance_and_State: "HCOOH(g)",
            deltaH: "–363",
            deltaG: "–351",
            S: "249"
        },
        {
            Substance_and_State: "HCN(g)",
            deltaH: "135.1",
            deltaG: "125",
            S: "202"
        },
        {
            Substance_and_State: "C2H2(g)",
            deltaH: "227",
            deltaG: "209",
            S: "201"
        },
        {
            Substance_and_State: "C2H4(g)",
            deltaH: "52",
            deltaG: "68",
            S: "219"
        },
        {
            Substance_and_State: "CH3CHO (g)",
            deltaH: "–166",
            deltaG: "–129",
            S: "250"
        },
        {
            Substance_and_State: "C2H5OH (l)",
            deltaH: "–278",
            deltaG: "–175",
            S: "161"
        },
        {
            Substance_and_State: "C2H6(g)",
            deltaH: "–84.7",
            deltaG: "–32.9",
            S: "229.5"
        },
        {
            Substance_and_State: "C3H6(g)",
            deltaH: "20.9",
            deltaG: "62.7",
            S: "266.9"
        },
        {
            Substance_and_State: "C3H8(g)",
            deltaH: "–104",
            deltaG: "24",
            S: "270"
        },
        {
            Substance_and_State:
                "C2H4O (g)                      ethylene oxide",
            deltaH: "–53",
            deltaG: "–13",
            S: "242"
        },
        {
            Substance_and_State: "CH3COOH(l)",
            deltaH: "–484",
            deltaG: "–389",
            S: "160"
        },
        {
            Substance_and_State: "C6H12O6(s)",
            deltaH: "–1275",
            deltaG: "–911",
            S: "212"
        },
        {
            Substance_and_State: "CCl4(l)",
            deltaH: "–135",
            deltaG: "–65",
            S: "216"
        },
        {
            Substance_and_State: "",
            deltaH: "",
            deltaG: "",
            S: ""
        },
        {
            Substance_and_State: "Chlorine",
            deltaH: "",
            deltaG: "",
            S: ""
        },
        {
            Substance_and_State: "Cl2(g)",
            deltaH: "0",
            deltaG: "0",
            S: "223"
        },
        {
            Substance_and_State: "Cl2(aq)",
            deltaH: "–23",
            deltaG: "7",
            S: "121"
        },
        {
            Substance_and_State: "Cl–(aq)",
            deltaH: "–167",
            deltaG: "–131",
            S: "57"
        },
        {
            Substance_and_State: "HCl(g)",
            deltaH: "–92",
            deltaG: "–95",
            S: "187"
        },
        {
            Substance_and_State: "",
            deltaH: "",
            deltaG: "",
            S: ""
        },
        {
            Substance_and_State: "Chromium",
            deltaH: "",
            deltaG: "",
            S: ""
        },
        {
            Substance_and_State: "Cr(s)",
            deltaH: "0",
            deltaG: "0",
            S: "24"
        },
        {
            Substance_and_State: "Cr2O3(s)",
            deltaH: "–1128",
            deltaG: "–1047",
            S: "81"
        },
        {
            Substance_and_State: "CrO3(s)",
            deltaH: "–579",
            deltaG: "–502",
            S: "72"
        },
        {
            Substance_and_State: "",
            deltaH: "",
            deltaG: "",
            S: ""
        },
        {
            Substance_and_State: "Copper",
            deltaH: "",
            deltaG: "",
            S: ""
        },
        {
            Substance_and_State: "Cu(s)",
            deltaH: "0",
            deltaG: "0",
            S: "33"
        },
        {
            Substance_and_State: "CuCO3(s)",
            deltaH: "–595",
            deltaG: "–518",
            S: "88"
        },
        {
            Substance_and_State: "Cu2O(s)",
            deltaH: "–170",
            deltaG: "–148",
            S: "93"
        },
        {
            Substance_and_State: "CuO(s)",
            deltaH: "–156",
            deltaG: "–128",
            S: "43"
        },
        {
            Substance_and_State: "Cu(OH)2(s)",
            deltaH: "–450",
            deltaG: "–372",
            S: "108"
        },
        {
            Substance_and_State: "CuS(s)",
            deltaH: "–49",
            deltaG: "–49",
            S: "67"
        },
        {
            Substance_and_State: "",
            deltaH: "",
            deltaG: "",
            S: ""
        },
        {
            Substance_and_State: "Fluorine",
            deltaH: "",
            deltaG: "",
            S: ""
        },
        {
            Substance_and_State: "F2(g)",
            deltaH: "0",
            deltaG: "0",
            S: "203"
        },
        {
            Substance_and_State: "F–(aq)",
            deltaH: "–333",
            deltaG: "–279",
            S: "–57"
        },
        {
            Substance_and_State: "HF(aq)",
            deltaH: "–271",
            deltaG: "–273",
            S: "174"
        },
        {
            Substance_and_State: "",
            deltaH: "",
            deltaG: "",
            S: ""
        },
        {
            Substance_and_State: "Hydrogen",
            deltaH: "",
            deltaG: "",
            S: ""
        },
        {
            Substance_and_State: "H2(g)",
            deltaH: "0",
            deltaG: "0",
            S: "131"
        },
        {
            Substance_and_State: "H(g)",
            deltaH: "217",
            deltaG: "203",
            S: "115"
        },
        {
            Substance_and_State: "H+(aq)",
            deltaH: "0",
            deltaG: "0",
            S: "0"
        },
        {
            Substance_and_State: "OH–(aq)",
            deltaH: "–230",
            deltaG: "–157",
            S: "–11"
        },
        {
            Substance_and_State: "H2O(l)",
            deltaH: "–286",
            deltaG: "–237",
            S: "70"
        },
        {
            Substance_and_State: "H2O(g)",
            deltaH: "–242",
            deltaG: "–229",
            S: "189"
        },
        {
            Substance_and_State: "",
            deltaH: "",
            deltaG: "",
            S: ""
        },
        {
            Substance_and_State: "Iodine",
            deltaH: "",
            deltaG: "",
            S: ""
        },
        {
            Substance_and_State: "I2(s)",
            deltaH: "0",
            deltaG: "0",
            S: "116"
        },
        {
            Substance_and_State: "I2(g)",
            deltaH: "62",
            deltaG: "19",
            S: "261"
        },
        {
            Substance_and_State: "I2(aq)",
            deltaH: "23",
            deltaG: "16",
            S: "137"
        },
        {
            Substance_and_State: "I–(aq)",
            deltaH: "–55",
            deltaG: "–52",
            S: "106"
        },
        {
            Substance_and_State: "<b>Iron</b>",
            deltaH: "",
            deltaG: "",
            S: ""
        },
        {
            Substance_and_State: "Fe(s)",
            deltaH: "0",
            deltaG: "0",
            S: 27
        },
        {
            Substance_and_State: "Fe3C(s)",
            deltaH: "21",
            deltaG: "15",
            S: 108
        },
        {
            Substance_and_State: "FeO(s)",
            deltaH: "–272",
            deltaG: "–255",
            S: 61
        },
        {
            Substance_and_State: "Fe3O4(s)                      magnetite",
            deltaH: "–1117",
            deltaG: "–1013",
            S: 146
        },
        {
            Substance_and_State: "Fe2O3(s)                      hematite",
            deltaH: "–826",
            deltaG: "–740",
            S: 90
        },
        {
            Substance_and_State: "FeS(s)",
            deltaH: "–95",
            deltaG: "–97",
            S: 67
        },
        {
            Substance_and_State: "FeS2(s)",
            deltaH: "–178",
            deltaG: "–166",
            S: 53
        },
        {
            Substance_and_State: "FeSO4(s)",
            deltaH: "–929",
            deltaG: "–825",
            S: 121
        },

        {
            Substance_and_State: "<b>Lead</b>",
            deltaH: "",
            deltaG: "",
            S: ""
        },
        {
            Substance_and_State: "Pb(s)",
            deltaH: "0",
            deltaG: "0",
            S: 65
        },
        {
            Substance_and_State: "PbO2(s)",
            deltaH: "–277",
            deltaG: "–217",
            S: 69
        },
        {
            Substance_and_State: "PbS(s)",
            deltaH: "–100",
            deltaG: "–99",
            S: 91
        },
        {
            Substance_and_State: "PbSO4(s)",
            deltaH: "–920",
            deltaG: "–813",
            S: 149
        },

        {
            Substance_and_State: "<b>Magnesium</b>",
            deltaH: "",
            deltaG: "",
            S: ""
        },
        {
            Substance_and_State: "Mg(s)",
            deltaH: "0",
            deltaG: "0",
            S: 33
        },
        {
            Substance_and_State: "MgCO3(s)",
            deltaH: "–1113",
            deltaG: "–1029",
            S: 66
        },
        {
            Substance_and_State: "MgO(s)",
            deltaH: "–602",
            deltaG: "–569",
            S: 27
        },
        {
            Substance_and_State: "Mg(OH)2(s)",
            deltaH: "–925",
            deltaG: "–834",
            S: 64
        },

        {
            Substance_and_State: "<b>Manganese</b>",
            deltaH: "",
            deltaG: "",
            S: ""
        },
        {
            Substance_and_State: "Mn(s)",
            deltaH: "0",
            deltaG: "0",
            S: 32
        },
        {
            Substance_and_State: "MnO(s)",
            deltaH: "–385",
            deltaG: "–363",
            S: 60
        },
        {
            Substance_and_State: "Mn3O4(s)",
            deltaH: "–1387",
            deltaG: "–1280",
            S: 149
        },
        {
            Substance_and_State: "Mn2O3(s)",
            deltaH: "–971",
            deltaG: "–893",
            S: 110
        },
        {
            Substance_and_State: "MnO2(s)",
            deltaH: "–521",
            deltaG: "–466",
            S: 53
        },
        {
            Substance_and_State: "MnO4–(aq)",
            deltaH: "–543",
            deltaG: "–449",
            S: 190
        },

        {
            Substance_and_State: "<b>Mercury</b>",
            deltaH: "",
            deltaG: "",
            S: ""
        },
        {
            Substance_and_State: "Hg(l)",
            deltaH: "0",
            deltaG: "0",
            S: 76
        },
        {
            Substance_and_State: "Hg2Cl2(s)",
            deltaH: "–265",
            deltaG: "–211",
            S: 196
        },
        {
            Substance_and_State: "HgCl2(s)",
            deltaH: "–230",
            deltaG: "–184",
            S: 144
        },
        {
            Substance_and_State: "HgO(s)",
            deltaH: "–90",
            deltaG: "–59",
            S: 70
        },
        {
            Substance_and_State: "HgS(s)",
            deltaH: "–58",
            deltaG: "–49",
            S: 78
        },

        {
            Substance_and_State: "<b>Nickel</b>",
            deltaH: "",
            deltaG: "",
            S: ""
        },
        {
            Substance_and_State: "Ni(s)",
            deltaH: "0",
            deltaG: "0",
            S: 30
        },
        {
            Substance_and_State: "NiCl2(s)",
            deltaH: "–316",
            deltaG: "–272",
            S: 60
        },
        {
            Substance_and_State: "NiO(s)",
            deltaH: "–241",
            deltaG: "–213",
            S: 38
        },
        {
            Substance_and_State: "Ni(OH)2(s)",
            deltaH: "–538",
            deltaG: "–453",
            S: 79
        },
        {
            Substance_and_State: "NiS(s)",
            deltaH: "–93",
            deltaG: "–90",
            S: 53
        },

        {
            Substance_and_State: "<b>Nitrogen</b>",
            deltaH: "",
            deltaG: "",
            S: ""
        },
        {
            Substance_and_State: "N2(g)",
            deltaH: "0",
            deltaG: "0",
            S: 192
        },
        {
            Substance_and_State: "NH3(g)",
            deltaH: "–46",
            deltaG: "–17",
            S: 193
        },
        {
            Substance_and_State: "NH3(aq)",
            deltaH: "–80",
            deltaG: "–27",
            S: 111
        },
        {
            Substance_and_State: "NH4+(aq)",
            deltaH: "–132",
            deltaG: "–79",
            S: 113
        },
        {
            Substance_and_State: "NO(g)",
            deltaH: "90",
            deltaG: "87",
            S: 211
        },
        {
            Substance_and_State: "NO2(g)",
            deltaH: "34",
            deltaG: "52",
            S: 240
        },
        {
            Substance_and_State: "N2O(g)",
            deltaH: "82",
            deltaG: "104",
            S: 220
        },
        {
            Substance_and_State: "N2O4(g)",
            deltaH: "10",
            deltaG: "98",
            S: 304
        },
        {
            Substance_and_State: "N2O4(l)",
            deltaH: "–20",
            deltaG: "97",
            S: 209
        },
        {
            Substance_and_State: "N2O5(s)",
            deltaH: "–42",
            deltaG: "134",
            S: 178
        },
        {
            Substance_and_State: "N2H4(l)",
            deltaH: "51",
            deltaG: "149",
            S: 121
        },
        {
            Substance_and_State: "N2H3CH3(l)",
            deltaH: "54",
            deltaG: "180",
            S: 166
        },
        {
            Substance_and_State: "HNO3(aq)",
            deltaH: "–207",
            deltaG: "–111",
            S: 146
        },
        {
            Substance_and_State: "HNO3(l)",
            deltaH: "–174",
            deltaG: "–81",
            S: 156
        },
        {
            Substance_and_State: "NH4ClO4(s)",
            deltaH: "–295",
            deltaG: "–89",
            S: 186
        },
        {
            Substance_and_State: "NH4Cl(s)",
            deltaH: "–314",
            deltaG: "–203",
            S: 96
        },

        {
            Substance_and_State: "<b>Oxygen</b>",
            deltaH: "",
            deltaG: "",
            S: ""
        },
        {
            Substance_and_State: "O2(g)",
            deltaH: "0",
            deltaG: "0",
            S: 205
        },
        {
            Substance_and_State: "O(g)",
            deltaH: "249",
            deltaG: "232",
            S: 161
        },
        {
            Substance_and_State: "O3(g)",
            deltaH: "143",
            deltaG: "163",
            S: 239
        },

        {
            Substance_and_State: "<b>Phosphorus</b>",
            deltaH: "",
            deltaG: "",
            S: ""
        },
        {
            Substance_and_State: "P(s)white",
            deltaH: "0",
            deltaG: "0",
            S: 41
        },
        {
            Substance_and_State: "P(s) red",
            deltaH: "–18",
            deltaG: "–12",
            S: 23
        },
        {
            Substance_and_State: "P(s) black",
            deltaH: "–39",
            deltaG: "–33",
            S: 23
        },
        {
            Substance_and_State: "P4(g)",
            deltaH: "59",
            deltaG: "24",
            S: 280
        },
        {
            Substance_and_State: "PF5(g)",
            deltaH: "–1578",
            deltaG: "–1509",
            S: 296
        },
        {
            Substance_and_State: "PH3(g)",
            deltaH: "5",
            deltaG: "13",
            S: 210
        },
        {
            Substance_and_State: "H3PO4(s)",
            deltaH: "–1279",
            deltaG: "–1119",
            S: 110
        },
        {
            Substance_and_State: "H3PO4(l)",
            deltaH: "–1267",
            deltaG: "–1124",
            S: 151
        },
        {
            Substance_and_State: "H3PO4(aq)",
            deltaH: "–1288",
            deltaG: "–1143",
            S: 158
        },
        {
            Substance_and_State: "P4O10(s)",
            deltaH: "–2984",
            deltaG: "–2698",
            S: 229
        },

        {
            Substance_and_State: "<b>Potassium</b>",
            deltaH: "",
            deltaG: "",
            S: ""
        },
        {
            Substance_and_State: "K(s)",
            deltaH: "0",
            deltaG: "0",
            S: 64
        },
        {
            Substance_and_State: "KCl(s)",
            deltaH: "–436",
            deltaG: "–408",
            S: 83
        },
        {
            Substance_and_State: "KClO3(s)",
            deltaH: "–391",
            deltaG: "–290",
            S: 143
        },
        {
            Substance_and_State: "KClO4(s)",
            deltaH: "–433",
            deltaG: "–304",
            S: 151
        },
        {
            Substance_and_State: "K2O(s)",
            deltaH: "–361",
            deltaG: "–322",
            S: 92
        },
        {
            Substance_and_State: "K2O2(s)",
            deltaH: "–496",
            deltaG: "–430",
            S: 113
        },
        {
            Substance_and_State: "KO2(s)",
            deltaH: "–283",
            deltaG: "–238",
            S: 117
        },
        {
            Substance_and_State: "KOH(s)",
            deltaH: "–425",
            deltaG: "–379",
            S: 79
        },
        {
            Substance_and_State: "KOH(aq)",
            deltaH: "–481",
            deltaG: "–440",
            S: 9.2
        },

        {
            Substance_and_State: "<b>Silicon</b>",
            deltaH: "",
            deltaG: "",
            S: ""
        },
        {
            Substance_and_State: "SiO2(s)quartz",
            deltaH: "–911",
            deltaG: "–856",
            S: 42
        },
        {
            Substance_and_State: "SiCl4(l)",
            deltaH: "–687",
            deltaG: "–620",
            S: 240
        },

        {
            Substance_and_State: "<b>Silver</b>",
            deltaH: "",
            deltaG: "",
            S: ""
        },
        {
            Substance_and_State: "Ag(s)",
            deltaH: "0",
            deltaG: "0",
            S: 43
        },
        {
            Substance_and_State: "Ag+(aq)",
            deltaH: "105",
            deltaG: "77",
            S: 73
        },
        {
            Substance_and_State: "AgBr(s)",
            deltaH: "–100",
            deltaG: "–97",
            S: 107
        },
        {
            Substance_and_State: "AgCN(s)",
            deltaH: "146",
            deltaG: "164",
            S: 84
        },
        {
            Substance_and_State: "AgCl(s)",
            deltaH: "–127",
            deltaG: "–110",
            S: 96
        },
        {
            Substance_and_State: "Ag2CrO4(s)",
            deltaH: "–712",
            deltaG: "–622",
            S: 217
        },
        {
            Substance_and_State: "AgI(s)",
            deltaH: "–62",
            deltaG: "–66",
            S: 115
        },
        {
            Substance_and_State: "Ag2O(s)",
            deltaH: "–31",
            deltaG: "–11",
            S: 122
        },
        {
            Substance_and_State: "Ag2S(s)",
            deltaH: "–32",
            deltaG: "–40",
            S: 146
        },
        {
            Substance_and_State: "Sodium",
            deltaH: "",
            deltaG: "",
            S: ""
        },
        {
            Substance_and_State: "Na(s)",
            deltaH: "0",
            deltaG: "0",
            S: "51"
        },
        {
            Substance_and_State: "Na+(aq)",
            deltaH: "–240",
            deltaG: "–262",
            S: "59"
        },
        {
            Substance_and_State: "NaBr(s)",
            deltaH: "–360",
            deltaG: "–347",
            S: "84"
        },
        {
            Substance_and_State: "Na2CO3(s)",
            deltaH: "–1131",
            deltaG: "–1048",
            S: "136"
        },
        {
            Substance_and_State: "NaHCO3(s)",
            deltaH: "–948",
            deltaG: "–852",
            S: "102"
        },
        {
            Substance_and_State: "NaCl(s)",
            deltaH: "–411",
            deltaG: "–384",
            S: "72"
        },
        {
            Substance_and_State: "NaH(s)",
            deltaH: "–56",
            deltaG: "–33",
            S: "40"
        },
        {
            Substance_and_State: "NaI(s)",
            deltaH: "–288",
            deltaG: "–282",
            S: "91"
        },
        {
            Substance_and_State: "NaNO2(s)",
            deltaH: "–359",
            deltaG: "–285",
            S: "104"
        },
        {
            Substance_and_State: "NaNO3(s)",
            deltaH: "–467",
            deltaG: "–366",
            S: "116"
        },
        {
            Substance_and_State: "Na2O(s)",
            deltaH: "–416",
            deltaG: "–377",
            S: "73"
        },
        {
            Substance_and_State: "Na2O2(s)",
            deltaH: "–515",
            deltaG: "–451",
            S: "95"
        },
        {
            Substance_and_State: "NaOH(s)",
            deltaH: "–427",
            deltaG: "–381",
            S: "64"
        },
        {
            Substance_and_State: "NaOH(aq)",
            deltaH: "–470",
            deltaG: "–419",
            S: "50"
        },
        {
            Substance_and_State: "",
            deltaH: "",
            deltaG: "",
            S: ""
        },
        {
            Substance_and_State: "Sulphur",
            deltaH: "",
            deltaG: "",
            S: ""
        },
        {
            Substance_and_State: "S(s)rhombic",
            deltaH: "0",
            deltaG: "0",
            S: "32"
        },
        {
            Substance_and_State: "S(s)                      monoclinic",
            deltaH: "0.3",
            deltaG: "0.1",
            S: "33"
        },
        {
            Substance_and_State: "S2–(aq)",
            deltaH: "33",
            deltaG: "86",
            S: "–15"
        },
        {
            Substance_and_State: "S8(g)",
            deltaH: "102",
            deltaG: "50",
            S: "431"
        },
        {
            Substance_and_State: "SF6(g)",
            deltaH: "–1209",
            deltaG: "–1105",
            S: "292"
        },
        {
            Substance_and_State: "H2S(g)",
            deltaH: "–21",
            deltaG: "–34",
            S: "206"
        },
        {
            Substance_and_State: "SO2(g)",
            deltaH: "–297",
            deltaG: "–300",
            S: "248"
        },
        {
            Substance_and_State: "SO3(g)",
            deltaH: "–396",
            deltaG: "–371",
            S: "257"
        },
        {
            Substance_and_State: "SO42–(aq)",
            deltaH: "–909",
            deltaG: "–745",
            S: "20"
        },
        {
            Substance_and_State: "H2SO4(l)",
            deltaH: "–814",
            deltaG: "–690",
            S: "157"
        },
        {
            Substance_and_State: "H2SO4(aq)",
            deltaH: "–909",
            deltaG: "–745",
            S: "20"
        },
        {
            Substance_and_State: "",
            deltaH: "",
            deltaG: "",
            S: ""
        },
        {
            Substance_and_State: "Tin",
            deltaH: "",
            deltaG: "",
            S: ""
        },
        {
            Substance_and_State: "Sn(s)",
            deltaH: "0",
            deltaG: "0",
            S: "52"
        },
        {
            Substance_and_State: "SnO(s)",
            deltaH: "–285",
            deltaG: "–257",
            S: "56"
        },
        {
            Substance_and_State: "SnO2(s)",
            deltaH: "–581",
            deltaG: "–520",
            S: "52"
        },
        {
            Substance_and_State: "Sn(OH)2(s)",
            deltaH: "–561",
            deltaG: "–492",
            S: "155"
        },
        {
            Substance_and_State: "",
            deltaH: "",
            deltaG: "",
            S: ""
        },
        {
            Substance_and_State: "Titanium",
            deltaH: "",
            deltaG: "",
            S: ""
        },
        {
            Substance_and_State: "TiCl4(s)",
            deltaH: "–763",
            deltaG: "–727",
            S: "355"
        },
        {
            Substance_and_State: "TiO2(s)",
            deltaH: "–945",
            deltaG: "–890",
            S: "50"
        },
        {
            Substance_and_State: "",
            deltaH: "",
            deltaG: "",
            S: ""
        },
        {
            Substance_and_State: "Uranium",
            deltaH: "",
            deltaG: "",
            S: ""
        },
        {
            Substance_and_State: "U(s)",
            deltaH: "0",
            deltaG: "0",
            S: "50"
        },
        {
            Substance_and_State: "UF6(s)",
            deltaH: "–2137",
            deltaG: "–2008",
            S: "228"
        },
        {
            Substance_and_State: "UF6(g)",
            deltaH: "–2113",
            deltaG: "–2029",
            S: "380"
        },
        {
            Substance_and_State: "UO2(s)",
            deltaH: "–1084",
            deltaG: "–1029",
            S: "78"
        },
        {
            Substance_and_State: "U3O8(s)",
            deltaH: "–3575",
            deltaG: "–3393",
            S: "282"
        },
        {
            Substance_and_State: "UO3(s)",
            deltaH: "–1230",
            deltaG: "–1150",
            S: "99"
        },
        {
            Substance_and_State: "<b>Xenon</b>",
            deltaH: "",
            deltaG: "",
            S: ""
        },
        {
            Substance_and_State: "Xe(g)",
            deltaH: "0",
            deltaG: "0",
            S: 170
        },
        {
            Substance_and_State: "XeF2(g)",
            deltaH: "–108",
            deltaG: "–48",
            S: 254
        },
        {
            Substance_and_State: "XeF4(g)",
            deltaH: "–251",
            deltaG: "–121",
            S: 146
        },
        {
            Substance_and_State: "XeF6(g)",
            deltaH: "–294",
            deltaG: "–412",
            S: 403
        },

        {
            Substance_and_State: "<b>Zinc</b>",
            deltaH: "",
            deltaG: "",
            S: ""
        },
        {
            Substance_and_State: "Zn(s)",
            deltaH: "0",
            deltaG: "0",
            S: 42
        },
        {
            Substance_and_State: "ZnO(s)",
            deltaH: "–348",
            deltaG: "–318",
            S: 44
        },
        {
            Substance_and_State: "Zn(OH)2(s)",
            deltaH: "–642",
            deltaG: "–554",
            S: 81
        },
        {
            Substance_and_State: "ZnS (s)",
            deltaH: "–206",
            deltaG: "–201",
            S: 58
        },
        {
            Substance_and_State: "ZnSO4(s)",
            deltaH: "–983",
            deltaG: "–874",
            S: 120
        }
    ];
    let json;
    let search = "";

    $: json = fullJson.filter((item)=>{
        return item.S.toString().toUpperCase().includes(search.toUpperCase()) || item.Substance_and_State.toUpperCase().includes(search.toUpperCase()) || item.deltaG.toUpperCase().includes(search.toUpperCase()) || item.deltaH.toUpperCase().includes(search.toUpperCase()) 
    });
</script>
<h2>
    Thermodynamic Data
</h2>
<table>
    <td colspan="4"><input bind:value={search} placeholder="Search"/></td>
    <tr>
        <th>Substance and State</th>
        <th>ΔH<sub>f</sub><sup>o</sup></th>
        <th>ΔG<sub>f</sub><sup>o</sup></th>
        <th>ΔS<sup>o</sup></th>
    </tr>
    {#each json as item}
        <tr>
            <td>{@html item.Substance_and_State}</td>
            <td>{item.deltaH}</td>
            <td>{item.deltaG}</td>
            <td>{item.S}</td>
        </tr>
    {/each}
</table>
