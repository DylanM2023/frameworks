import NavBar from "./components/NavBar";
import { useNavigate, useParams } from "react-router-dom";

const Menu = () => {

    const navigate = useNavigate()
    
    const startGame = () => {
        navigate("/option");
    };
    
    return ( 
        <>
            <div className="bg-skyline bg-no-repeat bg-cover bg-center h-screen w-screen text-white flex flex-col flex-wrap items-center"> 
                <div className="w-full h-1/6 bg-black flex flex-wrap flex-col items-center">
                    <h1 className="flex grow items-center font-heading text-8xl p-2 bg-black text-white">
                        Dylan's Web App Story
                    </h1>
                </div>
                <div className="w-6/12 grow font-typewriter text-white text-5xl flex flex-wrap"> 
                    <div className="w-full h-6"></div>
                    <button className="bg-black h-1/6 w-full flex justify-center items-center text-white border-4 border-white text-5xl rounded-xl p-10" onClick={startGame}>Start Game</button>
                    <div className="bg-black h-1/6 w-full text-black border-4 border-white flex flex-wrap flex-col items-center rounded-xl p-1">
                        <a className="flex flex-row bg-black text-white grow justify-center items-center text-5xl p-1 w-full" href="https://github.com/DylanM2023/frameworks/" target="_blank">GitHub</a>
                    </div>
                    <a className="bg-black border-4 border-white flex flex-row h-1/6 w-full justify-center items-center text-white rounded-xl p-1" href="https://google.com">Exit</a>
                </div>
            </div>
        </>
    );
}

export default Menu;