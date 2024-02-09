import { RayniaI, RayniaedI } from "./rayniaRoot/RayniaInterface";
import { rayniaContent } from "./rayniaRoot/rayniaContent";
import { rayniaPhysical } from "./rayniaRoot/rayniaPhysical";
import { rayniaProblem } from "./rayniaRoot/rayniaProblem";

export function rayniaCal (data: RayniaI): RayniaedI {
    // physical
    let returnValue: RayniaedI = rayniaPhysical(data)

    // content //
    if (data.length !== undefined && data.complete !== undefined && data.explain !== undefined && data.example !== undefined && data.technic !== undefined) {
        returnValue.content = rayniaContent(data)
    }
    
    if (data.T !== undefined && data.P !== undefined && data.D !== undefined) {
        returnValue.explainTypes = {
            T: data.T,
            D: data.D,
            P: data.P
        }
    }

    // problem //
    if (data.answer !== undefined && data.analyze !== undefined && data.applied !== undefined && data.knowledgeTest !== undefined && data.complexNumber !== undefined && data.step !== undefined && data.analyzeHardness !== undefined && data.technicalTermDifficulty !== undefined) {
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
//         complete: 0, // 0 is ครบ - is ขาด + is เกิน
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
//         answer: 3 // 3 2 1 0 (3 is explain every choice)
//     }, 
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



const test = {
    technic: 0,
    length: 2,
    explain: 0,
    example: 4,
    complete: 0, // 0 is ครบ - is ขาด + is เกิน
    T: 23,
    D: 5,
    P: 55,
    analyze: true,
    applied: true,
    knowledgeTest: true,
    complexNumber: 5,
    step: 5,
    analyzeHardness: 5,
    technicalTermDifficulty: 5,
    answer: 3, // 3 2 1 0 (3 is explain every choice)
    surfaceCmW: 100,
    surfaceCmH: 20, //width height
    weightG: 800,
    deepCm: 12,
    threadSewing: true,
    glue: true,
    gram: 200,
    cover: 23,
    flexibleRidge: true,
    fontTyped: true,
    fontSize: 12,
    eyeCare: true,
    blackWhite: true,
    oneCharLineSpacing: true,
}

console.log(`res:`, rayniaCal(test))

// fix everything in calculation and the database model of books