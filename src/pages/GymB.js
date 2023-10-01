import Card from "../components/card/Card"
import './gym.scss'

const GymB = (props) => {

    return (
        <main className="gym">
            <div className="gym-title">
                <h2>{props.title}</h2>
            </div>

            <Card title='Lateral raises' repeat='3x12' delay='45s' desc='' videoId='wZnsZsMywrY' />

            <Card title='Encolhimento' repeat='3x12' delay='45s' desc='' videoId='cZLgyI2OKcs' />
        </main>
    )
}

export default GymB