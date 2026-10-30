import { Check } from "lucide-react";
import { useState } from "react";
import { freshSession, saveSession } from "../modul";
import { useNavigate } from "react-router-dom";
import { Intro } from "../companents/Intro";

function HomePage () {
    const [name, setName] = useState("");
    const nav = useNavigate();

   const handleSaveName = () => {
    localStorage.setItem ("name",name) ;
    saveSession(freshSession(name));
    nav("/game") 
   } ;
    
    return ( 
        <Intro>
         <main className="main">
        <h1 className="main_title">moviies</h1>
        <div className="main_name">
            <input className="main_input" type="text" placeholder="Введите имя" value={name} onChange={(e) => setName(e.target.value)}/>
            <button className="main_button" onClick={handleSaveName}>
                <Check />
            </button>
        </div>
        <p className="main_description">Выбери что ты будешь смотреть</p>
       </main> 
       </Intro>
       );
}

export{HomePage};