import { useState, } from 'react'
import { IoAddCircleOutline, IoTrashOutline } from "react-icons/io5";

import './App.css'

function App() {

  const [input, setInput] = useState('')
  const [list, setList] = useState([])
  const [focus, setFocus] = useState(true)


  function getInput(e) {
    e.preventDefault()
    setInput(e.target.value)
  }

  function addList() {
    if (input === '') {
      alert('Digite alguma tarefa!')
      setFocus(true)
      return
    }
    setList([...list, input])
    setInput('')
  }

  function addListKey(e) {
    if (e.key === 'Enter') {
      if(input.length === 0) {
        alert('Preencha uma tarefa!')
        setFocus(true)
        return
      }
      setList([...list, input])
      setInput('')
      return
    }
  }

  function deleteItem(index) {
    let arrayTemp = [...list]
    arrayTemp.splice(index, 1)
    setList(arrayTemp)
    setFocus(true)
  }


  return (
    <div className='bgContainer'>
      <h1>Lista de Tarefas</h1>
      <div className='inputContainer'>
        <input
          type="text"
          onChange={getInput}
          onKeyDown={addListKey}
          value={input}
          placeholder='Digite uma tarefa...'
          autoFocus={focus}
        />
        <button className='addBtn' onClick={addList}>
          <IoAddCircleOutline className='add' size={20} color='#6fffa8' />
        </button>
      </div>
      {list.length > 0 ? <main>
        <span className='dados'>
          <ul>
            {list.map((item, index) => (
              <div key={index} className='listContainer'>
                <li >
                  {item}
                </li>
                <button  onClick={() => deleteItem(index)}>
                  <IoTrashOutline className='bin' size={17} />
                </button>
              </div>
            ))}
          </ul>
        </span>
      </main> : null}
    </div>
  )
}

export default App
