import React from 'react'
import Navbar from './components/Navbar';
import Main from './components/Main';
import Section1 from './components/Section1';

function App() {
  return (
    <div>
      <Navbar /><br />
      <Main />
      <div className="container">
        <Section1/>
      </div>
    </div>
  )
}

export default App;