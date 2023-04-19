import express, { Application, Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import path from "path";
import cors from "cors";
import userRouter from "./routes/userRouter";

const app: Application = express();

//Connect MongoDB
import connectDB from "./db/connectDB";
connectDB();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }) as express.RequestHandler);
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json() as express.RequestHandler);

// Routes
app.use("/api", userRouter);

// 404 Not Found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).send("<h1>Page not found on the server</h1>");
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log("====================================");
  console.log("App running on port " + PORT);
  console.log("====================================");
});
