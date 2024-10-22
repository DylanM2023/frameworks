import Option from "./option";
import NavBar from "./components/NavBar";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Menu from "./main_menu"
const  App = () => {

  return (
      <>
      <BrowserRouter>
      <div>
        <Routes>
          //HOME PATH
          <Route path="/" element={<Menu/>}/>
          //OPTION EXAMPLE PAGE
          <Route path="/option" element={<Option/>}/>
        </Routes>
      </div>
      </BrowserRouter>
      </>
    )}

export default App;