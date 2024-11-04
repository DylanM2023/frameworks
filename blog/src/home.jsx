import useFetch from "./hooks/useFetch";
import BlogPreview from "./components/BlogPreview"
import NavBar from "./components/NavBar";

const  Home = ({data, isPending, isError, handledelete}) => {

    
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