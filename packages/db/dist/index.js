"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const index_js_1 = require("../generated/prisma/index.js");
exports.client = new index_js_1.PrismaClient();
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
