import React from "react";
import UserIcon from "./UserIcon";
import './css/Header.css'

const Header = () => {
    return(
        <>
            <div className="teams--content">
                <UserIcon bColor = "#EC7F74"/>
                <UserIcon bColor = "#EC7F74"/>
                <UserIcon bColor = "#EC7F74"/>
                <UserIcon bColor = "#EC7F74"/>
            </div>
            <div className="menu--content">
                <ul>
                    <li><a>Conta</a></li>
                    <li><a>Projeto</a></li>
                    <li><a>Calendário</a></li>
                    <li><a>Arquivos</a></li>
                    <li><a>Equipe</a></li>
                </ul>
            </div>
        </>
    )
}

export default Header