import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import { useEffect } from "react";

const BlogDetails = () => {
    
    const {id} = useParams();

    const navigate = useNavigate()

    const {data, isPending, isError} = useFetch("https://dummyjson.com/posts/" + id)

    useEffect(()=> {
        setTimeout(()=>{
            navigate("/")
        }, 5000)
    },[])

    return (
        <>
        {data &&(
            <body className="bg-slate-700 h-screen">
                <h1 className="text-5xl h-16 bg-black text-white flex grow justify-center">{data.title}</h1>
                <p className="p-4 text-white text-3xl bg-slate-700 flex flex-col grow">{data.body}</p>
            </body>
        )}
        </>
    );
}

export default BlogDetails;
