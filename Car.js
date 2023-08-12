import React from 'react';

function Brands(props) {
    return <li>I am an { props.brand}</li>
}
export default function Car() {
    const cars = ['Audi', 'Toyota', 'Lexus'];

  return (
    <div>
      <h1>My favorite car brands!</h1>
      <ul>
        {cars.map(car => <Brands brand={car} />)}
      </ul>
    </div>
  )
}
