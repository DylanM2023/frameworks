import { useState } from "react";
import {v4 as uuid} from "uuid";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";
import { useBlogContext } from "./BlogPreview";

const Create = () => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    
    const navigate = useNavigate()
    const {dispatch} = useBlogContext();

    function handleSubmit(e) {
        e.preventDefault();
        dispatch({type: "CREATE", payload: {
            id: uuid(), 
            title: title,
            body: body,
        }});
        navigate("/")
    };

    return (  
        <>
        <NavBar/>
        <h2>New Blog</h2>

        <form action="">
            <label htmlFor="">Title</label>
            <input type="text" onChange={(e)=>setTitle(e.target.value)} />

            <label htmlFor="">Body Text</label>
            <textarea name="" id="" onChange={(e) => setBody(e.target.value)}></textarea>

            <button type="submit" onClick={handleSubmit}>Create New Blog</button>
        </form>
        </>
    );
}

export default Create;
