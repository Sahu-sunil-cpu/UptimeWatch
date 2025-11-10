import { PrismaClient } from "../generated/prisma/index.js";

export const client = new PrismaClient();

// function setTimeOut(time: number) {
//     return new Promise((res, rej) => res(setTimeOut(200)))
// }

// setTimeOut(2).then(() => console.log("yes"))


// function setTimeOut(time: number) {
//     return new Promise<void>((res, rej) => {
//         setTimeout(() => res(), 2000)
//     })
// }

// setTimeOut(2).then(() => console.log("yes"))