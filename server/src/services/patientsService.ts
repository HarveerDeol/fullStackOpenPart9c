import data from '../data/patient';
import { patientsEntry, patientDataEntry } from '../types';
import { v1 as uuid } from 'uuid';

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
  


const addPatients = (
    name:string, dateOfBirth:string, ssn:string, gender:string, occupation:string
):patientsEntry => {
    const newPatientEntry = {
        name,
        id:uuid(),
        dateOfBirth,
        ssn,
        gender,
        occupation,
      };

    data.push(newPatientEntry);
    return newPatientEntry;
    };

export default {
  getEntries,
  addPatients,
  getNonSensitiveEntries
};