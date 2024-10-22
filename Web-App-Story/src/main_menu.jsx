import NavBar from "./components/NavBar";
import { useNavigate, useParams } from "react-router-dom";

const Menu = () => {

    const navigate = useNavigate()
    
    const startGame = () => {
        navigate("/option");
    };

    return ( 
        <>
            <div className="bg-streetscene bg-no-repeat bg-cover bg-center h-screen w-screen text-white flex flex-col flex-wrap items-center"> 
                <div className="w-full h-1/6 bg-black flex flex-wrap flex-col items-center">
                    <h1 className="flex grow items-center font-heading text-8xl p-2 bg-black text-cyan-300">
                        Dylan's Web App Story
                    </h1>
                </div>
                <div className="w-8/12 grow font-typewriter text-black text-5xl flex flex-wrap"> 
                    <div className="w-full h-6"></div>
                    <button className="bg-slate-300 h-1/6 w-full text-black text-5xl rounded-xl p-10" onClick={startGame}>Start Game</button>
                    <div className="bg-slate-300 h-1/6 w-full text-black text-5xl flex flex-wrap flex-col items-center rounded-xl p-1">
                        <a className="flex grow items-center text-5xl p-1" href="https://github.com/DylanM2023/frameworks/" target="_blank">GitHub</a>
                    </div>
                    <button className="bg-slate-300 h-1/6 w-full text-black rounded-xl p-1">Exit</button>
                </div>
            </div>
        </>
    );
}

export default Menu;