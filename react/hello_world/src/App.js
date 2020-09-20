import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Function_component';
import Welcome from './components/Class_component'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ParentComponent from './components/ParentComponent';
import NameList from './components/NameList'
import Stylesheet from './components/Stylesheet';
import Form from './components/Form';
function App() {
  return (
    <div className="App">
      <Greet name='Umang'/>
      <Welcome name='Ravi' />
      <Message />
      <Counter />
      <FunctionClick />
      <ParentComponent />
      <NameList />
      <Stylesheet></Stylesheet>
      <Form></Form>
      
    </div>
  );
}

export default App;
