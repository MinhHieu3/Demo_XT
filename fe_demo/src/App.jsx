
import {Route, Routes} from "react-router-dom";
import Home from "./component/Home/Home.jsx";
import Tactic from "./page/Tactic/Tactic.jsx";

function App() {

  return (
   <Routes >
     <Route path="/" element={<Home/>} >
         <Route path="/" element={<Tactic/>} ></Route>
     </Route>

   </Routes>
  )
}

export default App
