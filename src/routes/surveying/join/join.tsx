import React, { FunctionComponent, useState, useEffect } from 'react';
import ValidateCoordinatesInputs from '../../../valitations/validateCoordinates';
import { PointsInterface } from "../../../interfaces/interfaces";
import { useJoin } from '../../../hooks/classes/useJoin';
import Image from 'next/image';
import { useHandleChange } from '../../../hooks/useHandleChange';
import SolutionsComponent from '../components/SolutionsComponent';
import Head from 'next/head';
import MetaTable from '../components/MetaTable';
import SurveyForms from '../components/SurveyForms';
import { Graph, Wrapper } from '../components/components.style';



const Join: FunctionComponent = () => {
    const [showSolutions, setShowSolutions] = useState<boolean>(false);
    const [join, handleChange, reset] = useHandleChange({
        point_A: "",
        point_B: ""
    })
    const [calcs, setCalcs] = useState<PointsInterface>({
        xA: 0,
        yA: 0,
        xB: 0,
        yB: 0
    })
    const [errors, setErrors] = useState<{ a: string, b: string }>({
        a: "",
        b: ""
    })
    const [pageRendered, setPageRandered] = useState<string>("");

    const calculateJoin = useJoin({ values: { ...calcs } });

    useEffect(() => {
        setPageRandered("join");
    }, []);


    const handleSubmit = (e: any): void => {
        e.preventDefault();
        const [errataA, solvedA, statusA] = ValidateCoordinatesInputs(join.point_A);
        const [errataB, solvedB, statusB] = ValidateCoordinatesInputs(join.point_B);
        setErrors({ a: errataA, b: errataB });

        console.log(join);
        console.log(solvedA, solvedB);


        console.log("X is : ", solvedA[0], " Y is: ", solvedA[1], " error : ", errataA);


        console.log("X is : ", solvedB[0], " Y is: ", solvedB[1], " error : ", errataB);
        setCalcs({
            xA: solvedA[0],
            yA: solvedA[1],
            xB: solvedB[0],
            yB: solvedB[1]
        })


        if (statusA && statusB) {
            setShowSolutions(true);
            // setJoin({
            //     point_A: "",
            //     point_B: "",
            // })
        }
    }

    return (
        <Wrapper>
            <Head>
                <title>Join | Surveying</title>
            </Head>
            <div>
                <h1>The Join</h1>
            </div>
            <MetaTable pageRendered={pageRendered} />
            <hr />
            <Graph>
                <div>
                    <Image
                        src="/assets/vectors/graphjoin.svg"
                        width="410px"
                        height="293px"
                        alt="survey join graph"
                    />
                </div>
                <SurveyForms
                    point_A={join.point_A}
                    point_B={join.point_B}
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
                dir={calculateJoin.getDirection()}
                dist={calculateJoin.getDistance()}
                dx={calculateJoin.getDx()}
                dy={calculateJoin.getDy()}
                showSolutions={showSolutions}
                setShowSolutions={setShowSolutions}
                pageRendered={pageRendered}
            />

        </Wrapper >
    )
}

export default Join