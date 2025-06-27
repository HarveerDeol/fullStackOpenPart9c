import express from 'express';
import patientsService from '../services/patientsService'

const patientsRouter = express.Router();

patientsRouter.get('/', (_req, res) => {
    res.send(patientsService.getNonSensitiveEntries());
  });

patientsRouter.post('/', (_req, res) => {
  res.send('Saving a patient!');
});

patientsRouter.post('/', (req, res) => {
    const { name, dateOfBirth, gender, ssn, occupation } = req.body;
    const addedEntry = patientsService.addPatients(
        name,
        dateOfBirth,
        ssn,
        gender,
        occupation
    );
    res.json(addedEntry);
  });
export default patientsRouter;