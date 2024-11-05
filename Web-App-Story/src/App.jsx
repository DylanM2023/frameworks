import Option from "./option";
import NavBar from "./components/NavBar";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Menu from "./main_menu"
import Ending from "./end-screen";
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
          //END SCREEN PATH
          <Route path="/end-screen" element={<Ending/>}/>
        </Routes>
      </div>
      </BrowserRouter>
      </>
    )}

export default App;