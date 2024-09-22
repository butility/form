
export * from "@/core/generate";
import {
    generatePassword as password,
    generateRandomDate as date,
    generateRandomString as string,
    generateUUID as UUID
} from "@/core/generate";

const Generate = {
    password,
    date,
    string,
    UUID
}

export default Generate;