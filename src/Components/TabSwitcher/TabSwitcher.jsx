import React from 'react';
import './TabSwitcher.css';
import BookMarkList from '../BookMarkList/BookMarkList';

function TabSwitcher({tabs,handleEvent,bookMarksList,currentTabIndex}){
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
            <BookMarkList bookMarksList={bookMarksList}/>
        </div>
    )
}

export default React.memo(TabSwitcher);