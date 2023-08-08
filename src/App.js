import './App.css';
import ClassProps from './ClassProps';
import FunctionProps from './FunctionProps';

function App() {
  return (
    <div className="App">
      <ClassProps name='Learner 1' place='London'>
      <p>child component</p>
      <h5>Function props</h5>
      </ClassProps>
      <ClassProps name='Learner 2' place='Tokyo' />
      <ClassProps name='Learner 3' place='Paris'/>
      <FunctionProps name='Learner 4' place='New York'/>
      <FunctionProps name='Learner 5' place='Brazil'/>
    </div>
  );
}

export default App;
