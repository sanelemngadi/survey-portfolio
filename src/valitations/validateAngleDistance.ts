import React from 'react';
import { convDMSToDeg } from '../helpers/convDMSToDeg';
import { validateTwoValuesInput } from './validateTwoValuesInput';

interface AngleInputInterface {
    decimalDegreeAngle: number,
    distance: number,
    newError: string
}

export const validateAngleDistanceInput = (angleDistance: string): AngleInputInterface => {
    // this function validates the angle distance input and returns the consolidated angle for calculations
    const { err, twoEnteredValues, isValid } = validateTwoValuesInput(angleDistance);
    let decimalDegreeAngle: number = 0;
    let distance: number = 0;
    let newError = ""

    if (isValid) {
        const mixedAngle = twoEnteredValues.x;
        const degMinSec: string[] = mixedAngle.split("+");

        if (degMinSec.length === 3) {
            const deg: string = degMinSec[0];
            const mins: string = degMinSec[1];
            const sec: string = degMinSec[2];

            console.log("deg: ", Number(deg), " min: ", Number(mins), " sec: ", Number(sec));


            if (Number(deg) !== NaN && Number(mins) !== NaN && Number(sec) !== NaN) {
                const newDeg: number = Number(deg);
                const newMin: number = Number(mins);
                const newSec: number = Number(sec);
                decimalDegreeAngle = convDMSToDeg({
                    deg: newDeg,
                    mins: newMin,
                    sec: newSec
                }).getDecimalDegrees();

                console.log("the nan is not available here");


                if (Number(twoEnteredValues.y) !== NaN) {
                    distance = Number(twoEnteredValues.y);
                } else {
                    newError = "The distance is not numeric please enter a valid distance, don't include units";
                }
            } else {
                newError = "The angle contains none-numeric value other than the plus (+) sign";
            }

        } else {
            newError = "Please make sure you separate your angle with + signs";
        }

    } else {
        newError = err;
    }

    return { decimalDegreeAngle, distance, newError };
}
