import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { PrismaClient } from "@prisma/client";
const app = express();
const prisma = new PrismaClient();
const {PORT} = require("./helper/config");

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
