import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private static _instance = 0;

  constructor(
    name: string,
    private _energyType: EnergyType = 'stamina',
  ) {
    super(name);
    Warrior._instance += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior._instance;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}