import React from 'react'

export default function FunctionProps(props) {
  return (
    <div>
      <h2>This is a functional component rfc</h2>
      <h3>Hello {props.name} from {props.place}! I Love you!</h3>
    </div>
  )
}
// in a functional component use props
// pass props as a parameter in function