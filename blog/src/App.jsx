import Home from "./home.jsx";
import BlogDetails from "./BlogDetails.jsx"
// import NavBar from "./components/NavBar";
import About from "./About.jsx";
import { BrowserRouter, Routes, Route} from "react-router-dom" 
import PageError from "./404.jsx";
import Create from "./components/Create.jsx";

const  App = () => {

  return ( 
        <BrowserRouter>
          <div>
            <Routes>
              //Home Path
              <Route path="/" element={<Home data={blogs} isPending={isPending} isError={isError}/>}/>
              //About us path
              <Route path="/about" element={<About/>}/>
              //Blog Details
              <Route path="/blog/:id" element={<BlogDetails/>}/>
              //Create New Post Page
              <Route exact path="/create" element={<Create/>}/>
              //Error Routing
              <Route path="*" element={<PageError/>}/>
            </Routes>
          </div>
        </BrowserRouter>
  );
}
export default App;