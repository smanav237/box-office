import { BrowserRouter,Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Starred from "./pages/Starred"
import HeadLayout from "./components/HeadLayout"


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    
      <Route element ={<HeadLayout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/starred" element={<Starred />} /> 
      </Route>
      <Route path="/*" element={<div>Not Found</div>} /> 
    
    </Routes>
  </BrowserRouter>
  )
}

export default App
