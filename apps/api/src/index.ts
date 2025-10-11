import { client } from "@repo/db/client";
import express from "express";
import { coreRouter } from "./routes/coreActions";
import { userAuthRouter } from "./routes/userAuth";
import cors from "cors"

const app = express();

app.use(cors())
app.use(express.json());

app.use('/api/v1/core', coreRouter);
app.use('/api/v1/user', userAuthRouter);

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log("listening on port 3001")
});