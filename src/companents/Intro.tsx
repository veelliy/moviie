import type { ReactNode } from "react";
import { GradientBackground } from "./GradientBackground";

function Intro({children} : {children: ReactNode}) {
    return (
        <main className="intro">
            <GradientBackground />
            <div className="intro__content"> {children} </div>
             <footer >Выбери что ты будешь смотреть</footer>
        </main>
    );
}

export {Intro } ;