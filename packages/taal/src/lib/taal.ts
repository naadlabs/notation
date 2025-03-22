import { taals } from './taals.js';
import type { Taal } from './types.js';

function getTaals(): readonly Taal[] {
  return taals;
}

function getTaalByName(name: string): Taal | undefined {
  const filteredTaal = taals.filter((taal) => taal.name === name);
  return filteredTaal.length ? filteredTaal[0] : undefined;
}

function getTaalByBeats(beats: number): readonly Taal[] {
  return taals.filter((taal) => taal.beats === beats);
}

export { getTaals, getTaalByName, getTaalByBeats };