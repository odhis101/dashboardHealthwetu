
import './login.scss'
import LoginBTN from '../../components/Buttons/LoginBTN/LoginBTN'
import Logo from '../../assets/HealthWetu.png';

const login = () => {
 return (
   <div className ='wrapper'>

    <div className ='login'> 
     <div className ='loginContainer' >
            <div className ='loginTitle'>
              <p> login</p>
              <form>
              <LoginBTN placeholder = 'Username'/>
              <LoginBTN placeholder = 'Password' />
              <input type="submit" value="Continue"></input>
            </form>
              </div>     
      
      </div>    
    </div>
    <div className = 'logo'>
      <div className ='logo_container'>
    <img src={Logo} alt="Logo" className='logo_image' />
    </div>
    
     </div> 
   
   
   </div>
 )
}
export default login