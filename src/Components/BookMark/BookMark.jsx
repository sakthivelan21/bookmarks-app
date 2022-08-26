import React,{ useState} from 'react';
import AddButton from '../AddButton/AddButton';
import BookMarkPopup from '../BookMarkPopup/BookMarkPopup';
import TabSwitcher from '../TabSwitcher/TabSwitcher';
import './BookMark.css';

const addPopup={
    popupTitle:'Add New Book Mark',
    iconClass:"fa-solid fa-circle-plus",
    buttonText:'Add'
}

const updatePopup={
    popupTitle:'update New Book Mark',
    iconClass:"fa-solid fa-pen-to-square",
    buttonText:'update'
}

const addInitialValue={
	title:'',
	text:'',
    isFavourite:false
}

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
                id:1,
                'title':'New BookMark',
                'text':'heelo sakthi good to see you',
                'time':'24/03/2022 12:11:23 Am',
                'isFavourite':false
            },
        
            {
                id:2,
                'title':'New BookMark favourite',
                'text':'heelo sakthi good to see you',
                'time':'24/03/2022 12:11:23 Am',
                'isFavourite':true
            }
        
    ])
    const [currentTabIndex,setCurrentTabIndex]=useState(0);

    const [popup,setPopup]=useState(addPopup);

    const [initialValue,setInitialValue]=useState(addInitialValue);

    const [showPopup,setShowPopup]=useState(false);

    const closePopup=()=>{
        setShowPopup(false);
    }

    const openPopup=()=>{
        setShowPopup(true);
    }

    const addNewBookMark=(bookMark)=>{
        bookMark.id = allBookMarksList.length+1;
        setAllBookMarksList( [...allBookMarksList,bookMark]);
        setShowPopup(false);
    }

    const updateBookMark=  (bookMark)=>{
        console.log('in updateBookMarl');
        allBookMarksList[bookMark.id-1]=bookMark;
        setAllBookMarksList( [...allBookMarksList]);
        closePopup();
    }

    const toggleUpdateBookMark=(bookMark)=>{
        console.log('in update new book mark');
        setPopup(updatePopup);
        setInitialValue(bookMark);
        openPopup();
    }

    const toggleAddNewBookMark=()=>{
        setPopup(addPopup);
        setInitialValue(addInitialValue);
        openPopup();
        console.log('in toggle Add new Book Mark')
    }

    const deleteBookMark=(index)=>{
        console.log('in delete book mark');
        allBookMarksList.splice(index,1);
        setAllBookMarksList( [...allBookMarksList]);
        
    }
    
    const setTabIndex=(index)=>{
        setCurrentTabIndex(index);
    }
    
    return(
        <>
            <div className='bookmark-container'>
                <TabSwitcher 
                    bookMarksList={
                        (currentTabIndex)?
                        allBookMarksList.filter((bookMark)=>bookMark.isFavourite===true)
                        :
                        allBookMarksList
                    }
                    tabs={tabs} 
                    toggleUpdateBookMark={toggleUpdateBookMark}
                    updateBookMark={updateBookMark}
                    deleteBookMark={deleteBookMark}
                    currentTabIndex={currentTabIndex}
                    handleEvent={setTabIndex}/>
            </div>
            <AddButton handleEvent={toggleAddNewBookMark}/>
            <BookMarkPopup updateActionEvent={updateBookMark} showPopup={showPopup} {...popup} initialValue={initialValue} actionEvent={addNewBookMark} closePopup={closePopup}/>
        </>
    )
}

export default React.memo(BookMark);