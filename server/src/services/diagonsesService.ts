import data from '../data/diagnoses';
import { diagnosesEntry } from '../types';

const diagonses: diagnosesEntry[] = data as diagnosesEntry[];

const getEntries = (): diagnosesEntry[] => {
  return diagonses;
};


const addDiagonses = () => {
  return null;
};

export default {
  getEntries,
  addDiagonses
};