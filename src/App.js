import { useState, useEffect } from 'react'
import GymA from './pages/GymA'
import GymB from './pages/GymB'
import GymC from './pages/GymC'
import GymD from './pages/GymD'
import './style.scss'

const App = () => {

  const [activeGym, setActiveGym] = useState('a')
  const [currentlyGym, setCurrentlyGym] = useState(null);

  useEffect(() => {
    switch (activeGym) {
      case 'a':
        setCurrentlyGym(<GymA title='🦾 Peito' />);
        break;
      case 'b':
        setCurrentlyGym(<GymB title='🦾 Ombro' />);
        break;
      case 'c':
        setCurrentlyGym(<GymC title='🦾 Braços' />);
        break;
      case 'd':
        setCurrentlyGym(<GymD title='🦾 Perna' />);
        break;
      default:
        setCurrentlyGym(null);
        break;
    }
  }, [activeGym]);

  const handleGym = (next) => {
    setActiveGym(next)
  }

  return (
    <div className="App container">
      <header className="header">
        <div>
          <h1>Gunnar Gym</h1>
        </div>
        <div className='buttons-treino'>
          <button className={`btn ${activeGym === 'a' ? 'btn-primary' : ''}`} onClick={() => handleGym('a')}><span>Treino</span> A</button>
          <button className={`btn ${activeGym === 'b' ? 'btn-primary' : ''}`} onClick={() => handleGym('b')}><span>Treino</span> B</button>
          <button className={`btn ${activeGym === 'c' ? 'btn-primary' : ''}`} onClick={() => handleGym('c')}><span>Treino</span> C</button>
          <button className={`btn ${activeGym === 'd' ? 'btn-primary' : ''}`} onClick={() => handleGym('d')}><span>Treino</span> D</button>
        </div>
      </header>

      <div className='line'></div>

      <div>
        {currentlyGym}
      </div>

    </div>
  )
}

export default App
