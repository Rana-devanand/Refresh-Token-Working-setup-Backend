import { Request, Response } from "express";
import * as userServices from "./user.services";
import { CreateResponse } from "../helper/response.helper";

export const create = async (req: Request, res: Response) => {
  console.log(req.body);
  const result = await userServices.create(req.body);
  res.send(CreateResponse(result, "User created"));
};


export const login = async (req: Request, res: Response) => {
  console.log(req.body);
  const result = await userServices.login(req.body);
  const refreshToken = result.refreshToken
  res.cookie("refreshToken", refreshToken, { httpOnly: true, secure: true, sameSite: 'strict' }); // 30 days 
  res.send(CreateResponse(result, "User logged in"));
}