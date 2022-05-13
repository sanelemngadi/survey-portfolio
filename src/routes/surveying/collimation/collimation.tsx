import Head from 'next/head';
import React, { FormEvent, useState } from 'react';
import { getCollimationCalcs } from '../../../helpers/getCollimationCalcs';
import { validateCollimationInputs } from '../../../valitations/validateCollimationInputs';
import { CollimationWrapper, CollimationTable, Form } from './collimation.styles';

interface RowProps {
    BS: number,
    IS: number,
    FS: number,
    remark: string,
    HPC: number,
    RL: number
}
const Collimation = () => {
    const [addRow, setAddRow] = useState<RowProps[]>([]);
    const [formData, setFormData] = useState<string>("");
    const [err, setErr] = useState<string>("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // const [errataB, solvedB, statusB] = ValidateCoordinatesInputs(join.point_B);
        console.log("form data: ", formData);

        // setAddRow(t => t.push(formData));
        const { dataValues, newError } = validateCollimationInputs(formData);

        console.log("data values: ", dataValues, " err: ", newError);

        setErr(newError);

        if (!newError) {
            setAddRow(t => [...t, dataValues]);
        }

        console.log("add row data: ", addRow);
        console.log("add row data BS: ", addRow.map(x => x.BS));


        const coll = getCollimationCalcs(addRow).getHPC();

    }
    return (
        <CollimationWrapper>
            <Head>
                <title>Collimation | Surveying</title>
            </Head>
            <div>
                <h1>Collimation</h1>
            </div>
            <div>
                <p>Readings (BS+IS+FS): enter values separated by a plus sign (+)
                    if the field is null enter 0 , remark is optional</p>
                <p style={{ color: "red" }}>.{err}</p>
                <Form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            name="site"
                            id="site"
                            placeholder=' e.g., 3.0+0+2.0 remark'
                            value={formData}
                            onChange={(e) => setFormData(e.target.value)}
                        />

                        <button type="submit">Add Row</button>
                    </div>
                </Form>
            </div>
            <div>
                <CollimationTable>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td rowSpan={2}>Pnt No.</td>
                            <td colSpan={3}>Readings</td>
                            <td rowSpan={2}>HPC</td>
                            <td rowSpan={2}>RL</td>
                            <td rowSpan={2}>Remark</td>
                        </tr>
                        <tr>
                            <td>BS</td>
                            <td>IS</td>
                            <td>FS</td>
                        </tr>
                        {addRow.length > 0 ? addRow.map((row, index) => {
                            let i = index;
                            let pointName = i + 1 + "A";

                            if (i > 3) {
                                i = 0;
                            }
                            const defaultRemark = "TMB";
                            console.log("row: ", row);

                            return (
                                <tr key={"row-" + index}>
                                    <td>{pointName}</td>
                                    <td>{row.BS !== 0 && row.BS}</td>
                                    <td>{row.IS !== 0 && row.IS}</td>
                                    <td>{row.FS !== 0 && row.FS}</td>
                                    <td>{row.HPC !== 0 && row.HPC}</td>
                                    <td>{row.RL}</td>
                                    <td>{row.remark ? row.remark : defaultRemark}</td>
                                </tr>
                            )
                        }) : (<tr>
                            <td colSpan={7}>Please fill in the form to start calculation</td>
                        </tr>)}
                    </tbody>
                    <tfoot></tfoot>
                </CollimationTable>
            </div>
        </CollimationWrapper>
    )
}

export default React.memo(Collimation);