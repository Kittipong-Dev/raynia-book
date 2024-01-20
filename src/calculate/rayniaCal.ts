import { RayniaI, RayniaedI } from "./rayniaRoot/RayniaInterface";
import { rayniaContent } from "./rayniaRoot/rayniaContent";
import { rayniaPhysical } from "./rayniaRoot/rayniaPhysical";
import { rayniaProblem } from "./rayniaRoot/rayniaProblem";

export function rayniaCal (data: RayniaI): RayniaedI {
    // physical
    let returnValue: RayniaedI = rayniaPhysical(data)

    // content //
    if (data.content) {
        returnValue.content = rayniaContent(data)
    }
    
    // problem //
    if (data.problem) {
        returnValue.problem = rayniaProblem(data)
    }

    return returnValue as RayniaedI
}


// let temp: RayniaI = {
//     content: {
//         dept: {
//             technic: 0,
//             length: 2,
//             explain: 0,
//             example: 4
//         },
//         complete: 0,
//         explainTypes: [
//             {name: "T", value: 23},
//             {name: "D", value: 5},
//             {name: "P", value: 55}
//         ]
//     },
//     problem: {
//         many: {
//             analyze: true,
//             applied: true,
//             knowledgeTest: true
//         },
//         hardness: {
//             calculationComplexity: {
//                 complexNumber: 5,
//                 step: 5
//             },
//             analyzeHardness: 5,
//             technicalTermDifficulty: 5,
//         },
//         answer: 3
//     }, // 3 2 1 0 (3 is explain every choice)
//     physical: {
//         easyToUse: {
//             easyToPack: {
//                 surfaceCm: [100, 20], //width height
//                 weightG: 800,
//                 deepCm: 12,
//                 durability: {
//                     binding: {
//                         threadSewing: true,
//                         glue: true
//                     },
//                     gram: 200,
//                     cover: 23
//                 }
//             },
//             easyToOpen: {
//                 threadSewing: true,
//                 flexibleRidge: true,
//                 gram: 200,
//                 surfaceCm: [100, 20], //width height
//             }
//         },
//         easyToRead: {
//             fontTyped: true,
//             fontSize: 12,
//             eyeCare: true,
//             blackWhite: true,
//             oneCharLineSpacing: true,
//         }
//     },
// }

// console.log(`res:`, rayniaCal(temp))