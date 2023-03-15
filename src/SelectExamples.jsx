import React from 'react'

const SelectExamples = ({ selectPatterns, setSelectPatterns }) => {
    const handlePatterns = () => {
        setSelectPatterns(true)
    }

    return (
        <button className='patterns-button' onClick={handlePatterns}>Patterns</button>
    )
}
export default SelectExamples