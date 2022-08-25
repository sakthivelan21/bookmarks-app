import React from 'react';
import "./AddButton.css";

function AddButton({handleEvent}){
    return(
        <div className="chat-bot-container">
            <div className="chat-bot-button fadeup"  title="Add" onClick={()=>handleEvent()}>
                <i className="fa-solid fa-plus"></i>
            </div>
        </div>
    )
}

export default React.memo(AddButton);