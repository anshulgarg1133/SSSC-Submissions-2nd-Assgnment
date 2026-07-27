import React from 'react';
import '../styles/result.css' ;

export default function ResultTable(){
    return(
        <div>
            <table>
                <thead className='table-header'>
                    <tr className='table-row'>
                        <td>Name</td>
                        <td>Attempts</td>
                        <td>Final Marks</td>
                        <td>Result</td>
                    </tr>

                </thead>
                <tbody >
                    <tr className='table-body'>
                        <td>Anshul Garg</td>
                        <td>8</td>
                        <td>80</td>
                        <td>Passed</td>
                    </tr>

                </tbody>
            </table>
        </div>
    )

}
