import React from "react"
import './css/CardProjetos.css'
import UserIcon from "./UserIcon";

const CardProjetos = (props) => {
    const periodo = props.periodo;
    const fDay = periodo[0];
    const lDay = periodo[periodo.length - 1];

    return(
        <div className="card--main" style={{
            backgroundColor: props.color,
        }}>
            <div className="card--content">
                <div className="projeto--title--status">
                    <h1>{props.t_status}</h1>
                </div>
                <div className="projeto--status">
                    
                </div>
                <div className="projeto--title">
                    <h1>
                        PDTI - Plano Diretor de Tecnologia da Informação
                    </h1>
                </div>
                <div className="projeto--calendar">
                    <div className="mes">
                        <button> P </button>
                        <button> MAI </button>
                        <button> A </button>
                    </div>
                    <div className="calendar">
                        <div className="semana">
                            {
                                [2,3,4,5,6,7,8].map((day) => {
                                    let classe = periodo.includes(day) ? 'periodo' : '';
                                    if (day === fDay){ classe += ' fDay'};
                                    if (day === lDay){ classe += ' lDay'};
                                    if (day === props.currentDay) {
                                        classe += ' cDay'
                                        return <span key={day} className={classe}><div>{day}</div></span>
                                    } else {
                                        return <span key={day} className={classe}>{day}</span>

                                    }
                                })
                            }
                        </div>
                        <div className="semana">
                            {
                                [9,10,11,12,13,14,15].map((day) => {
                                    let classe = periodo.includes(day) ? 'periodo' : '';
                                    if (day === fDay){ classe += ' fDay'};
                                    if (day === lDay){ classe += ' lDay'};
                                    if (day === props.currentDay) {
                                        classe += ' cDay'
                                        return <span key={day} className={classe}><div>{day}</div></span>
                                    } else {
                                        return <span key={day} className={classe}>{day}</span>

                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="projeto--partici">
                {[...Array(Math.min(props.qntPartici, 4))].map((_, i) => (
                    <UserIcon key={i} bColor={props.color} />
                ))}
                {props.qntPartici > 4 && <UserIcon key="extra" bColor={props.color} nUser={true} qntUser={props.qntPartici - 4}/>}
                </div>
            </div>
        </div>
    )
}

export default CardProjetos