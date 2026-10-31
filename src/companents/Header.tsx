import { getName } from "../modul";
import { UserRound } from "lucide-react";
function Header () {
   const name = getName()
   
   return(
   <header className="header">
         <span className="logo">moviies</span>
         <div className="profile">
            <span title={name}>{name}</span>
            <UserRound size={24} fill="currentColor" />
         </div>
      </header>
      );
}

export{Header};
