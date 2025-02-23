import { prismaClient } from "..";
import { generateAccessToken, generateRefreshToken } from "../helper/token.helper";
import { Iuser } from "./user.dto";
import { hashSync } from "bcrypt";

export const create = async (value: Iuser) => {
  const { email, password } = value;
  console.log("Value ", value);
  const result = await prismaClient.user.create({
    data: {
      email: email,
      passwordHash: hashSync(password, 10),
    },
  });
  return result;
};


export const login = async (value : Iuser) => {
  const { email, password } = value;
  const isValidUser = await prismaClient.user.findUnique({ where: { email } });
  if (!isValidUser) {
    throw new Error("User not found");
  }
  const isPasswordValid = hashSync(password, isValidUser.passwordHash) === isValidUser.passwordHash;
  if (!isPasswordValid) {
    throw new Error("Invalid password");
  }
  const user = { userid : isValidUser.id , email : isValidUser.email}
  return {
    accessToken: generateAccessToken(user),
    refreshToken: generateRefreshToken(user),
  };
}