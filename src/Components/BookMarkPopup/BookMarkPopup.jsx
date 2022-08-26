import React,{useReducer,useCallback,useRef,useEffect} from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "./BookMarkPopup.css";



const reducerFunction=(state,action)=>{
	return{...state,[action.name]:action.value}
}

function BookMarkPopup({showPopup,closePopup,actionEvent,initialValue,popupTitle,buttonText,iconClass,updateActionEvent}){

    const [bookMarkDetails,dispatchFunction]=useReducer(reducerFunction,initialValue);


	const {title,text,isFavourite}=bookMarkDetails;

    const inputRef=useRef(null);


    const updateBookMarkDetails=useCallback((event)=>{
		dispatchFunction({'name':event.target.name,'value':event.target.value});
	},[])

    const toggleFavouriteState=()=>{
        dispatchFunction({'name':"isFavourite",
        'value': isFavourite ? false : true
        });
    }
    const submitHandler=(event)=>{
		event.preventDefault();
        const date = new Date();
        bookMarkDetails['time']= date.toLocaleDateString()+" "+date.toLocaleTimeString();
        if(buttonText==="update")
            updateActionEvent(bookMarkDetails);
        else 
            actionEvent(bookMarkDetails);

    };
    useEffect(()=>{
		if(inputRef.current)
            inputRef.current.focus();
        for(let key in initialValue)
            dispatchFunction({'name':key,'value':initialValue[key]});
	},[initialValue]);
    return(
        showPopup 
        &&  
        <div className="pop-up-holder">
            <div className="close-button-holder">
                <button className="close-button" onClick={()=>closePopup()}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div className="pop-up-container">
                <h3 className="pop-up-title">{popupTitle}
                    <button  className="book-mark-button" title='Favourite' onClick={()=>toggleFavouriteState()}>
                        <h3>
                            <i className={ isFavourite ? "fa-solid fa-star favourite-icon" : "fa-solid fa-star"}></i>
                        </h3>
                    </button>
                </h3>
                <div className="pop-up-data-container">
                    <form className="popup-form" onSubmit={submitHandler}>
                        <Input 
                                iconClass="fa-solid fa-t"
                                name="title" 
                                onChange={updateBookMarkDetails} 
                                type="text"
                                extraConditions={{}}
                                inputRef={inputRef}
                                placeholder="Title"
                                value={title}/>
                        <div className="form-input">
                            <textarea
                                name="text" 
                                onChange={updateBookMarkDetails} 
                                className="text-area"
                                placeholder="your Text"
                                value={text}>
                                </textarea>
                        </div>
                        <Button type="submit" classProp="button">
							{buttonText} <i className={iconClass}></i>
						</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default React.memo(BookMarkPopup);