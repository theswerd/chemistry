export interface Compound {
    name?: string;
    chemicalEquation?: string;
    pH?: number;
    pOH?: number;
    OH?: number;
    H?: number;
    mols?: number;
    molarMass?: number;
    molarity?: number;
    weight?: number;
    volume?: number;
}


export class Compound {
    public name?: string;
    get hasName(): boolean {
        return name != undefined;
    }
    
    public chemicalEquation?: string;
    get hasChemicalEquation(): boolean {
        return this.chemicalEquation != undefined;
    }

    
    public pH?: number;
    get hasPH(): boolean {
        return this.pH != undefined;
    }

    public pOH?: number;
    get hasPOH(): boolean {
        return this.pOH != undefined;
    }

    public OH?: number;
    get hasOH(): boolean {
        return this.OH != undefined;
    }
    public H?: number;
    get hasH(): boolean {
        return this.H != undefined;
    }

    public mols?: number;
    get hasMols(): boolean {
        return this.mols != undefined;
    }

    public molarMass?: number;
    get hasMolarMass(): boolean {
        return this.molarMass != undefined;
    }

    public molarity?: number;
    get hasMolarity(): boolean {
        return this.hasMolarity != undefined;
    }

    public weight?: number;
    get hasWeight(): boolean {
        return this.chemicalEquation != undefined;
    }

    public volume?: number;
    get hasVolume(): boolean {
        return this.hasVolume != undefined;
    }

    constructor({ name, chemicalEquation, pH, pOH, OH, H, mols, molarMass, molarity, weight, volume }: Compound) {
        Object.assign(this, { name, chemicalEquation, pH, pOH, OH, H, mols, molarMass, molarity, weight, volume });

    }
}

export default Compound