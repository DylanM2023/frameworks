import NavBar from "./components/NavBar";

const Menu = () => {
    return ( 
        <>
            <div className="bg-streetscene bg-no-repeat bg-cover bg-center h-screen w-screen text-white flex flex-col flex-wrap items-center"> 
                <NavBar/>
                <div className="bg-white w-8/12 grow font-typewriter text-black text-2xl flex flex-wrap"> 
                </div>
            </div>
        </>
    );
}

export default Menu;