import express from "express";
import { coreRouter } from "./routes/coreActions";
import { userAuthRouter } from "./routes/userAuth";
import cors from "cors";
import cookieParser from "cookie-parser";


const app = express();

app.use(
  cors({
    origin: "http://localhost:8080",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use('/api/v1/core', coreRouter);
app.use('/api/v1/user', userAuthRouter);

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log("listening on port 3001")
});