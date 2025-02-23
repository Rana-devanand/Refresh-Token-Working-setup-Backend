import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { PrismaClient } from "@prisma/client";
import bodyParser from "body-parser";
const app = express();
const { PORT } = require("./helper/config");

import ApiRoutes from "./users/user.routes";

export const prismaClient = new PrismaClient({
  log: ["query"],
});

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use("/api", ApiRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
