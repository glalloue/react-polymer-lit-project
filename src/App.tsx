import React, { useState, useEffect } from 'react';
import reactLogo from '@assets/react.svg'
import viteLogo from '/vite.svg'
import polymerLogo from '@assets/polymer.svg'
import litLogo from '@assets/lit.png'
import './App.css'
import MyReactComponent from './components/react/MyReactComponent';

// Import the Lit component so it registers the custom element
import './components/lit/MyLitComponent';

// Import polymer components
import './components/polymer/polymer-cmp1.ts';

const App: React.FC = () => {
  useEffect(() => {
    // Manipuler le composant Lit via React si nécessaire
    const litComponent = document.querySelector('my-lit-component');
    if (litComponent) {
      litComponent.setAttribute('message', 'Updated from React!');
    }
  }, []);
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://polymer-library.polymer-project.org/" target="_blank">
          <img src={polymerLogo} className="logo polymer" alt="Polymer logo" />
        </a>
        <a href="https://lit.dev/" target="_blank">
          <img src={litLogo} className="logo lit" alt="Lit logo" />
        </a>
      </div>
      <h1>Vite + React + Polymer + Lit</h1>
      <div className="card">
        <h2>React part of code : </h2>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <MyReactComponent />
      </div>
      <div className="card">
        <h2>Polymer part of code : </h2>
        <polymer-cmp1></polymer-cmp1>
      </div>
      <div className="card">
        <h2>Lit part of code : </h2>
        <my-lit-component message="Hello from Lit!"></my-lit-component>
      </div>
    </>
  )
}

export default App
