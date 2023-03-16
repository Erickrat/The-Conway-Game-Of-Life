import closeIcon from './assets/icon-close.svg'
import { bubblesArray, defaultCellsArray, randomArray, pulsarArray, happyArray } from "./cells";

const Modal = ({ rules, setRules, animateModal, setAnimateModal, selectPatterns, setSelectPatterns, setCells }) => {

    const handleCloseRules = () => {
        setAnimateModal(false)
        setTimeout(() => {
            setRules(false)
            setSelectPatterns(false)
        }, 300);
    }

    const handleSelectArray = (e) => {
        setAnimateModal(false)
        setTimeout(() => {
            switch (e.target.id) {
                case 'bubblesArray':
                    setCells(bubblesArray)
                    break;
                case 'defaultCellsArray':
                    setCells(defaultCellsArray)
                    break;
                case 'randomArray':
                    setCells(randomArray)
                    break;
                case 'pulsarArray':
                    setCells(pulsarArray)
                    break;
                case 'happyArray':
                    setCells(happyArray)
                    break;
                default:
                    break;
            }
            setSelectPatterns(false)

        }, 300);

    }

    return (
        <div className='modal' >
            <div className={`box ${animateModal ? "animate" : "close"}`}>
                <h2>{rules ? 'Rules' : 'Patterns'}</h2>
                <div className="close-modal">
                    <img
                        src={closeIcon}
                        onClick={handleCloseRules}
                        alt='close-icon'
                    />
                </div>

                {rules ?
                    <div className='rules-box'>
                        <p>At each step in time, the following transitions occur:</p>
                        <ul>
                            <li>Any live cell with fewer than two live neighbours dies, as if by underpopulation.</li>
                            <li>Any live cell with two or three live neighbours lives on to the next generation.</li>
                            <li>Any live cell with more than three live neighbours dies, as if by overpopulation.</li>
                            <li>Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</li>
                        </ul>
                    </div>
                    :
                    selectPatterns ?
                        <div className='rules-box'>
                            <ul>
                                <li className='select-arrays' id='bubblesArray' onClick={handleSelectArray}>Bubbles</li>
                                <li className='select-arrays' id='defaultCellsArray' onClick={handleSelectArray}>Empty</li>
                                <li className='select-arrays' id='randomArray' onClick={handleSelectArray}>Random</li>
                                <li className='select-arrays' id='pulsarArray' onClick={handleSelectArray}>Pulsar</li>
                                <li className='select-arrays' id='happyArray' onClick={handleSelectArray}>{'Happy <3'}</li>
                            </ul>
                        </div>
                        : ''
                }


            </div>
        </div>
    )
}

export default Modal