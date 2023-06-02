import { BrowserRouter, Routes ,Route } from "react-router-dom"
import SingInPage from "./Pages/SingIN/SingInPage"
import SingUpPage from "./Pages/SingUP/SingUpPage"
import Habitos from "./Pages/Habitos"
import Hoje from "./Pages/HojePage"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SingInPage/>}/> 
        <Route path="/cadastro" element={<SingUpPage/>}/>
        <Route path='/habitos' element={<Habitos/>}/> 
        <Route path='/hoje' element={<Hoje/>}/> 
       </Routes>
    </BrowserRouter>
  )
}

export default App
