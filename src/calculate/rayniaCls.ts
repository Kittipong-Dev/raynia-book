// true false

// tag

interface RayniaInterface {
    content: {
        dept: {
            technic: number;
            length: number;
            explain: number;
            example: number;
        };
        complete: number;
        explainTypes: {
            T: number;
            D: number;
            P: number;
        };
    };
    problem: {
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
        answer: number;
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

/*
{
    content: {
        dept: {
            technic: Number,
            length: Number,
            explain: Number,
            example: Number
        },
        complete: Number,
        explainTypes: {
            T: Number,
            D: Number,
            P: Number
        }
    },
    problem: {
        many: {
            analyze: Boolean,
            applied: Boolean,
            knowledgeTest: Boolean
        },
        hardness: {
            calculationComplexity: {
                complexNumber: Number,
                step: Number
            },
            analyzeHardness: Number,
            technicalTermDifficulty: Number,
        },
        answer: Number
    },
    physical: {
        easyToUse: {
            easyToPack: {
                surfaceCm: [Number, Number], //width height
                weightG: Number,
                deepCm: Number,
                durability: {
                    binding: {
                        threadSewing: Boolean,
                        glue: Boolean
                    },
                    gram: Number,
                    cover: Number
                }
            },
            easyToOpen: {
                threadSewing: Boolean,
                flexibleRidge: Boolean,
                gram: Number,
                surfaceCm: [Number, Number], //width height
            }
        },
        easyToRead: {
            fontTyped: Boolean,
            fontSize: number,
            eyeCare: Boolean,
            blackWhite: Boolean,
            oneCharLineSpacing: Boolean,
        }
    },
}
*/

function rayniaCls (data: RayniaInterface) {
    //content //
    data.content


    // problem //
    const {many, hardness, answer} = data.problem
    // many
    let manyCal = () => {
        let manyScore: number = 0
        let key: keyof typeof many;
        for (key in many) {
            if (many[key]) {
                manyScore += 3
            }
        }
        return manyScore
    }
    let manyScore: number = manyCal();

    // hardness
    

    // answer
    let answerScore: number = answer * 3

    // physical //
    const {easyToUse, easyToRead} = data.physical
    // easyToUse
    


    // easyToRead
    let easyToReadCal = (): number => {
        let easyToReadScore: number = 0
        let key: keyof typeof easyToRead;
        for (key in easyToRead) {
            if (key != "fontSize") {
                if (easyToRead[key]) {
                    easyToReadScore += 2
                } else {
                    easyToReadScore += 1
                }
            } else {
                if (easyToRead[key] < 16) {
                    easyToReadScore += 1
                } else {
                    easyToReadScore += 2
                }
            }
        }
        return easyToReadScore
    }
    let easyToReadScore: number = easyToReadCal();
}