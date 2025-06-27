import data from '../data/patient';
import { patientsEntry, patientDataEntry } from '../types';

const patients: patientsEntry[] = data as patientsEntry[];


const getEntries = (): patientsEntry[] => {
  return patients;
};


const getNonSensitiveEntries = (): patientDataEntry[] => {
return patients.map(({ id, name, dateOfBirth, gender, occupation}) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
}));
};
  


const addPatients = () => {
  return null;
};

export default {
  getEntries,
  addPatients,
  getNonSensitiveEntries
};