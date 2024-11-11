import { useContext } from "react";
import { Link } from "react-router-dom";
import { BlogContext } from "../hooks/BlogContext";

const BlogPreview = ({lesson}) => {
    
    const {dispatch} = useContext(BlogContext);

    function handledelete() {
        dispatch({type: "DELETE", id: lesson.id})
    }

    return (

        <> 
        <section>
            <div className="flex p-4 bg-slate-700">
                <h2 className="  text-white text-xl font-bold p-2 w-9/12 flex flex-row grow"><Link to={"/blog/" + lesson.id} className="p-2">{lesson.title}</Link></h2>
                {/* <h2 className="p-2">Views: {lesson.views}</h2>
                <h2 className="text-green-400 p-2">Dislikes: {lesson.reactions.dislikes}</h2>
                <h2 className="text-red-400 p-2">Likes: {lesson.reactions.likes}</h2> */}
                <button className="text-red-500" onClick={handledelete}>DELETE</button>
            </div>
        </section>
        </>
    );
}

export default BlogPreview;

export const useBlogContext = () =>{
    const context = useContext(BlogContext);

    if(!context){
        throw Error("UseBlogContext cannot be used outside the BlogProvider component");
    }

    return context;
}