// import React from 'react'

interface RowProps {
    BS: number,
    IS: number,
    FS: number,
    remark: string,
    HPC: number,
    RL: number
}
export const getCollimationCalcs = (array: RowProps[]) => {

    class CollimationMethod {
        array: RowProps[];

        constructor(array: RowProps[]) {
            this.array = array;
        }
        getHPC(): number[] {
            const hpc = this.array.map(x => x.HPC);
            const cp = this.array.filter(z => z.remark === "CP");
            const bs = this.array.filter(z => z.BS);
            const fs = this.array.filter(z => z.FS);
            const hpc_cp = cp.map(x => x.HPC);
            // for (let i = 0; i < this.array.length; i++) {
            //     const BS: number = bs[i];
            //     const FS: number = fs[i];
            //     console.log("bs - fs : ", FS - BS);
            // }

            return hpc;
        }
    }
    return new CollimationMethod(array);
}
