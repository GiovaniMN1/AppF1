import React from "react"
import {BrowserRouter ,Route ,Routes} from "react-router-dom";
import Inicio from "./componentes/Inicio";

const App=()=>{
  return(
    <BrowserRouter>
      <div>
        
        <div>
        <Routes>
          
          
        <Route path='/' element={
         <Inicio/>
        }/>
        
        </Routes>
        </div>
        
      </div>
      </BrowserRouter>
      
  )
}

export default App