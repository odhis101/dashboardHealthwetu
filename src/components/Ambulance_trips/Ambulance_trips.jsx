
import './trips.scss'
import Ambulance from '../../assets/ambulance.png'; 
 const Ambulance_trips = () => {
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
          <p > Pickup Location</p>
          <p className ='data'> 2</p>
          
          </div>
          <div className ='details'> 
          <p > Drop Off </p>
          <p className ='data'> 1</p>
          
          </div>
            <div className ='details'> 
            <p > Date </p>
          <p className ='data'> 14th august</p>
          
          </div>
          <div className ='details'> 
          <p > Revenue</p>
          <p className ='revenue'> <b> 42,000 </b> ksh</p>
          </div>
          
          
          
          </div>
            
     
    </div>
    
  )
}
export default Ambulance_trips