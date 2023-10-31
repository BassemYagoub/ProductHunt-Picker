import * as dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './src/product';

dotenv.config();

const app = express();
const port : number = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(router);

app.listen(port, () => {
    console.log(`ProductHunt Picker listening on port ${port}`);
});