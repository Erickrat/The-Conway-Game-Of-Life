import React from 'react'
import { defaultCellsArray } from "./cells";

const Buttons = ({cells, setCells, playing, setPlaying,pause, setPause, generation, setGeneration}) => {

    const handlePlaying = () => {
        if ((playing === false)){
            setPlaying(true)
            setPause(false)
        } else if (( playing === true && pause == true)) {
          setPlaying(false)
          setPause(false)
          setTimeout(() => {
            setPlaying(true)
          }, 100);
        }
      }
    
      const handlePause = () => {
        if (pause === false){
            setPause(true)
            setPlaying(false)
        } 
      }

      const handleClear = () => {
        setPause(true)
        setCells(defaultCellsArray)
        setGeneration(0)

        setTimeout(() => {
            setPause(false)
            setPlaying(false)
        }, 100);
      }

    return (
        <div className='buttonDiv'>
            <button className='controlButton' onClick={handlePlaying}>Play</button>
            <button className='controlButton' onClick={handlePause}>Pause</button>
            <button className='controlButton' onClick={handleClear}>Clear</button>

        </div>
    )
}

export default Buttons