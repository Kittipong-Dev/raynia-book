import { RayniaI } from "./rayniaRoot/RayniaInterface";

// weightG

export function rayniaPhysical(data: RayniaI): {
    physical: {
        easyToReadScore: number;
        easyToUseScore: number;
    };
} {
    // physical //
    const { easyToUse, easyToRead } = data.physical;
    // easyToUse
    const { easyToPack, easyToOpen } = easyToUse;
    const { surfaceCm, deepCm, weightG, durability } = easyToPack;

    let easyToPackScore: number = (surfaceCm[0] < 14.3 ? 1 : surfaceCm[0] === 14.3 ? 0.7 : 0.35)
        + (surfaceCm[1] < 21 ? 1 : surfaceCm[1] === 21 ? 0.7 : 0.35)
        // + weightG
        + (deepCm < 1.5 ? 1 : deepCm === 1.5 ? 0.6 : deepCm < 4 ? 0.3 : 0)
        + (durability.binding.glue ? 0.25 : 0)
        + (durability.binding.threadSewing ? 0.25 : 0)
        + (durability.gram < 100 ? 0.1 : durability.gram === 100 ? 0.15 : 0.25)
        + (durability.cover < 350 ? 0.1 : durability.cover === 350 ? 0.15 : 0.25);

    let easyToOpenScore: number = easyToOpen.threadSewing
        ? 5
        : easyToOpen.flexibleRidge
            ? 4
            : easyToOpen.gram > 100
                ? 2
                : (easyToOpen.surfaceCm[0] <= 14.3 ? 0.5 : 1.5) + (easyToOpen.surfaceCm[1] <= 21 ? 0.5 : 1.5);

    let easyToUseScore: number = easyToPackScore + easyToOpenScore;

    // easyToRead
    let easyToReadScore: number = (easyToRead.blackWhite ? 2 : 1) + (easyToRead.eyeCare ? 2 : 1) + (easyToRead.fontTyped ? 2 : 1) + (easyToRead.oneCharLineSpacing ? 2 : 1) + (easyToRead.fontSize >= 16 ? 2 : 1);

    return {
        physical: {
            easyToReadScore: easyToReadScore,
            easyToUseScore: easyToUseScore
        }
    };
}
