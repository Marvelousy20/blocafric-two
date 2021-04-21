import React from 'react'
import styles from './activity.module.css'

function activity() {
    return (
        <div className = {styles.container}>
            <div className= {styles.recent}>Recent Activity</div>

            <table>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Amount</th>
                </tr>
                <tr>
                    <td>1/1/21</td>
                    <td>Sent</td>
                    <td>&#8358; 100</td>
                </tr>
                <tr>
                    <td>2/2/21</td>
                    <td>Received</td>
                    <td>&#8358; 200</td>
                </tr>
                <tr>
                    <td>3/3/21</td>
                    <td>Sent</td>
                    <td>&#8358; 300</td>
                </tr>
            </table>
        </div>
    )
}

export default activity
