import * as path from "path";
import dotenv from "dotenv";
dotenv.config();

export const PUBLIC_PATH = path.resolve("client");
export const VIEWS_PATH = path.resolve(PUBLIC_PATH, "views");
export const PORT = process.env.PORT || 3000;
