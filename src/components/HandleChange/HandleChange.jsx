import React, { Component } from 'react'

export class HandleChange extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
                changeValue : ''
        }
        }

    handleOnChange = (e) =>{
        this.setState({changeValue:e.target.value}
            ,()=>{
                console.log(this.state.changeValue);
                
            });


    }

  render() {
    return (
        <>
            <div>HandleChange</div>
            <input type="text" onChange={this.handleOnChange}/>
            <br />
            <p>{this.state.changeValue}</p>
        </>
    )
  }
}

export default HandleChange
