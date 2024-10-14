import React from 'react'
import './Header.css'
import { SearchIcon} from '@chakra-ui/icons'
import {Link} from 'react-router-dom'
import { RiAccountCircleLine } from "react-icons/ri";
import { IoIosHeartEmpty } from "react-icons/io";
import { LuShoppingBag } from "react-icons/lu";
import { TbDiscount2 } from "react-icons/tb";
function Header() {
  return (
    <>
<div id='main_container'>
    <div className='image_div'>
        <div>
        <img src="https://bl-i.thgim.com/public/incoming/vrzixr/article66333117.ece/alternates/FREE_1200/sugar%20cosmetics%20logo.JPG" alt="" />
        </div>
        <Link to="https://in.sugarcosmetics.com/clubVellvette">JOIN</Link>
    </div>
   
    <div id='inputbox'>
    <input  type="text" placeholder='Try "Liquid Lipstick" '/><button style={{border:'1px solid white'}}><SearchIcon/>Search</button>
    </div>
   

    <div id='child3'>
    <RiAccountCircleLine size={25}/><Link to="/login"><span>Login/Register</span></Link>
    </div>
    

    <div id='child4'>
    <Link><IoIosHeartEmpty size={25} /></Link>
    <Link><LuShoppingBag size={25} /></Link>
    <Link><TbDiscount2 size={25} /></Link>
    </div>  
</div>
<div id='main_container2'>
      <div className='AllLink'>
        <Link>LIPS</Link>
        <Link>EYES</Link>
        <Link>FACE</Link>
        <Link>NAILS</Link>
        <Link>SKINCARE</Link>
        <Link>ACCESSORIES</Link>
        <Link>GIFTS & KITS</Link>
        <Link>BESTSELLERS</Link>
        <Link>NEW LAUNCHES</Link>
        <Link>OFFERS</Link>
        <Link>BLOG</Link>
      </div>

</div>
    </>
    
  )
}

export default Header