import { BrowserRouter,Routes, Route } from "react-router-dom"
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import Home from "./pages/Home"
import Starred from "./pages/Starred"
import HeadLayout from "./components/HeadLayout"
import Show from "./pages/Show"

// Create a client (from TANSTACK REACT QUERY PACKAGE)
const queryClient = new QueryClient()    

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <Routes>
    
      <Route element ={<HeadLayout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/starred" element={<Starred />} /> 
      </Route>

      <Route path="/show/:showId" element={<Show/>}/>

      <Route path="/*" element={<div>Not Found</div>} /> 
    
    </Routes>
  </BrowserRouter>
  </QueryClientProvider>
  )
}

export default App
