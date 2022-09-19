
import './NewAmbulance.scss'
import LoginBTN from '../../components/Buttons/LoginBTN/LoginBTN'
import Navbar from '../../components/navbar/Navbar'
const NewAmbulance = () => {
 return (
 <>
 <Navbar/>
 <div className='newAmbulanceContainer'>
    <div className='loginContainer'>
<p className='titles'> Add Ambulance</p>
<label for="html">Registration Number:</label>
<LoginBTN placeholder = 'Registration Number'/>
<label for="html">Telephone :</label>
<LoginBTN placeholder = 'Telephone'/>
<label for="html">YOM:</label>
<LoginBTN placeholder = 'YOM'/>
<label for="html">Plate Number:</label>
<LoginBTN placeholder = 'Plate Number:'/>
<input type="submit" value="submit"></input>
</div>

  
 </div>
 </>
 )
}
export default NewAmbulance