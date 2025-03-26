import React from "react";
import './css/ProjectArq.css'
import Download from './Icons/Download'

const bgIconColor = {
    // alterar estrutura para "PDF" por exemplo, possuir dois valores, de cor e a svg relativa
    PDF: '#EC7F74',
    MP4: '#7DD0D7',
    WAV: '#9FCC6A',
    FILES: '#FCD04F',
    PNG: '#7AA9F7'
}

const ProjectArq = (props) => {
    return (
        <div className="container--arq">
            <div className="arq--icon">
                <div className="icon" style={
                    // adicionar aqui a svg dinamicamente
                    { backgroundColor: bgIconColor[props.arqType] }
                }></div>
            </div>
            <div className="arq--desc">
                <h1>{props.title}</h1>
                <span>{props.data}</span>
            </div>
            <div className="arq--type">
                <h1 style={
                    { color: bgIconColor[props.arqType] }
                }>{props.arqType}</h1>
            </div>
            <div className="arq--dwld">
            <Download/>
            </div>
        </div>
    )
}

export default ProjectArq