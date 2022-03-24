import React, { Component } from 'react'

class RenderCounter extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count : 0
        }
      }
  
      increamentCounter = () => {
          this.setState({
              count : this.state.count + 1
          })
      }
  render() {
    return (
      <div>
        {this.props.render(this.state.count , this.increamentCounter)}
      </div>
    )
  }
}

export default RenderCounter
