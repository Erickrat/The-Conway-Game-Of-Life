import React from 'react'

const HowTo = ({ rules, setRules }) => {

    const handleRules = () => {
        setRules(true)
    }

    return (
        <button className='how-to-button' onClick={handleRules}>How to Play</button>
    )
}

export default HowTo