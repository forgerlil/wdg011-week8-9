import express from 'express';
import secure from './middlewares/secure.js';
const app = express();

const port = process.env.PORT || 8000;

app.use(secure);

app.get('/', (req, res) => res.send('Middlewares time!'));

app.listen(port, () => console.log(`Server running on port ${port}`));
