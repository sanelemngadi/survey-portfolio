import React, { FunctionComponent, useState } from 'react'
import { FaWindowClose } from 'react-icons/fa'
import { PointsInterface } from '../../../interfaces/interfaces'
import { ResultTable, Solutions } from '../components/components.style'

interface Props extends PointsInterface {
    dx: number,
    dy: number,
    showSolutions: boolean,
    pageRendered: string,
    setShowSolutions(x: boolean): void
}
const SolutionsComponent: FunctionComponent<Props> = ({ xA, xB, yA, yB, dir, dist, dx, dy, pageRendered, showSolutions, setShowSolutions }) => {
    // I need to use redux for all these operarions
    //if it's join render information for join otherwise render for polar
    return (
        <Solutions isAnswered={showSolutions}>

            <div>
                <span><FaWindowClose size={25} onClick={() => setShowSolutions(false)} /></span>
                <h2>Solutions</h2>
                <ResultTable>
                    <thead>
                        <tr>
                            <th>{pageRendered === "join" ? "Join" : "Polar"} A to B</th>
                            <th>Y Coord</th>
                            <th>X Coord</th>
                            <th>Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>A to B</td>
                            <td>{pageRendered === "polar" ? "A" : "B"} {yB > 0 ? "+" + yB : yB}</td>
                            <td>&nbsp; {xB > 0 ? "+" + xB : xB}</td>
                            <td style={{ color: pageRendered === "join" ? "blue" : "black" }}>
                                {dir}
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td >&nbsp;&nbsp;
                                {pageRendered === "polar" ?
                                    (dy > 0 ? "+" + dy.toFixed(3) : dy.toFixed(3)) :
                                    (yA > 0 ? "A +" + yA : yA)}
                            </td>
                            <td>&nbsp;
                                {pageRendered === "polar" ?
                                    (dx > 0 ? "+" + dx.toFixed(3) : dx.toFixed(3)) :
                                    (xA > 0 ? "+" + xA : xA)}
                            </td>
                            <td style={{ color: pageRendered === "join" ? "blue" : "black" }}>
                                &nbsp;{dist}m
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td style={{ color: pageRendered === "join" ? "blue" : "black" }}>
                                {pageRendered === "polar" ?
                                    (yA > 0 ? "B +" + yA : yA) :
                                    (dy > 0 ? "+" + dy.toFixed(3) : dy.toFixed(3))}
                            </td>
                            <td style={{ color: pageRendered === "join" ? "blue" : "black" }}>
                                {pageRendered === "polar" ?
                                    (xA > 0 ? "+" + xA : xA) :
                                    (dx > 0 ? "+" + dx.toFixed(3) : dx.toFixed(3))}
                            </td>
                            <td>
                            </td>
                        </tr>

                    </tbody>
                    <tfoot></tfoot>
                </ResultTable>
            </div>
        </Solutions >
    )
}

export default SolutionsComponent;