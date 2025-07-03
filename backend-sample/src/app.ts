import "dotenv/config";
import express, { Request, Response, NextFunction } from "express";
import helmet from "helmet";
import compression from "compression";
import cors from "cors";

import { limiter } from "./middlewares/rateLimiter";
import routes from "./routes/v1";

export const app = express();

app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(compression());
app.use(cors());

app.use(limiter);

app.use(express.static("public"));

app.use(routes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const status = err.status || 500;
  const message = err.message;
  const error_code = err.code || "Error_Code";
  res.status(status).json({ error: error_code, message: message });
});
