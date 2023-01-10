import {Routes,Route} from "react-router-dom"
import ErrorPage from "./Pages/ErrorPage"
import Home from "./Pages/Home"
function App() {

  return (
    <>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="*" element={<ErrorPage/>}/>
</Routes>
    </>
  )
}

export default App
