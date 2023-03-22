import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {
    buttonFlag: false,
  }

  handleClick = () => {
    this.setState(prevState => ({
      buttonFlag: !prevState.buttonFlag,
    }))
  }

  render() {
    const {buttonFlag} = this.state
    return (
      <div className="app-container">
        <button
          type="button"
          className="toggle-button"
          onClick={this.handleClick}
        >
          {buttonFlag ? 'Hide Clock' : 'Show clock'}
        </button>
        {buttonFlag && <Clock />}
      </div>
    )
  }
}

export default App
