import * as React from 'react'
import './App.css'

const logo = require('./assets/images/logo.svg')

interface Props {
  typedProp: string
}

class App extends React.Component<Props> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">App works !</h1>
        </header>
        <p className="App-intro">{this.props.typedProp}</p>
      </div>
    )
  }
}

export default App
