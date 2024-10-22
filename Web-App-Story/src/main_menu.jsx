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
                <NavBar/>
                <div className="w-8/12 grow font-typewriter text-black text-2xl flex flex-wrap"> 
                <button className="bg-slate-300 h-1/8 w-full text-black rounded-xl p-1" onClick={startGame}>Start Game</button>
                <button className="bg-slate-300 h-1/8 w-full text-black rounded-xl p-1">Settings</button>
                <div className="bg-slate-300 h-1/8 w-full text-black flex flex-wrap flex-col items-center rounded-xl p-1">
                    <a className="flex grow items-center p-1" href="https://github.com/DylanM2023/frameworks/" target="_blank">GitHub</a>
                </div>
                <button className="bg-slate-300 h-1/8 w-full text-black rounded-xl p-1">Exit</button>
                </div>
            </div>
        </>
    );
}

export default Menu;