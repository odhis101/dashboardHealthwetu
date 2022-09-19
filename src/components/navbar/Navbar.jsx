
import './navbar.scss'
import {

  Link
} from "react-router-dom";
import Logo from '../../assets/HealthWetu.png'; 

const Navbar = () => {
 return (
   <div className ='navbar'>
      <div className ='navbar__wrapper'>
          <div className ='logo'>
          <Link  to = {'/home'}> <img   src={Logo} alt="Logo" className='logo_image' /></Link> 
            </div>
          <div className ='navbar__items'>
            <ul>
              <li>< Link to = {'/Newambulance'}  style={{textDecoration: 'none',color:'inherit'}}>Add new ambulance </Link></li>
              <li>< Link to = {'/TripsMade'} style={{textDecoration: 'none',color:'inherit'}}>Trips made </Link></li>
              <li>< Link to = {'/revenue'}  style={{textDecoration: 'none',color:'inherit'}}>Revenue </Link> </li>
              <li>< Link to = {'/login'}  style={{textDecoration: 'none',color:'inherit'}} >Accuount </Link> </li>
           
            </ul>
          </div>
        </div>
   </div>
 )
}
export default Navbar