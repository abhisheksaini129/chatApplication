import React from 'react';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import './App.css';
import Join from './Component/join/Join';
import Chat from './Component/chat/Chat';
// import socketIO from 'socket.io-client';
//  const ENDPOINT='http://localhost:4500/';

//  const socket = socketIO(ENDPOINT , {transports:['websocket']});

function App(){
  
  return (
    <div className="Ap">
      {/* <h1>hello</h1> */}
      <Router>
      <Routes>
        <Route path="/" element={<Join/>} />
        <Route path="/chat" element={<Chat/>} />
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
