import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { use } from 'react'

function App() {

  const [counter,setCounter]= useState(5) //hooks

  //let counter=5;
  const addValue=()=>{
    if(counter<20){
      setCounter(counter=>counter+1);
    }
  }

  const removeValue=()=>{
    if(counter>0){
      setCounter(counter=>counter-1);
    }
  }

  return (
    <>
    <h1>chai or react</h1>
    <h2>counter value:{counter}</h2>
    <button
    onClick={addValue}
    >Add value {counter}</button><br></br>
    <button
    onClick={removeValue}
    >Delete value {counter}</button>
    <p> Footer: {counter}</p>
    </>
  )
} 

export default App
