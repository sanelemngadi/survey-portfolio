import Head from 'next/head';
import Image from 'next/image';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { convDegToDMS } from '../../../helpers/convDegToDMS';
import { getPolarCoordinates } from '../../../helpers/getPolarCoordinates';
import { useHandleChange } from '../../../hooks/useHandleChange';
import { PointsInterface } from '../../../interfaces/interfaces';
import { validateAngleDistanceInput } from '../../../valitations/validateAngleDistance';
import ValidateCoordinatesInputs from '../../../valitations/validateCoordinates';
import SolutionsComponent from '../components/SolutionsComponent';
import MetaTable from '../components/MetaTable';
import SurveyForms from '../components/SurveyForms';
import { Graph, Wrapper } from '../components/components.style';

const Polar: FunctionComponent = () => {
    const [showSolutions, setShowSolutions] = useState<boolean>(false);
    const [polar, handleChange, reset] = useHandleChange({
        point_A: "",
        point_B: ""
    });
    const [calcs, setCalcs] = useState<PointsInterface>({
        xB: 0, yB: 0, xA: 0,
        yA: 0, dist: 0, dir: ""
    })
    const [errors, setErrors] = useState<{ a: string, b: string }>({
        a: "",
        b: ""
    });
    const [changeInVals, getChangeInVals] = useState<{ dx: number, dy: number }>({
        dx: 0, dy: 0
    })
    const [pageRendered, setPageRandered] = useState<string>("");

    useEffect(() => {
        setPageRandered("polar");
    }, []);


    const handleSubmit = (e: any): void => {
        e.preventDefault();
        const [errataA, solvedA, statusA] = ValidateCoordinatesInputs(polar.point_A);



        const { decimalDegreeAngle, distance, newError } = validateAngleDistanceInput(polar.point_B);

        console.log("err: ", errataA, " solution A: ", solvedA);
        console.log("err: ", newError, " decimal degree: ", decimalDegreeAngle, " distance: ", distance);

        if (newError === "" && decimalDegreeAngle !== NaN && distance !== NaN && statusA) {
            const angle: string = convDegToDMS(decimalDegreeAngle).getSecMinDeg();
            const pol = getPolarCoordinates({ dist: distance, dir: decimalDegreeAngle, x: solvedA[0], y: solvedA[1] });

            setCalcs({
                dir: angle,
                dist: distance,
                xB: solvedA[0],
                yB: solvedA[1],
                xA: pol.getXValue(),
                yA: pol.getYValue(),
            });
            getChangeInVals({ dx: pol.getDxValue(), dy: pol.getDyValue() });
            console.log("show Solutions");
            setShowSolutions(true);
        } else {
            console.log("do not show Solutions");
            setErrors({ a: errataA, b: newError })
        }

    };
    return (
        <Wrapper>
            <Head>
                <title>Polar | Surveying</title>
            </Head>
            <div>
                <h1>The Polar</h1>
            </div>
            <MetaTable pageRendered={pageRendered} />
            <hr />
            <Graph>
                <div>
                    <Image
                        src="/assets/vectors/graphpolar.svg"
                        width="410px"
                        height="293px"
                        alt="survey join graph"
                    />
                </div>
                <SurveyForms
                    point_A={polar.point_A}
                    point_B={polar.point_B}
                    errA={errors.a ? errors.a : "."}
                    errB={errors.b ? errors.b : "."}
                    reset={reset}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    pageRendered={pageRendered}
                />
            </Graph>
            <i style={{ color: "blueviolet" }}>NB: Please note that your data is not saved anywhere, if you refresh your page it's going to get lost.</i>
            <br />

            <SolutionsComponent
                xA={calcs.xA}
                xB={calcs.xB}
                yA={calcs.yA}
                yB={calcs.yB}
                dir={calcs.dir}
                dist={calcs.dist}
                dx={changeInVals.dx}
                dy={changeInVals.dy}
                showSolutions={showSolutions}
                setShowSolutions={setShowSolutions}
                pageRendered={pageRendered}
            />

        </Wrapper >

    )
}

export default Polar