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
    get isNameValid(): boolean {
        // TODO: IMPLEMENT
        return false;
    }
    get canSolveForName(): boolean {
        return this.isChemicalEquationValid;
    }

    get solveForName(): string {
        //TODO: IMPLEMENT
        return "Name";
    }
    
    public chemicalEquation?: string;
    get isChemicalEquationValid(): boolean {
        // TODO: IMPLEMENT
        return false;
    }
    get canSolveForChemicalEquation(): boolean {
        // TODO: IMPLEMENT
        return this.isNameValid;
    }
    get solveForChemicalEquation(): string {
        return "Chemical Equation"
    }
    
    public pH?: number;
    get isPHValid(): boolean {
        return !isNaN(this.pH);
    }
    get canSolveForPH(): boolean {
        return !isNaN(this.pH);
    }

    public pOH?: number;
    public OH?: number;
    public H?: number;
    public mols?: number;
    public molarMass?: number;
    public molarity?: number;
    public weight?: number;
    public volume?: number;

    constructor({ name, chemicalEquation, pH, pOH, OH, H, mols, molarMass, molarity, weight, volume }: Compound) {
        Object.assign(this, { name, chemicalEquation, pH, pOH, OH, H, mols, molarMass, molarity, weight, volume });

    }


}

export default Compound