import React from 'react';
import "./message.css"

const Message = ({user,message,classs}) => {
    
    if(user){
        if(user == "Admin"){
            return (
                <div className={`messageBox`} style={{display:'flex', alignItems:'center',justifyContent:'center',color:"crimson",fontSize:'1.2vmax'}}>
                    {`${message}`}
                </div>
                ) 
        }else{
            return (
                <div className={`messageBox ${classs}`}>
                    {`${user}: ${message}`}
                </div>
                )
        }
        
    }
    else{
        return (
            <div className={`messageBox ${classs}`}>
                {`${message}`}
            </div>
        )
    }
    
  
};

export default Message;
