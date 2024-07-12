import {Component} from 'react'
import BasketballPlayerCard from './components/BasketballPlayerCard'
import './App.css'

class App extends Component {
  render() {
    const player = {
      name: 'LeBron James',
      image:
        'https://www.dsource.in/sites/default/files/styles/mini_responsivecustom_user_moblie_1x/public/resource/indian-games/outdoor-games/doctor-doctor-help-us/minigallery/10725/4.jpg?itok=i9w0aWPi&timestamp=1447675314',
      position: 'Forward',
      stats: {
        pointsPerGame: 25.4,
        assistsPerGame: 7.1,
        reboundsPerGame: 10.5,
      },
    }

    return (
      <div className="App">
        <BasketballPlayerCard
          name={player.name}
          image={player.image}
          position={player.position}
          stats={player.stats}
        />
      </div>
    )
  }
}

export default App
