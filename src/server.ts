import express, { Request, Response, Express } from "express";
import { AppConfig } from "./config";

const app: Express = express();
const port: number = AppConfig.get("AppPort");

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, Express.js with TypeScript!!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
