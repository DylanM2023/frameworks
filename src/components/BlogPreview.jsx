const BlogPreview = ({lesson, handledelete}) => {
    
    return ( 
        <section>
            <h2>{lesson.title}</h2>
            <p>{lesson.author}</p>
            <button onClick={() => handledelete(lesson.id)}>Delete</button>
        </section>
    );
}
export default BlogPreview ;