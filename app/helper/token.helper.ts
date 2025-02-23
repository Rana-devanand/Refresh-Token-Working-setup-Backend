import jwt from "jsonwebtoken";

import { JWT_SECRET } from "./config";

interface JWT_payload {
  userid: string;
  email: string;
}

export const generateAccessToken = (payload: JWT_payload) => {
  return jwt.sign(payload, String(JWT_SECRET), { expiresIn: "5m" });
};

export const generateRefreshToken = (payload: JWT_payload) => {
  return jwt.sign(payload, String(JWT_SECRET), { expiresIn: "7d" });
};
