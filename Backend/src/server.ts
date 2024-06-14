import express, { Request, Response } from 'express';
//import router definition
import route from './routers/notes.router';


const app = express();
const port = 3003;

app.use('/', route)

app.get('/', (req: Request, res: Response) => {
    res.send("Youve reached the notes app");
})
app.listen(port, () => {
    console.log(`Listening on port: ${port}...`);
});