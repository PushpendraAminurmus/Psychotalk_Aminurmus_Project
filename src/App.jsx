import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import './card.jsx'
import Chat from './chat.jsx'
function App() {
  return (
    <>
      <div>
       <h1>Psychotalk</h1>
      </div>
      <Chat/>
      <Footer/>
    </>
  )
}

export default App
