import React,{useCallback, useEffect, useState} from 'react';
import AddButton from '../AddButton/AddButton';
import BookMarkPopup from '../BookMarkPopup/BookMarkPopup';
import TabSwitcher from '../TabSwitcher/TabSwitcher';
import './BookMark.css';
function BookMark(){
    const tabs=[
        {   
            title:'All Bookmarks',
            iconClass:'fa-solid fa-bookmark'
        },
        {   
            title:'Favourites',
            iconClass:'fa-solid fa-star favourite-icon'
        }
    ];
    const [allBookMarksList,setAllBookMarksList]=useState([
            {
                'title':'New BookMark',
                'text':'heelo sakthi good to see you',
                'time':'24/03/2022 12:11:23 Am',
                'isFavourite':false
            },
        
            {
                'title':'New BookMark favourite',
                'text':'heelo sakthi good to see you',
                'time':'24/03/2022 12:11:23 Am',
                'isFavourite':true
            }
        
    ])
    const [currentTabIndex,setCurrentTabIndex]=useState(0);
    const [bookMarkList,setBookMarkList]=useState([]);

    const [showPopup,setShowPopup]=useState(false);

    const closePopup=()=>{
        setShowPopup(false);
    }

    const openPopup=()=>{
        setShowPopup(true);
    }

    const addNewBookMark=(bookMark)=>{
        console.log(bookMark);
        allBookMarksList.push(bookMark)
        setAllBookMarksList( allBookMarksList);
        setShowPopup(false);
        let value = (currentTabIndex===1)?true:false;
        const newBookMarkList = allBookMarksList.filter((bookMark)=>bookMark.isFavourite===value);
        setBookMarkList(newBookMarkList);
    }

    
    
    const setBookMarkListHandler=useCallback((index)=>{
        let value = (index===1)?true:false;
        const newBookMarkList = allBookMarksList.filter((bookMark)=>bookMark.isFavourite===value);
        setBookMarkList(newBookMarkList);
    },[allBookMarksList]);
    
    const setTabIndex=(index)=>{
        setCurrentTabIndex(index);
        setBookMarkListHandler(index);
    }
    useEffect(
        ()=>{
            setBookMarkListHandler(0);
        },[setBookMarkListHandler]
    )
    
    return(
        <>
            <div className='bookmark-container'>
                <TabSwitcher 
                    bookMarksList={bookMarkList}
                    tabs={tabs} 
                    currentTabIndex={currentTabIndex}
                    handleEvent={setTabIndex}/>
            </div>
            <AddButton handleEvent={openPopup}/>
            <BookMarkPopup showPopup={showPopup} actionEvent={addNewBookMark} closePopup={closePopup}/>
        </>
    )
}

export default React.memo(BookMark);