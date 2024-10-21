import { Link } from "react-router-dom";

const BlogPreview = ({lesson, handledelete}) => {
    
    return (
        <> 
        <Link to={"/blog/" + lesson.id}>
        <section>
            <div className="flex p-4">
                <h2 className="bg-slate-500 text-white text-xl font-bold p-4 w-9/12">{lesson.title}</h2>
                <p className="bg-slate-500">
                    <div className="text-black w-1/12">
                        {lesson.views}
                    </div> 
                    <div className="text-green-500 w-1/12">
                        {lesson.reactions.likes}
                    </div>
                    <div className="text-red-600 w-1/12">
                        {lesson.reactions.dislikes}
                    </div>
                </p>
            </div>
        </section>
        </Link>
        </>
    );
}

export default BlogPreview ;