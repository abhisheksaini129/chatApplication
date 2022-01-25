import React, { useEffect, useState } from 'react';
import closeIcon from "../../images/closeIcon.png";
import ReactScrollToBottoom from "react-scroll-to-bottom";
import {user} from "../join/Join";
import './chat.css';
import sendLogo from "../../images/send.png";
import logo from "../../images/logo.jpg";
import Message from '../message/Message';
import socketIo from 'socket.io-client';
 const ENDPOINT='https://bhu1.herokuapp.com/';
 let socket;
const Chat=()=> {
  const [id, setid] = useState("");
  const [messages, setMssages] = useState([]);
    const send=()=>{
     const message = document.getElementById('chatInput').value
     socket.emit('message',{message:message,id:id});
     document.getElementById('chatInput').value="";
    }
   console.log(messages);
    useEffect(() => {
       socket = socketIo(ENDPOINT,{transports:['websocket']});

        socket.on('connect',()=>{
            setid(socket.id);
        })
        console.log(socket);
        socket.emit('joined',{user})

        socket.on('welcome',(data)=>{
          setMssages([...messages,data])
          console.log(data.message);
        })
        socket.on('userJoined',(data)=>{
          setMssages([...messages,data])
          console.log(data.message);
        })
        socket.on('leave',(data)=>{
          setMssages([...messages,data])
          console.log(data.message);
        })
      return () => {
        socket.emit('disconnect');
        socket.off();
      }
    }, [])
    useEffect(() => {
      socket.on('sendMessage',(data)=>{
        setMssages([...messages,data])
        console.log(data.user,data.message,data.id)
      });
    
      return () => {
        socket.off();
      };
    }, [messages]);
   
  return (
  <div className="chatPage">
      <div className="chatContainer">
          <div className="header">
          <img className='logo' src={logo} alt="logo"/>
            <h2>BHU - Connect</h2>
           <a href="/"> <img className='close' src={closeIcon} alt="close" /></a>
          </div>
          <ReactScrollToBottoom className="chatBox">
            { messages.map((item,i)=> <Message user={item.user===user?"you":item.user} message={item.message} classs={item.id===id?"right":"left"}/>)}
          </ReactScrollToBottoom>
          <div className="inputBox">
              <input onKeyPress={(event)=>event.key==='Enter'?send():null} type="text" id="chatInput" />
              <button onClick={send} className='sendBtn'><img src={sendLogo} alt="Send" /></button>
          </div>
      </div>
  </div>
  )
}

export default Chat;
