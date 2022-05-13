import React from 'react';
import { validateTwoValuesInput } from './validateTwoValuesInput';

export const validateCollimationInputs = (formData: string) => {
    const { err, twoEnteredValues, isValid } = validateTwoValuesInput(formData);
    let newError = "";
    let dataValues = {
        BS: 0,
        IS: 0,
        FS: 0,
        remark: "",
        HPC: 0,
        RL: 0
    };
    let remark = "";

    console.log("two vals: ", twoEnteredValues, " err: ", err);

    if (isValid) {
        const mixedSites = twoEnteredValues.x;
        const readings: string[] = mixedSites.split("+");

        console.log("chekcs: ", mixedSites, " sec: ", readings);

        // const remark: string = twoEnteredValues.y;

        if (readings.length === 3) {
            const BS: string = readings[0];
            const IS: string = readings[1];
            const FS: string = readings[2];


            if (Number(BS) !== NaN && Number(IS) !== NaN && Number(FS) !== NaN) {
                if (Number(BS) && !Number(IS) && !Number(FS)) {
                    remark = "START";
                } else if (Number(BS) && !Number(IS) && Number(FS)) {
                    remark = "CP";
                }
                else if (!Number(BS) && !Number(IS) && Number(FS)) {
                    remark = "END";
                } else {
                    remark = "IS";
                }
                dataValues = {
                    BS: Number(BS),
                    IS: Number(IS),
                    FS: Number(FS),
                    remark,
                    HPC: 0,
                    RL: 0
                };

                console.log("the nan is not available here");

            } else {
                newError = "The angle contains none-numeric value other than the plus (+) sign";
            }
        } else {
            newError = "Please seperate your readings with plus (+) sign...";
        }
    } else {
        newError = err;
    }

    return { dataValues, newError };
}
