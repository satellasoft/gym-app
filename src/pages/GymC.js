import Card from "../components/card/Card"
import './gym.scss'

const GymC = (props) => {

    return (
        <main className="gym">
            <div className="gym-title">
                <h2>{props.title}</h2>
            </div>

            <Card title='Rosca Scott' repeat='4x12' delay='45s' desc='Barra W' videoId='Kh4G5N48EO8' />

            <Card title='Tríceps francês' repeat='4x12' delay='45s' desc='Com Halteres' videoId='hMY9E-qy20k' />
        </main>
    )
}

export default GymC