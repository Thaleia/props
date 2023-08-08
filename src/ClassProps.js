import React, { Component } from 'react'

class ClassProps extends Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name} from {this.props.place}.</h1>
        {this.props.children} 
      </div>
    )
  }
}

export default ClassProps;

// {this.props.children} is reserved keyword. 
// on this occasion is used to show children inside <ClassProps />
// without it the children will not show from the inside of <ClassProps />
// snippet rce 