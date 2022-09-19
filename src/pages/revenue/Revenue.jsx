
import './Revenue.scss'
import Navbar from '../../components/navbar/Navbar'
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
const Revenue = () => {
 return (
   <>
   <Navbar />
   <div className='revenueContainer'>
    <div className ='revenueTitleContainer'>
    <p className='revenueTitle'> <o>Rev</o>enue</p>
 
    <p className='date'> this week </p>
    </div>
    <div className ='underline'/>
    <p className='revenue'>  1,000,000 <o>Ksh </o></p>
    

   </div>
   <div className='revenueContainer'>
   <div className ='revenueTitleContainer'>
    <p className='revenueTitle'> <o>Us</o>ers</p>
    <p className='date'> this week </p>
    </div>
    <div className ='underline'/>
    
    <p className='revenue'>380 <o> Users</o></p>
   </div>

   
   </>
 )
}
export default Revenue