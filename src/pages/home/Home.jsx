
import NavBar from '../../components/navbar/Navbar'
import Module from '../../components/ambulance_module/Ambluance_module'
import './home.scss'
import { Link } from "react-router-dom";
import { AiFillPlusCircle } from "react-icons/ai";


 const Home = () => {
  return (
    <div className ='home'>   
    <NavBar />
    <p className ='Welcome'>Welcome Amref Ambulances</p>
    <p className ='Welcome_details'><u> Joined</u> 2022</p>
    <div className ='homeContainer'>
      <div className= 'contents'> 
        <p className='title'>  <u>All</u> Ambulances</p>
        <div className = 'ambulances'>
          <Module />
          <Module />
          <Module />
          <Module />
          <div className='add'>
          <AiFillPlusCircle  color="red" fontSize="2.5em" />
          </div>
          
          
        </div>
      </div>
    </div>
   <div className='details'>
   <p className='trips'><b>16 Trips </b> made this week </p>
   <Link className ='seeMore'> see more</Link>

   </div>
    </div>
    
  )
}
export default Home