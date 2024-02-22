import { useState } from 'react'
// import './App.css'
import HandleChange from './components/HandleChange/HandleChange'
import EventBinding from './components/EVENT_BINDING/eventBinding'
import { Count } from './components/Count/Count'

function App() {
  return (
    <div>
      <HandleChange></HandleChange>
      <br/>
      <br/>
      <EventBinding></EventBinding>
      <br/>
      <br/>
      <Count></Count>
      
    </div>
  )
}

export default App
