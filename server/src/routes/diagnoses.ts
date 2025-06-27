import express from 'express';
import diagonsesService from '../services/diagonsesService'

const diagonsesRouter = express.Router();

diagonsesRouter.get('/', (_req, res) => {
  const data = diagonsesService.getEntries() ;
  res.send(data);
});

diagonsesRouter.post('/', (_req, res) => {
  res.send('Saving a diagonses!');
});

export default diagonsesRouter;