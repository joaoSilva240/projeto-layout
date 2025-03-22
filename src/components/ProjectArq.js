import React from "react";
import './css/ProjectArq.css'

const bgIconColor = {
    PDF:   '#EC7F74',
    MP4:   '#7DD0D7',
    WAV:   '#9FCC6A',
    FILES: '#FCD04F',
    PNG:   '#7AA9F7'
}

const ProjectArq = (props) => {
    return(
        <div className="container--arq">
            <div className="arq--icon">
                <div className="icon" style={
                    {backgroundColor: bgIconColor[props.arqType]}
                }></div>
            </div>
            <div className="arq--desc">
                <h1>{props.title}</h1>
                <span>{props.data}</span>
            </div>
            <div className="arq--type">
                <h1 style={
                    {color: bgIconColor[props.arqType]}
                }>{props.arqType}</h1>
            </div>
            <div className="arq--dwld">
                <span>DW</span>
            </div>
        </div>
    )
}

export default ProjectArq