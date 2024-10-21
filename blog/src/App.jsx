import Home from "./home.jsx";
import BlogDetails from "./BlogDetails.jsx"
// import NavBar from "./components/NavBar";
import About from "./About.jsx";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom" 
import useFetch from "./hooks/useFetch.js"
import PageError from "./404.jsx";

const  App = () => {

  return ( 
      <BrowserRouter>
        <div>
          <Routes>
            //Home Path
            <Route path="/" element={<Home/>}/>
            //About us path
            <Route path="/about" element={<About/>}/>
            //Blog Details
            <Route path="/blog/:id" element={<BlogDetails/>}/>
            //Error Routing
            <Route path="*" element={<PageError/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;