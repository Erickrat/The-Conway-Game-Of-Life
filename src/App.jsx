import { useEffect, useState } from 'react'
import './App.css'
import Container from './Container'
import Buttons from './Buttons'
import HowTo from './HowTo'
import Modal from './Modal'
import SelectExamples from './SelectExamples'
import { randomArray } from "./cells";

function App() {
  const [cells, setCells] = useState(randomArray);
  const [playing, setPlaying] = useState(true);
  const [generation, setGeneration] = useState(0);
  const [pause, setPause] = useState(false);
  const [rules, setRules] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [selectPatterns, setSelectPatterns] = useState(false);

  useEffect(() => {
    if (rules) {
      setTimeout(() => {
        setAnimateModal(true)
      }, 200);
    }
  }, [rules])

  useEffect(() => {
    if (selectPatterns) {
      setTimeout(() => {
        setAnimateModal(true)
      }, 200);
    }
  }, [selectPatterns])


  return (
    <div className="App">
      <h1>The Conway Game of Life</h1>
      <div className=''>
        <Container
          cells={cells}
          setCells={setCells}
          playing={playing}
          setPlaying={setPlaying}
          generation={generation}
          setGeneration={setGeneration}
          pause={pause}
        />
        <div className='generation'>
          Generation: {generation}
        </div>
        <Buttons
          cells={cells}
          setCells={setCells}
          playing={playing}
          setPlaying={setPlaying}
          pause={pause}
          setPause={setPause}
          generation={generation}
          setGeneration={setGeneration}
        />
        <HowTo
          rules={rules}
          setRules={setRules}
        />
        <SelectExamples
          selectPatterns={selectPatterns}
          setSelectPatterns={setSelectPatterns}
        />
        {(rules || selectPatterns) && <Modal
          rules={rules}
          setRules={setRules}
          animateModal={animateModal}
          setAnimateModal={setAnimateModal}
          selectPatterns={selectPatterns}
          setSelectPatterns={setSelectPatterns}
          setCells={setCells}
        />}
      </div>
    </div>
  )
}

export default App
