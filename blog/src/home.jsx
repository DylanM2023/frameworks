import useFetch from "./hooks/useFetch";
import BlogPreview from "./components/BlogPreview"
import NavBar from "./components/NavBar";

const  Home = () => {

    const {data, isPending, isError} = useFetch("https://dummyjson.com/posts");
    
    return ( 
        <>
        <NavBar/>
        <div className="bg-white">
            <div className="content">
                {isPending && <p>Loading...</p>}
                {data && data.posts.map((l) => (
                    <BlogPreview lesson={l} key = {l.id}/>
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