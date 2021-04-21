import React from 'react'
import styles from './choice.module.css'

function Choice() {
    const handleClick = (e) => {
        e.preventDefault()
    }

    return (
        <div className = 'mt-4'>
            <div className = {styles.currency}>Select Currency: </div>

            <div className = {styles.content}>
                <div className = {styles.inputsContainer}>
                    <input className = {styles.inputtwo} value = 'TOKEN'  disabled/>
                    <input className = {styles.inputone} value = '0.00000001' id='token' disabled />
                </div>

                <div className = {styles.container}>
                    <div onClick = {handleClick}>
                        <button>SEND</button>
                    </div>

                    <div onClick = {handleClick}>
                        <button>RECEIVE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Choice
