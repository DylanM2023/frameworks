import { Link } from "react-router-dom";

const BlogPreview = ({lesson, handledelete}) => {
    
    return (

        <> 
        <section>
            <div className="flex p-4 bg-slate-700">
                <h2 className="  text-white text-xl font-bold p-2 w-9/12 flex flex-row grow"><Link to={"/blog/" + lesson.id} className="p-2">{lesson.title}</Link></h2>
                {/* <h2 className="p-2">Views: {lesson.views}</h2>
                <h2 className="text-green-400 p-2">Dislikes: {lesson.reactions.dislikes}</h2>
                <h2 className="text-red-400 p-2">Likes: {lesson.reactions.likes}</h2> */}
                <button className="text-red-500" onClick={() =>{handledelete(lesson.id)}}>DELETE</button>
            </div>
        </section>
        </>
    );
}

export default BlogPreview;