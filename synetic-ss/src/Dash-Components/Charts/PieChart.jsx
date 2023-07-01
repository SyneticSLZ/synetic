import React from 'react'
import "./featured.css"
import { VscKebabVertical } from  "react-icons/vsc"
import { MdKeyboardArrowUp } from  "react-icons/md"
import { MdKeyboardArrowDown } from  "react-icons/md"
import { CircularProgressbar } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css";
const PieChart = () => {
  return (
    <div className='featured'>
      <div className="top">
        <div className="title">Total Revenue</div>
        <VscKebabVertical />
      </div>
      <div className="bottom">
        <div className="featuredChart">
            <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
        </div>
        <p className="title-bottom">Total sales made today</p>
        <p className="amount">£430</p>
        <p className="des">Lorem ipsum dolor sit amet.</p>
        <div className="summary">
          <div className="item1">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive">
              <MdKeyboardArrowUp />
              <div className="resultAmount">£13.2k</div>
            </div>
          </div>
          <div className="item1">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <MdKeyboardArrowUp />
              <div className="resultAmount">£132k</div>
            </div>
          </div>
          <div className="item1">
            <div className="itemTitle">Last Year</div>
            <div className="itemResult negative">
              <MdKeyboardArrowDown />
              <div className="resultAmount">£12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PieChart