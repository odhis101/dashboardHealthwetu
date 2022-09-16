
import './navbar.scss'
import Logo from '../../assets/HealthWetu.png'; 

const Navbar = () => {
 return (
   <div className ='navbar'>
      <div className ='navbar__wrapper'>
          <div className ='logo'>
          <img src={Logo} alt="Logo" className='logo_image' />
            </div>
          <div className ='navbar__items'>
            <ul>
              <li>Add new ambulance </li>
              <li>Trips made </li>
              <li>Revenue </li>
              <li>accuount </li>
            </ul>
          </div>
        </div>
   </div>
 )
}
export default Navbar