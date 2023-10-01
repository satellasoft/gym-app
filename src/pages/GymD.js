import Card from "../components/card/Card"
import './gym.scss'

const GymD = (props) => {

    return (
        <main className="gym">
            <div className="gym-title">
                <h2>{props.title}</h2>
            </div>

            <Card title='Leg 45' repeat='4x12' delay='60s' desc='Progressão de carga' videoId='waAxlYvtCcI' />

            <Card title='Agachamento Smith' repeat='4x12' delay='60s' desc='Maquina' videoId='uCT5wfQIQpk' />
        </main>
    )
}

export default GymD