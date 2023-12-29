import express, { Request, Response } from 'express';
import { exec } from 'child_process'

const app = express();
const port = 3000;
const cli = 'node dist/cli_main.js '

const exectuteCommand = (command: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error || stderr) {
                reject(error || new Error(stderr))
            } else {
                console.log(`stdout: ${stdout}`);
                resolve(stdout)
            }
        })
    })
}

app.get('/', (req: Request, res: Response) => {
    res.send("Hello from spotify albums!");
});

// Define a route
app.get('/ping', (req: Request, res: Response) => {
    res.json({ message: 'Ping successful' });
});

app.get('/labels', async (req: Request, res: Response) => {
    try {
        const stdout: string = await exectuteCommand(cli + 'gl')
        const labels = stdout.split(',')
        console.log("labels", labels)
        res.json({ labels: labels })
    } catch (error) {
        console.error(`Error: ${error.message}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});