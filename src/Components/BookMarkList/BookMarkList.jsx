import React from 'react';
import "./BookMarkList.css";

function BookMarkList({bookMarksList}){
    return(
    <div className='book-marks-list'>
        {
            bookMarksList.map((bookMark,index)=>
                <div key={index} className='book-mark-container'>
                    <div className='book-mark-title-holder'>
                        <h2 className='book-mark-title'>{bookMark.title}</h2>
                        <div className='book-mark-buttons'>
                            <button  className="book-mark-button" title='Delete'>
                                <h3>
                                    <i className="fa-solid fa-trash"></i>
                                </h3>
                            </button>
                            <button  className="book-mark-button" title='Edit'>
                                <h3>
                                <i className="fa-solid fa-pen-to-square"></i>
                                </h3>
                            </button>
                            <button  className="book-mark-button" title='Edit'>
                                <h3>
                                    <i className={ bookMark.isFavourite ? "fa-solid fa-star favourite-icon" : "fa-solid fa-star"}></i>
                                </h3>
                            </button>
                        </div>
                    </div>
                    <p className='book-mark-text'>{bookMark.text}</p>
                    <p className='time-indicator'>
                        <i className="fa-solid fa-clock"></i> {bookMark.time}
                    </p>
                    
                </div>
            )
        }
    </div>
    )
}

export default React.memo(BookMarkList);