import NavBar from "./components/NavBar";

const  Option = () => {

return (
        <>
        <body>
            <div className="bg-skyline bg-no-repeat bg-cover bg-center h-screen w-screen text-white flex flex-wrap justify-center">
                    <NavBar/>
                <div className="bg-Beige w-8/12 h-3/6 border-4 border-black font-typewriter text-black text-2xl flex flex-wrap rounded-xl"> 
                    <h1 className="px-6 py-2" >21'st October 1943</h1>
                    <p className="px-6 py-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil fugiat fugit at animi, ea blanditiis. Consequatur amet, commodi nihil deserunt voluptatum a possimus placeat labore libero repellendus eligendi iusto error natus cupiditate velit odit provident veritatis nulla rem? Quibusdam dolores tempora optio ullam vel eveniet aut, mollitia ut assumenda praesentium eaque voluptates, accusantium id. Rem velit adipisci debitis veritatis ad eos, ex dolorem nemo impedit sint tenetur. Animi soluta consequatur, officia qui accusamus vel provident, excepturi ad accusantium rem recusandae dicta quod dignissimos at quam repellat eum. Quam ipsa commodi, quae totam odio inventore maxime mollitia est quibusdam aperiam quod?
                    </p>
                </div>
                <div className="w-8/12 p-4 flex justify-center ">
                    <button className="w-2/6 border-2 text-3xl border-white bg-black text-white rounded-xl">Option 1</button>
                    <div className="w-2/6"></div>
                    <button className="w-2/6 border-2 text-3xl border-white bg-black text-white rounded-xl">Option 2</button>
                </div>
            </div>
        </body>
        </>
    )}

export default Option;