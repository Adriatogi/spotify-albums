import express, { Request, Response } from 'express';
import { exec } from 'child_process'

const app = express();
const port = 3000;
const cli = 'node dist/cli_main.js '

app.get('/', (req: Request, res: Response) => {
    res.send("Hello from spotify albums!");
});

// Define a route
app.get('/ping', (req: Request, res: Response) => {
    res.json({ message: 'Ping successful' });
});

app.get('/labels', (req: Request, res: Response) => {

    let labels: string[]
    exec(cli + 'gl', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        labels = stdout.split(',')
        console.log("labels", labels)
        res.json({ labels: labels })
    })
})

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});