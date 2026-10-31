import { useState } from "react";
import { freshSession, saveSession } from "../modul";
import { useNavigate } from "react-router-dom";
import { Intro } from "../companents/Intro";
import { Input } from "../companents/Input";

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
        <Input value={name} onChange={setName} onClick={handleSaveName}/>
        <p className="main_description">Выбери что ты будешь смотреть</p>
       </main> 
       </Intro>
       );
}

export{HomePage};