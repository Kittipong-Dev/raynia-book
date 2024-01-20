interface RayniaI {
    content?: {
        dept: {
            technic: number;
            length: number;
            explain: number;
            example: number;
        };
        complete: number;
        explainTypes: [
            { name: "T"; value: number; },
            { name: "D"; value: number; },
            { name: "P"; value: number; }
        ];
    };
    problem?: {
        many: {
            analyze: boolean;
            applied: boolean;
            knowledgeTest: boolean;
        };
        hardness: {
            calculationComplexity: {
                complexNumber: number;
                step: number;
            };
            analyzeHardness: number;
            technicalTermDifficulty: number;
        };
        answer: number; // 3 2 1 0 (3 is explain every choice)
    };
    physical: {
        easyToUse: {
            easyToPack: {
                surfaceCm: [number, number]; //width height
                weightG: number;
                deepCm: number;
                durability: {
                    binding: {
                        threadSewing: boolean;
                        glue: boolean;
                    };
                    gram: number;
                    cover: number;
                };
            };
            easyToOpen: {
                threadSewing: boolean;
                flexibleRidge: boolean;
                gram: number;
                surfaceCm: [number, number]; //width height
            };
        };
        easyToRead: {
            fontTyped: boolean;
            fontSize: number;
            eyeCare: boolean;
            blackWhite: boolean;
            oneCharLineSpacing: boolean;
        };
    };
}


interface RayniaedI {
    content?: {
        completeScore: number;
        deptScore: number;
        explainTypes: [
            { name: "T" | "D" | "P"; value: number; },
            { name: "T" | "D" | "P"; value: number; },
            { name: "T" | "D" | "P"; value: number; }
        ];
    };
    problem?: {
        manyScore: number;
        answerScore: number;
        hardnessScore: number;
    };
    physical: {
        easyToUseScore: number;
        easyToReadScore: number;
    };
}

export {RayniaI, RayniaedI}