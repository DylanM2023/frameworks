import BlogPreview from "./components/BlogPreview";
import NavBar from "./components/NavBar";

const  App = () => {

  // Logic
  return ( 
    <div className="bg-blue-300">
      <NavBar />
      <div className="content">
        <a href="https://github.com/DylanM2023/frameworks/" target="_blank">GitHub</a>
        <BlogPreview />
        <BlogPreview />
        <BlogPreview />
        <BlogPreview />
        <BlogPreview />
        <BlogPreview />

      </div>
    </div>
  );
}

export default App;