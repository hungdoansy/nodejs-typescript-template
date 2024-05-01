/**
 * The following lines intialize dotenv,
 * so that env vars from the .env file are present in process.env
 */
import { play } from "@/services/play"
import * as dotenv from "dotenv"

dotenv.config()

export const sum = (a: number, b: number): number => {
    play()
    return a + b
}

const main = () => {
    sum(1, 2)
}

main()
