import BlogPreview from "./components/BlogPreview";
// import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import useFetch from "./hooks/useFetch.js"
const  App = () => {

  const {data, isPending, isError} = useFetch("https://dummyjson.com/posts");

  return ( 
    <div className="bg-blue-300">
      <div className="content">
        <a href="https://github.com/DylanM2023/frameworks/" target="_blank">GitHub</a>
        {isPending && <p>Loading...</p>}
        {data && data.posts.map((l) => (
            <BlogPreview lesson={l} key = {l.id}/>
          ))
        }
        {isError && <p>ERROR COULDN'T GET DATA</p>}

        {/* <BlogPreview /> */}
      </div>
    </div>
  );
}

export default App;