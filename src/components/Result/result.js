import React from 'react'
import styles from './result.module.css'

function result() {
    return (
        <div className ={styles.container}>
            <div className= {styles.content}>
                <div> WALLET BALANCE </div>
                <div className = 'mt-3'> TOKEN BALANCE: </div>
                <div className = 'mt-3'> NAIRA BALANCE: </div>
            </div>
        </div>
    )
}

export default result
