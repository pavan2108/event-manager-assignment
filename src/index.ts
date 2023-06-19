import express from 'express';
import dotenv from "dotenv";

import connect from './Config/database';
import eventManagerRoutes from './event-manager/event-manager.routes';

const app = express();
dotenv.config();

const PORT = process.env.PORT

app.use(express.json());

app.get('/', (req, res) => {
    res.send({
        message: "Welcome to the Event Manager API"
    });
});

app.use("/event", eventManagerRoutes)


connect();
app.listen(PORT, () => console.log(`Now browse to http://localhost:${PORT}`));
