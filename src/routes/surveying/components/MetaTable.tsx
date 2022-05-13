import React, { FunctionComponent } from 'react';
import { MetaDataTable } from './components.style';


interface Props {
  pageRendered: string
}
const MetaTable: FunctionComponent<Props> = ({ pageRendered }): JSX.Element => {
  return (
    <MetaDataTable>
      <thead></thead>
      <tbody>
        <tr>
          <td>Given:</td>
          <td>{pageRendered === "polar" ? "1. Y and X coordinates of point A" : "Y and X coordinates of A and B"} </td>
        </tr>
        <tr>
          <td></td>
          <td>{pageRendered === "polar" && "2. Direction from A to B"}</td>
        </tr>
        <tr>
          <td></td>
          <td>{pageRendered === "polar" && "3. Distance A to B"}</td>
        </tr>
        <tr>
          <td>Required: </td>
          <td>{pageRendered === "polar" ? "Y and X coordinates of point B" : "Direction and Distance from A to B"}</td>
        </tr>
      </tbody>
      <tfoot></tfoot>
    </MetaDataTable>
  )
}

export default MetaTable