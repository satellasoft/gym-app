import Card from "../components/card/Card"
import './gym.scss'

const GymA = (props) => {

    return (
        <main className="gym">
            <div className="gym-title">
                <h2>{props.title}</h2>
            </div>
            
            <Card title='Crossover' repeat='4x12'delay='45s' desc='Polia alta' videoId='ifwx2iuv4kA'/>
            
            <Card title='Supino inclinado' repeat='4x12'delay='60s' desc='Utilizar halteres' videoId='F4Q1g2z8MWM' />
        </main>
    )

}

export default GymA