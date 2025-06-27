import express from 'express';
const cors = require('cors');
const app = express();
app.use(express.json());

const PORT = 3001;

const corsOptions = {
  origin: 'http://localhost:5173', // Replace with your client's origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};
app.use(cors(corsOptions));

app.get('/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});