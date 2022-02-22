import React, { useState } from 'react'
import Select from './components/Select'
import Input from './components/Input'
import { units } from './units'

function App() {
  const [input ,setInput] = useState('')
  const [to, setTo] = useState(units[0].factor)
  const [from, setFrom] = useState(units[0].factor)
  const [result, setResult] = useState(0)

  function inputChange(e){
    const inputVal = e.target.value;
    setInput(inputVal)
  }
    function onChangeFrom(e){
        const valueFrom = e.target.value;
        setFrom(valueFrom)
    }
    function onChangeTo(e){
      const valueTo = e.target.value;
      setTo(valueTo)
  }
    function convert(){
      setResult((input * from) / to)
    }

  return (
    <>
      <div className="converter-form">
        <Input label={'Amount'} onChange={inputChange}/>

        <div className="row">
          <Select label={'From'} items={units} onChange={onChangeFrom}/>
          <Select label={'To'} items={units} onChange={onChangeTo}/>

          <button onClick={convert}>Convert</button>
        </div>
      </div>

      <div id="result">
        Result is: <span data-testid="result">{result}</span>
      </div>
    </>
  )
}

export default App
