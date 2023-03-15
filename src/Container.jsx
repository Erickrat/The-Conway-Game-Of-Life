import { useState, useEffect } from "react"
import Cell from "./Cell"

const Container = ({ cells, setCells, playing, setPlaying, generation, setGeneration, pause }) => {


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

        if (playing && !pause) {
            setGeneration(generation + 1)
            setPlaying(false)


            const newArray = cells.map((cell, i) => {

                let x = (i % 30); //calculates X of cell
                let y = (i - (i % 30)) / 30; //calculates Y of cell
                let neighbours = 0;

                // Validation of 8 neighbours of cell
                // [x-1 y-1]
                if ((((x - 1) >= 0) && ((x - 1) < 30) && ((y - 1) >= 0) && ((y - 1) < 25))) {
                    if (cells[(i - 31)] === 1) {
                        neighbours += 1;
                    }
                }
                // [x y-1]
                if ((((x) >= 0) && ((x) < 30) && ((y - 1) >= 0) && ((y - 1) < 25))) {
                    if (cells[(i - 30)] === 1) {
                        neighbours += 1;
                    }
                }
                // [x+1 y-1]
                if ((((x + 1) >= 0) && ((x + 1) < 30) && ((y - 1) >= 0) && ((y - 1) < 25))) {
                    if (cells[(i - 29)] === 1) {
                        neighbours += 1;
                    }
                }
                // [x-1 y]
                if ((((x - 1) >= 0) && ((x - 1) < 30) && ((y) >= 0) && ((y) < 25))) {
                    if (cells[(i - 1)] === 1) {
                        neighbours += 1;
                    }
                }
                // [x+1 y]
                if ((((x + 1) >= 0) && ((x + 1) < 30) && ((y) >= 0) && ((y) < 25))) {
                    if (cells[(i + 1)] === 1) {
                        neighbours += 1;
                    }
                }
                // [x-1 y+1]
                if ((((x - 1) >= 0) && ((x - 1) < 30) && ((y + 1) >= 0) && ((y + 1) < 25))) {
                    if (cells[(i + 29)] === 1) {
                        neighbours += 1;
                    }
                }
                // [x y+1]
                if ((((x) >= 0) && ((x) < 30) && ((y + 1) >= 0) && ((y + 1) < 25))) {
                    if (cells[(i + 30)] === 1) {
                        neighbours += 1;
                    }
                }
                // [x+1 y+1]
                if ((((x + 1) >= 0) && ((x + 1) < 30) && ((y + 1) >= 0) && ((y + 1) < 25))) {
                    if (cells[(i + 31)] === 1) {
                        neighbours += 1;
                    }
                }


                //Rules 
                if (cell == 1 && neighbours < 2) { //Any live cell with fewer than two live neighbours dies, as if by underpopulation.
                    return cell = 0
                } else if (cell == 1 && (neighbours == 2 || neighbours == 3)) { //Any live cell with two or three live neighbours lives on to the next generation.
                    return cell = 1
                } else if (cell == 1 && neighbours > 3) { //Any live cell with more than three live neighbours dies, as if by overpopulation.
                    return cell = 0
                } else if (cell == 0 && neighbours == 3) { //Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
                    return cell = 1
                } else { //Default 
                    return cell = 0
                }
            })
            setCells(newArray)

            setTimeout(() => {
                setPlaying(true)
            }, 100);
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
                pause={pause}
            />)}

        </div>
    )
}

export default Container