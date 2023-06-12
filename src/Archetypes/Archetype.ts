import { EnergyType } from '../Energy';

abstract class Arquetype {
  constructor(
    private readonly _name: string, 
    private readonly _special: number = 0,
    private readonly _cost: number = 0,
  ) {} 

  public static createdRacesInstances = () : number => {
    throw new Error('Not implemented');
  };

  get name(): string {
    return this._name;
  }

  get special(): number {
    return this._special;
  }

  get cost(): number {
    return this._cost;
  }

  static createdArchetypeInstances() : number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}

export default Arquetype;