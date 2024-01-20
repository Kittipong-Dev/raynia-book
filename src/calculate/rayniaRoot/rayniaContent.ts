import { RayniaI } from "./RayniaInterface";

// complete explainTypes

export function rayniaContent(data: RayniaI): {
    completeScore: number;
    deptScore: number;
    explainTypes: [{
        name: "T";
        value: number;
    }, {
        name: "D";
        value: number;
    }, {
        name: "P";
        value: number;
    }];
} | undefined {
    if (data.content) {
        const { dept, complete, explainTypes } = data.content;

        // dept
        let deptScore: number = ((dept.length / 5) * 2) + ((dept.explain / 5) * 1.5) + (dept.example / 5) + ((dept.technic / 5) * 0.5);

        // complete
        let completeScore: number = 0; ////////////////////////


        // explainTypes
        let sortedExplain = explainTypes.sort((a, b) => b.value - a.value); // wait
        console.log(sortedExplain); // wait

        return {
            completeScore: completeScore,
            deptScore: deptScore,
            explainTypes: sortedExplain
        };
    }
}
