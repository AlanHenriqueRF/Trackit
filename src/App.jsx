import { BrowserRouter, Routes ,Route } from "react-router-dom"
import SingInPage from "./Pages/SingIN/SingInPage"
import SingUpPage from "./Pages/SingUP/SingUpPage"
import Habitos from "./Pages/Habits/Habitos"
import Hoje from "./Pages/Hoje/HojePage"
import Historico from "./Pages/Historico"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SingInPage/>}/> 
        <Route path="/cadastro" element={<SingUpPage/>}/>
        <Route path='/habitos' element={<Habitos/>}/> 
        <Route path='/hoje' element={<Hoje/>}/> 
        <Route path='/historico' element={<Historico/>}/> 
       </Routes>
    </BrowserRouter>
  )
}

export default App
