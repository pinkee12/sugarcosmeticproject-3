import React from 'react'
import MK1 from '../src/assets/MK1.webp'
import MK2 from '../src/assets/MK2.webp'
import MK3 from '../src/assets/MK3.webp'
import MK4 from '../src/assets/MK4.webp'
import { Link } from 'react-router-dom'
import { MdCurrencyRupee } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { BiSolidSkipNextCircle } from "react-icons/bi";
import { BiSolidSkipPreviousCircle } from "react-icons/bi";



function Card({image,name,callername,shades,amount}){
    return(
        <>
        <div className='card_div'>
                <div><img src={image} alt="" /></div>
                <div>
                <p>{name}</p>
                <p>{callername}</p>
                <Link>{shades}</Link>
                </div>
                <div className='card_content'>
                <MdCurrencyRupee size={25} />
                <Link>{amount}</Link>
                </div>
                <div>
                <Link><FaRegHeart size={30} /></Link>
                <button>SELECT SHADE</button>
                </div>  
        </div>
        </>
    )
}
function Part3Reuse() {
  
  return (
    <div id='main_part3'>
        <div><h1>--- GIFTING ----</h1></div>
        
        <div id='card_div'>
        <button className=" " style={{color:'white'}}>
        <BiSolidSkipPreviousCircle size={30} />
        </button>
       
        <Card image={MK1} name="Lipstick & Kohi Value Set" callername="Lipstick" shades="18 shades" amount="799"/>,
        <Card image={MK2} name="All You Need Beauty Kit" callername="Beauty" shades="NA" amount="1599"/>,
        <Card image={MK3} name="Wedding Makeup kit" callername="Makeup kit" shades="NA" amount="1699"/>,
        <Card image={MK4} name="The Office makeup Kit " callername="Make up kit" shades="18 shades" amount="999"/> 
        <button  style={{color:'white'}}>
        <BiSolidSkipNextCircle size={30} />
        </button>
        </div>
       

    </div>
  )
}

export default Part3Reuse