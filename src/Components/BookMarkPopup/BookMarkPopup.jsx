import React,{useReducer,useCallback,useRef,useEffect} from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "./BookMarkPopup.css";

const initialValue={
	title:'',
	text:'',
    isFavourite:false
}

const reducerFunction=(state,action)=>{
	return{...state,[action.name]:action.value}
}

function BookMarkPopup({showPopup,closePopup,actionEvent}){

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
        console.log(bookMarkDetails);
        actionEvent(bookMarkDetails);

    };
    useEffect(()=>{
		if(inputRef.current)
            inputRef.current.focus();
	},[]);
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
                <h3 className="pop-up-title">Add new Book Mark
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
							Login <i className="fas fa-sign-in-alt"></i>
						</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default React.memo(BookMarkPopup);