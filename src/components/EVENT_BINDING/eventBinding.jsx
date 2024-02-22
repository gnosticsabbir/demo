import React, { Component } from 'react'

export default class eventBinding extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         increase : 0
      }
    //   this.handleClick = this.handleClick.bind(this)
    //when we arrow function not use
    }

    handleClick(){
        this.setState({increase : this.state.increase + 2})
    }

  render() {
    return (
      <div>
        <p>{this.state.increase}</p>
        <button onClick={this.handleClick.bind(this)}>count</button>
      </div>
    )
  }
}
