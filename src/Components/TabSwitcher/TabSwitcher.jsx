import React from 'react';
import './TabSwitcher.css';
import BookMarkList from '../BookMarkList/BookMarkList';

function TabSwitcher({tabs,handleEvent,bookMarksList,currentTabIndex,updateBookMark,deleteBookMark,toggleUpdateBookMark}){
    const noDataFoundText=['Add new Book Mark to View','Save a Book Mark as Favourite']
    return(
        <div className='tab-switcher-container'>
            <div className='tabs-container'>
                {
                    tabs.map((tab,index)=>
                        <div key={index} className={currentTabIndex===index ?'tab current-tab':'tab'} onClick={()=>handleEvent(index)}>
                            <i className={tab.iconClass}/>   {tab.title}
                        </div>
                    )
                }
            </div>
            <BookMarkList bookMarksList={bookMarksList} 
                    updateBookMark={updateBookMark}
                    noDataFoundText={noDataFoundText[currentTabIndex]}
                    toggleUpdateBookMark={toggleUpdateBookMark}
                    deleteBookMark={deleteBookMark}/>
        </div>
    )
}

export default TabSwitcher;