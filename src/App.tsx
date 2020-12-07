import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Board from "./components/Board";

function App() {
  return (
    <div className="App">
     <div className="page">
       <Header />
       <Board />
     </div>
    </div>
  );
}

export default App;
