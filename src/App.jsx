import { BrowserRouter, Routes ,Route } from "react-router-dom"
import SingInPage from "./Pages/SingInPage"
import SingUpPage from "./Pages/SingUpPage"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SingInPage/>}/> 
        <Route path="/cadastro" element={<SingUpPage/>}/>
        {/* <Route path='/' element={<SingUpPage/>}/>  */}
       </Routes>
    </BrowserRouter>
  )
}

export default App
