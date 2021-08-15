import React from 'react';
import data from '../DummyData/DummyData.json'

import styled from 'styled-components';


const Styles = styled.div`
border: 1px solid #333;

`


const Table = () => {


    return (
        <div>
            <table style={{ borderSpacing: '0', border: '1px solid black', marginLeft: 'auto', marginRight: 'auto', width: '80%', marginTop:'2rem', marginBottom: '1rem'}}>
                <thead >
                    <tr >
                        <th style={{ border: 'solid 0.5px #333', background: 'lightblue', color: '#333', fontWeight: 'bold'}}>Record</th>
                        <th style={{ border: 'solid 0.5px #333', background: 'lightblue', color: '#333', fontWeight: 'bold'}}>Review of</th>
                        <th style={{ border: 'solid 0.5px #333', background: 'lightblue', color: '#333', fontWeight: 'bold'}}>Physical Records Kept fopr 7 year</th>
                        <th style={{ border: 'solid 0.5px #333', background: 'lightblue', color: '#333', fontWeight: 'bold'}}>Electronic Records Kept fopr 7 year</th>
                        <th style={{ border: 'solid 0.5px #333', background: 'lightblue', color: '#333', fontWeight: 'bold'}}>Responsible Department</th>
                        <th style={{ border: 'solid 0.5px #333', background: 'lightblue', color: '#333', fontWeight: 'bold'}}>Frequency </th>
                        <th style={{ border: 'solid 0.5px #333', background: 'lightblue', color: '#333', fontWeight: 'bold'}}>Next Due Date</th>
                        <th style={{ border: 'solid 0.5px #333', background: 'lightblue', color: '#333', fontWeight: 'bold'}}>Compliance Officer Signature and Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => (
                            <tr key={item.id}>
                                <td style={{ border: 'solid 0.5px #333', textAlign: "center" }}>{item.record}</td>
                                <td style={{ border: 'solid 0.5px #333', textAlign: "center" }}>{item.reviewOf} </td>
                                <td style={{ border: 'solid 0.5px #333', textAlign: "center" }}>{item.physical} </td>
                                <td style={{ border: 'solid 0.5px #333', textAlign: "center" }}>{item.electronic} </td>
                                <td style={{ border: 'solid 0.5px #333', textAlign: "center" }}>{item.resposibleDepartment} </td>
                                <td style={{ border: 'solid 0.5px #333', textAlign: "center" }}>{item.frequency} </td>
                                <td style={{ border: 'solid 0.5px #333', textAlign: "center" }}> {item.DueDate}</td>
                                <td style={{ border: 'solid 0.5px #333', textAlign: "center" }}> Place Holder</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )

}

export default Table
