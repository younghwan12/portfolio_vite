import { Header, Main } from './layouts'
import React, { useEffect } from "react";
import menu  from './utils/menu'
import canvas  from './utils/canvas'
import gsapjs from './utils/gsapjs.js'

function App() {

  useEffect(()=> {
    menu();
    canvas();
    gsapjs();
  }, [])

  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export default App
