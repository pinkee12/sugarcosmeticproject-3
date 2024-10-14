import React from 'react'
import M1 from '../src/assets/M1.webp'
import M2 from '../src/assets/M2.webp'
import M3 from '../src/assets/M3.webp'
import M4 from '../src/assets/M4.webp'
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
function Part3Reuse2() {
  
  return (
    <div id='main_part3' className='Reuse2'>
        <div><h1>--- SUPER SAVERS ----</h1></div>
        
        <div id='card_div'>
        <button className=" " style={{color:'white'}}>
        <BiSolidSkipPreviousCircle size={30} />
        </button>
       
        <Card image={M1} name="Rage For Coverage " callername="Foundation" shades="9 shades" amount="425"/>,
        <Card image={M2} name="Air Kiss Powder" callername="Lipstick" shades="4 shades" amount="250"/>,
        <Card image={M3} name="Eye Talk Value Set" callername="Eye talk" shades="NA" amount="599"/>,
        <Card image={M4} name="Date Night Makeup Duo" callername="Make up kit" shades="NA" amount="499"/> 
        <button  style={{color:'white'}}>
        <BiSolidSkipNextCircle size={30} />
        </button>
        </div>
       

    </div>
  )
}

export default Part3Reuse2