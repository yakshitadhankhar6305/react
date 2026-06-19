import React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {jsx as _jsx} from "react/jsx-runtime.js"
import App from './App.jsx'

function MyApp(){ //first letter capital
    return(
      <div>
        <h3>chai is ready</h3>
      </div>
    )
}
/* const ReactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me to visit google'
} */
const anotherElement=(
  <a href="https://google.com" target="_blank">visit google</a>
)
const anotherUser="chai or react"
const ReactElement = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me to visit google',
  anotherUser
)
createRoot(document.getElementById('root')).render(
 
    ReactElement
  
)
