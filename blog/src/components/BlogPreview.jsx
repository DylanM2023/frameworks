import { Link } from "react-router-dom";

const BlogPreview = ({lesson}) => {
    
    return (
        <> 
        <Link to={"/blog/" + lesson.id}>
        <section>
            <div className="flex p-4 bg-slate-700">
                <h2 className="  text-white text-xl font-bold p-2 w-9/12 flex flex-row grow">{lesson.title}</h2>
                <h3 className="p-2">{lesson.views}</h3>
                <h4 className="text-green-400 p-2">{lesson.reactions.dislikes}</h4>
                <h5 className="text-red-400 p-2">{lesson.reactions.likes}</h5>
            </div>
        </section>
        </Link>
        </>
    );
}

export default BlogPreview;