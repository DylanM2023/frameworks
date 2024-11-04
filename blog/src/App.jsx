import Home from "./home.jsx";
import BlogDetails from "./BlogDetails.jsx"
// import NavBar from "./components/NavBar";
import About from "./About.jsx";
import { useEffect, useReducer, useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom" 
import useFetch from "./hooks/useFetch.js"
import PageError from "./404.jsx";
import Create from "./components/Create.jsx";

const BlogReducer = (state, action) =>{
  switch(action.type){
    case "SET":
      //Set the whole state
      return action.payload;
    
    case "CREATE":
      //Creates new blog
      state.push(action.payload);
    
    case "DELETE":
      //Deletes Blog
      let filteredblogs = state.filter((b)=>b.id != action.id)
      return filteredblogs;
    
      default:
        return state;
  }
};

const  App = () => {

  const [blogs, dispatch] = useReducer(BlogReducer, null);

  const {data, isPending, isError, handledelete} = useFetch("https://dummyjson.com/posts");

  useEffect(()=>{
    try{
      dispatch({type: "SET", payload: data.posts})
    }
    catch(e) {
      console.log(e)
    }
  }, [data])

  function deleteblog(blogid)  {
    dispatch({type: "DELETE", id: blogid})
    console.log("Delete")
  };

  function createblog(newblog) {
    dispatch({type:"CREATE", payload: newblog})
  };

  return ( 
      <BrowserRouter>
        <div>
          <Routes>
            //Home Path
            <Route path="/" element={<Home data={blogs} isPending={isPending} isError={isError} handledelete={deleteblog}/>}/>
            //About us path
            <Route path="/about" element={<About/>}/>
            //Blog Details
            <Route path="/blog/:id" element={<BlogDetails handledelete={deleteblog}/>}/>
            //Create New Post Page
            <Route exact path="/create" element={<Create handlecreate={createblog}/>}/>
            //Error Routing
            <Route path="*" element={<PageError/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}
export default App;