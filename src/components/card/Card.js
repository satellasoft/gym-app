import { useState } from "react"
import './card.scss'

const Card = (props) => {

    const [active, setActive] = useState(true);
    const [done, setDone] = useState(false)

    const handleDone = () => {
        setDone(true)
        setActive(false)
    }

    const toggleActive = () => {
        setActive(!active)
    }

    let button = <button className="btn btn-success" onClick={handleDone}>✔ Concluir</button>

    if (done === true)
        if (!active)
            button = <p onClick={toggleActive}>Exibir</p>
        else
            button = <p onClick={toggleActive}>Ocultar</p>

    return (
        <div className="card">
            <h3 className="card-title"><span className="green-color">{done ? '✔' : ''}</span> {props.title}</h3>

            <div className={`card-content ${active ? 'show' : 'hide'}`}>
                <div className="video-wrapper">
                    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${props.videoId}?si=CaXCIO51javMQ269`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

                <div className='detail'>
                    <div>
                        Repetição: {props.repeat}
                    </div>

                    <div>
                        Descanso: {props.delay}
                    </div>
                </div>

                <div className="desc">
                    {props.desc}
                </div>
            </div>

            <div className="controls">
                {button}
            </div>

            <div className='line'></div>

        </div>

    )
}

export default Card