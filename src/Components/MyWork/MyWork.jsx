import React from 'react';
import './MyWork.css';
import myWorkData from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My Latest Work</h1>
            <img alt="" />
        </div>
        <div className="mywork-container">
            {myWorkData.map((mywork , index)=>{
               return <a target='_blank' href={mywork.link}><img key={index} src={mywork.w_img}/></a>
            })}
        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
            <img src={arrow_icon} alt="" />
        </div>
    </div>
  )
}

export default MyWork