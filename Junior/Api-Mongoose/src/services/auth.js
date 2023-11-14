import bcrypt from "bcryptjs";
import UsersController from "../controllers/UsersController";

export const createPasswordHash = async (password) => {
   return bcrypt.hash(password, 8);
}