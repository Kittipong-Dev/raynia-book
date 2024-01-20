import { RayniaI } from "./RayniaInterface";

export function rayniaProblem(data: RayniaI): {
    manyScore: number;
    answerScore: number;
    hardnessScore: number;
} | undefined {
    if (data.problem) {
        const { many, hardness, answer } = data.problem;

        // many
        let manyScore: number = (many.analyze ? 3 : 0) + (many.applied ? 3 : 0) + (many.knowledgeTest ? 3 : 0);

        // hardness
        let hardnessScore: number = (hardness.calculationComplexity.complexNumber / 5) * 1.5
            + (hardness.calculationComplexity.step / 5) * 1.5
            + (hardness.analyzeHardness / 5) * 3
            + (hardness.technicalTermDifficulty / 5) * 3;

        // answer
        let answerScore: number = answer * 3;

        return {
            manyScore: manyScore,
            answerScore: answerScore,
            hardnessScore: hardnessScore
        };
    }
}
