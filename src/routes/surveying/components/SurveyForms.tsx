import React, { FunctionComponent } from 'react'
import JoinPolarForm from '../../../components/JoinPolarForm'
import { Inputs } from './components.style';
import { CalcPropsInterface } from '../../../interfaces/interfaces';
import Link from 'next/link';

interface Props extends CalcPropsInterface {
    errA: string,
    errB: string,
    reset(x: CalcPropsInterface): void,
    handleChange(x: any): void,
    handleSubmit(x: any): void,
    pageRendered: string
}

const SurveyForms: FunctionComponent<Props> = ({ point_A, point_B, errA, errB, reset, handleChange, handleSubmit, pageRendered }) => {
    return (
        <Inputs>
            <form onSubmit={handleSubmit}>
                <div>
                    <p><b>Punch in the values:</b></p>
                    <p style={{ color: "red" }}>{errA ? errA : "."}</p>
                    <JoinPolarForm
                        name='point_A'
                        label='X and Y of Point A'
                        value={point_A}
                        placeholder='  e.g 1702.55 33035052.33'
                        handleChange={handleChange}
                    />

                </div>
                <div>
                    <p style={{ color: "red" }}>
                        {errB ? errB : "."}
                    </p>
                    <JoinPolarForm
                        name='point_B'
                        label='Direction and Distance'
                        description={pageRendered === "polar" ?
                            '(leave space between values, seperate deg min sec with + sign)' : ""}
                        value={point_B}
                        placeholder={pageRendered === "polar" ?
                            '  e.g 20+50+30 20.52' : '  e.g 2058.55 33035052.33'}
                        handleChange={handleChange}
                    />
                </div>
                <section>
                    <button type='submit'>Calculate {pageRendered === "polar" ? "Polar" : "Join"}</button>
                    <button type='button' onClick={() => reset({ point_A: "", point_B: "", })}>reset</button>
                </section>
            </form>

            <div style={{ textAlign: "right", padding: "2rem 0.5rem 0.5rem", fontSize: "0.9rem", textDecoration: "underline" }}>
                <Link href={"#"}><a>More Surveys...</a></Link>
            </div>
        </Inputs>
    )
}

export default SurveyForms