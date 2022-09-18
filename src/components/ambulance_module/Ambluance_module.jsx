
import './ambulance_module.scss'
import Ambulance from '../../assets/ambulance.png'; 
 const Ambulance_module = () => {
  return (
    <div className ='Ambulance_module'> 
     <div className ='ambulance_container'>
          <img src={Ambulance} alt="Logo" className='ambulance_image' />
          <div className='description'> Nissan Altima
          <div className='plate'> KBY 144Z</div>
          </div>  
            </div>
            <div className ='details_container'> 
          <div className ='details'> 
          <p > Paramedics</p>
          <p className ='data'> 2</p>
          
          </div>
          <div className ='details'> 
          <p > Driver</p>
          <p className ='data'> 1</p>
          
          </div>
            <div className ='details'> 
          <p > Trips</p>
          <p className ='data'> 14</p>
          
          </div>
          <div className ='details'> 
          <p > Revenue</p>
          <p className ='data'> 42000</p>
          </div>
          
          
          
          </div>
            
     
    </div>
    
  )
}
export default Ambulance_module