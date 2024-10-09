import BlogPreview from "./components/BlogPreview";
import NavBar from "./components/NavBar";

const  App = () => {

  // Logic
  return ( 
    <>
    <div>
      <NavBar />
      {/* <div className="p-10 sm:bg-azure-200 md:bg-azure-300 xl:bg-azure-400 2xl:azure500">1</div> */}
      {/* <div className="p-10 bg-azure-200">2</div>
      <div className="p-10 bg-azure-300">3</div>
      <div className="p-10 bg-azure-400">4</div>
      <div className="p-10 bg-azure-500">5</div> */}
      <div className="content">
        <a href="https://github.com/DylanM2023/frameworks/" target="_blank">GitHub</a>
        {/* <BlogPreview />
        <BlogPreview /> */}
      </div>
    </div>
    <div className = "grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <div className="bg-azure w-full h-full border-2">1</div>
      <div className="border-color-azure-500 border-2">2</div>
      <div className="border-color-azure-500 border-2">3</div>
      <div className="border-color-azure-500 border-2">4</div>
      <div className="border-color-azure-500 border-2">5</div>
      <div className="border-color-azure-500 border-2">6</div>
    </div>
    </>
  );
}

export default App;