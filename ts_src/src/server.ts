import express, { Request, Response } from 'express';
import { exec } from 'child_process'

const app = express();
const port = 3000;
const cli = 'node dist/cli_main.js '

// form that posts needs to be x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const executeCommand = (command: string, ...args: string[]): Promise<string> => {
    return new Promise((resolve, reject) => {
        const completeCommand = command + args.join(" ")

        exec(completeCommand, (error, stdout, stderr) => {
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

app.get('/ping', (req: Request, res: Response) => {
    res.json({ message: 'Ping successful' });
});

app.get('/labels', async (req: Request, res: Response) => {
    try {
        const stdout: string = await executeCommand(cli + 'gl')
        const labels = stdout.split(',')
        console.log("labels", labels)
        res.json({ labels: labels })
    } catch (error) {
        console.error(`Error: ${error.message}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

app.post("/labels", async (req: Request, res: Response) => {
    try {
        const label = req.body.label || ""
        console.log("Adding label: ", label)
        const stdout: string = await executeCommand(cli, 'al', label)
        res.status(200).json({ message: `Successfully posted label: ${label}` });
    } catch (error) {
        console.error(`Error: ${error.message}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

app.delete("/labels/:label", async (req: Request, res: Response) => {
    try {
        const label = req.params.label;
        console.log("Deleting: ", label)
        const stdout: string = await executeCommand(cli, 'dl', label)
        res.status(200).json({ message: `Successfully deleted label: ${label}` });
    } catch (error) {
        console.error(`Error: ${error.message}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});