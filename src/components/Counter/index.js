import {Component} from 'react'
import './index.css'

class Counter extends Component {
  state = {count: 1}

  onIncrement = () => {
    this.setState(prevState => {
      console.log(`prev state value is ${prevState.count}`)
      return {count: prevState.count + 1}
    })
  }

  onDecrement = () => {
    this.setState(prevState => {
      console.log(`prevState value is ${prevState.count}`)
      return {count: prevState.count - 1}
    })
  }

  onReset = () => {
    this.setState(prevState => {
      console.log(`prevstate value is ${prevState.count}`)
      return {count: 0}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">Counter application</h1>
        <p className="count">{count}</p>
        <div>
          <button className="button" onClick={this.onIncrement}>
            increase
          </button>
          <button className="button" onClick={this.onDecrement}>
            decrease
          </button>
          <button className="button" onClick={this.onReset}>
            reset
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
