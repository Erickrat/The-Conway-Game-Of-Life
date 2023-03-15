import { useState, useEffect } from "react"
import Cell from "./Cell"
import { defaultCellsArray } from "./cells";

const Container = ({playing, setPlaying, generation, setGeneration, pause}) => {

    const [numberOfCells, setNumberOfCells] = useState(130);
    const [cells, setCells] = useState(defaultCellsArray);
    const [pressedCell, setPressedCell] = useState();

    useEffect(() => {
        if (pressedCell >= 0) {

            if (cells[pressedCell] == 0) {
                const newArray = cells.map((cell, i) => {
                    if (i === pressedCell) {
                        return cell + 1;
                    } else {
                        return cell
                    }
                });
                setCells(newArray)
             
            } else {
                const newArray = cells.map((cell, i) => {
                    if (i === pressedCell) {
                        return cell - 1;
                    } else {
                        return cell
                    }
                });
                setCells(newArray)
            }
            
        }

    }, [pressedCell])

    useEffect(() => {
        setPressedCell()
    }, [cells])


    useEffect(() => {

        if (playing && generation < 100 && !pause){
            setGeneration(generation + 1)
            setPlaying(false)

            
            const newArray = cells.map((cell, i) => {
                if (cell === 0){
                    return cell = 1
                } else {
                    return cell = 0
                }
            })
            setCells(newArray)

            setTimeout(() => {
              setPlaying(true)
            }, 300);
          }

    }, [playing])

    return (
        <div className="container">
            {cells.map((cell, index) => <Cell
                index={index}
                key={index}
                pressedCell={pressedCell}
                setPressedCell={setPressedCell}
                cells={cells}
                playing={playing}
            />)}

        </div>
    )
}

export default Container