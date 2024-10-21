import NavBar from "./components/NavBar";

const  App = () => {

  return (
      <>
      <body>
        <div className="bg-streetscene bg-no-repeat bg-cover bg-center h-screen w-screen text-white flex flex-wrap justify-center">
          <NavBar/>
          <div className="bg-white w-8/12 h-3/6 font-typewriter text-black text-2xl flex flex-wrap"> 
          <h1>21'st October 1943</h1>
          <p className="p-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor modi temporibus provident animi vero numquam quam, rem beatae eligendi cum odio non deserunt, officiis laborum voluptatibus facere quo optio molestiae! Eos sit quam cum quas qui expedita labore numquam velit, dolore quod eligendi facere illum itaque minima odio repellendus atque?</p>
          </div>
          <div className="w-8/12 bg-slate-50 flex justify-center ">
            <button className="w-2/6 bg-slate-400">Option 1</button>
              <div className="bg-black w-2/6"></div>
            <button className="w-2/6 bg-slate-400">Option 1</button>
          </div>
        </div>
      </body>
      </>
    )}

export default App;