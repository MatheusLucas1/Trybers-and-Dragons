import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private static _instance = 0;

  constructor(
    name: string,
    private _energyType: EnergyType = 'mana',
  ) {
    super(name);
    Necromancer._instance += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._instance;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}