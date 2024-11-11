import useFetch from "./hooks/useFetch";
import BlogPreview from "./components/BlogPreview"
import NavBar from "./components/NavBar";
import { useContext, useEffect } from "react";
import { BlogContext } from "./App";

const  Home = () => {
    
    const {blogs,dispatch} = useContext(BlogContext);

    const {data, isPending, isError} = useFetch("https://dummyjson.com/posts");

    useEffect(()=>{
        try{
        dispatch({type: "SET", payload: data.posts})
        }
        catch(e) {
        console.log(e)
        }
    }, [data])
    
    return ( 
        <>
        <NavBar/>
        <div className="bg-white">
            <div className="content">
                {isPending && <p>Loading...</p>}
                {data && data.map((l) => (
                    <BlogPreview lesson={l} key = {l.id} handledelete={handledelete}/>
                ))
                }
                {isError && <p>ERROR COULDN'T GET DATA</p>}

            {/* <BlogPreview /> */}
            </div>
        </div>
        </>
    );
}

export default Home;