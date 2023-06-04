import { BrowserRouter, Routes ,Route } from "react-router-dom"
import SingInPage from "./Pages/SingIN/SingInPage"
import SingUpPage from "./Pages/SingUP/SingUpPage"
import Habitos from "./Pages/Habits/Habitos"
import Hoje from "./Pages/Hoje/HojePage"
import Historico from "./Pages/Historico"
import axios from "axios"
import React from "react"


function App() {
  axios.defaults.headers.common['Authorization'] = '2cyXkIuRvC6AHn3BsyIuTlEr';
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SingInPage/>}/> 
        <Route path='/cadastro' element={<SingUpPage/>}/>
        <Route path='/habitos' element={<Habitos/>}/> 
        <Route path='/hoje' element={<Hoje/>}/> 
        <Route path='/historico' element={<Historico/>}/> 
       </Routes>
    </BrowserRouter>
  )
}

export default App


