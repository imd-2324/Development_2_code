import dotenv from 'dotenv';
import path from 'path';
dotenv.config();

export const PUBLIC_PATH = path.resolve("client");
export const SERVER_PATH = path.resolve("server");
export const VIEWS_PATH = path.resolve(PUBLIC_PATH, "views");
export const PORT = process.env.PORT || 3000;
