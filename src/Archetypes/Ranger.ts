import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private static _instance = 0;

  constructor(
    name: string,
    private _energyType: EnergyType = 'stamina',
  ) {
    super(name);
    Ranger._instance += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger._instance;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}