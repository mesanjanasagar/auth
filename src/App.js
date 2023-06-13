import { BrowserRouter, Route,  Routes } from "react-router-dom"
import Home from "./pages/Home"
import Auth from "./components/Auth"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth/:id' element={<Auth />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App