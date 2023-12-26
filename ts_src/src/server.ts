import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

// Define a route
app.get('/ping', (req: Request, res: Response) => {
    res.json({ message: 'Ping successful' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});