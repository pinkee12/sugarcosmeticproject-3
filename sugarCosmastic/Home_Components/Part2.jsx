import v_club from '../src/assets/v_club.jpg'
import {Link} from 'react-router-dom'
export default function Part2(){
    return(
<div id="main">
    <div><h1>---- CLUB VELLVETTE ----</h1></div>
    <div className='black_div'>
        <div><img src={v_club}/></div>
        <div><Link><h1>Buy @ ₹299 for 6 months</h1></Link>
        <Link><h1>Save 20% EXTRA + FREE Shipping</h1></Link>
        <Link>JOIN NOW</Link>
        </div>
    </div>
    

</div>
    )
   
  }