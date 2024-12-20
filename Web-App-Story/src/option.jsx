import { useState } from "react";
import NavBar from "./components/NavBar";
import data from "./assets/storydata";
import { useNavigate } from "react-router-dom";

const  Option = () => {

    const navigate = useNavigate();

    const [newText, setNewText] = useState(data.beginning);

    console.log(newText.body_text)

    const choice_button = (path) =>{
        if (path === null) {
            // navigate end
            navigate('/end-screen');
        }
        else {
            setNewText(data[path]);
        }
    }

return (
        <>
            <div className="bg-skyline bg-no-repeat bg-cover bg-center h-screen w-screen text-white flex flex-wrap justify-center">
                    <NavBar/>
                <div className="bg-Beige w-8/12 h-4/6 border-4 border-black font-typewriter text-black text-2xl flex flex-wrap rounded-xl overflow-y-auto"> 
                    <h1 className="w-full px-8 py-6 text-3xl">
                    {newText.title_text}
                    </h1>
                    <p className="w-full px-8 text-3xl">
                    {newText.body_text[0]}
                    </p>
                    <p className="w-full px-8 text-3xl">
                        {newText.body_text[1]}
                    </p>
                    <p className="w-full px-8 text-3xl">
                        {newText.body_text[2]}
                    </p>
                </div>
                <div className="w-8/12 p-4 flex justify-center gap-24">
                    <button className="w-2/6 border-2 text-4xl border-white bg-black text-white font-heading rounded-xl" onClick={()=>choice_button(newText.option_1_path)}>{newText.option_text_1}</button>
                    <button className="w-2/6 border-2 text-4xl border-white bg-black text-white font-heading rounded-xl" onClick={()=>choice_button(newText.option_2_path)}>{newText.option_text_2}</button>
                </div>
            </div>
        </>
    )}

export default Option;