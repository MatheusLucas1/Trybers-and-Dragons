import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private static _instance = 0;

  constructor(
    name: string,
    private _energyType: EnergyType = 'mana',
  ) {
    super(name);
    Mage._instance += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage._instance;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}