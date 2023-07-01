import React from 'react'
import "./widget.css"
 import { BsFillPersonFill } from "react-icons/bs"
 import { MdKeyboardArrowUp } from  "react-icons/md"
 import { MdKeyboardArrowDown } from  "react-icons/md"
 import { AiOutlineShoppingCart } from "react-icons/ai"
 import { CiMoneyCheck1} from "react-icons/ci"
 import { MdAccountBalance} from "react-icons/md"

const Widget = () => {

    // let data;



    // //temp data
    // const amount = 100
    // const diff = 20

    // switch (type) {
    //     case "user":
    //         data={
    //             title:"USERS",
    //             isMoney:false,
    //             link:"See all Users",
    //             icon: 
    //                 <BsFillPersonFill className='icon' />,
                
    //         };
    //         break;
    //         case "order":
    //         data={
    //             title:"ORDERS",
    //             isMoney:false,
    //             link:"view all orders",
    //             icon: 
    //                 <AiOutlineShoppingCart className='icon' />,
                
    //         };
    //         break;
    //         case "earning":
    //         data={
    //             title:"EARNINGS",
    //             isMoney:true,
    //             link:"View net earnings",
    //             icon: 
    //                 <CiMoneyCheck1 className='icon' />,
                
    //         };
    //         break;
    //         case "balence":
    //         data={
    //             title:"BALANCE",
    //             isMoney:true,
    //             link:"See details",
    //             icon: 
    //                 <MdAccountBalance className='icon' />,
                
    //         };
    //         break;
    //         default:
    //         break;
    // }
  return (
    <div className='widgets'>
    <div className='widget'>
    <div className="left">
        <span className='title'>USERS</span>
        <span className='counter'>2343</span>
        <span className='link'>View all users</span>
    </div>
    <div className="right">
        <div className="percentage positive">
            <MdKeyboardArrowUp />
            
             123 %
        </div>
        <div className='icon'>
        <BsFillPersonFill />
        </div>
        {/* <BsFillPersonFill className='icon' style={{
            : "black"

        }} /> */}
    </div>
</div>
    <div className='widget'>
    <div className="left">
        <span className='title'>ORDERS</span>
        <span className='counter'>2343</span>
        <span className='link'>View all orders</span>
    </div>
    <div className="right">
        <div className="percentage positive">
            <MdKeyboardArrowUp />
             99 %
        </div>
        <div className='icon'>
        <AiOutlineShoppingCart />
        </div>
        {/* <AiOutlineShoppingCart className='icon' /> */}
    </div>
</div>
<div className='widget'>
    <div className="left">
        <span className='title'>EARNINGS</span>
        <span className='counter'>£2343</span>
        <span className='link'>View net earnings</span>
    </div>
    <div className="right">
        <div className="percentage positive">
            <MdKeyboardArrowUp />
             34 %
        </div>
        <div className='icon'>
        <CiMoneyCheck1 />
        </div>
        {/* <CiMoneyCheck1 className='icon' /> */}
    </div>
</div>
<div className='widget'>
    <div className="left">
        <span className='title'>Balence</span>
        <span className='counter'>£2343</span>
        <span className='link'>See Details</span>
    </div>
    <div className="right">
        <div className="percentage positive">
            <MdKeyboardArrowUp />
             23 %
        </div>
        <div className='icon'>
        <MdAccountBalance />
        </div>
        
    </div>
</div>
</div>
  )
}

export default Widget