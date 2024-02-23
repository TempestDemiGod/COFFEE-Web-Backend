import { configDotenv } from "dotenv";

configDotenv()

export const URI_DB = process.env.URI_DB || ''

export const TOKEN_SECRET = process.env.TOKEN_SECRET || ''

export const CLOUD_NAME = process.env.CLOUD_NAME || ''

export const API_KEY = process.env.API_KEY || ''

export const API_SECRET = process.env.API_SECRET || ''