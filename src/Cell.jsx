import React, { useEffect, useState } from 'react'

const Cell = ({ index, pressedCell, setPressedCell, cells, playing, pause }) => {

  const [cellState, setCellState] = useState(cells[index]);


  const handleCellState = () => {
    if (cellState == 0) {
      setCellState(1);
    } else {
      setCellState(0);
    }
    setPressedCell(index)
  }

  useEffect(() => {
    if (playing == false || pause == true){
      setCellState(cells[index])
    }

    
  },[cells])

  return (
    
      <button className={`cell ${cellState == 1 ? 'alive' : 'dead'}`} onClick={handleCellState}></button>

    )
}

export default Cell

