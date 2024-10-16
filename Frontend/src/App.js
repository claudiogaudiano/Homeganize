import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Esempio di richiesta GET al backend
    axios.get('http://localhost:5000/api/hello')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error("There was an error!", error);
      });
  }, []);

  
  return (
    <div className="App">
      <h1>{message}</h1>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
