
import './TripsMade.scss'
import Navbar from '../../components/navbar/Navbar'
import AmbulanceTrips from '../../components/Ambulance_trips/Ambulance_trips'


const TripsMade = () => {
 return (
   <>
   <Navbar />
   <p className ='title'> Trips Made  </p>
   <p className = 'tripsMade'>16 Trips made this month </p>

   <div className = 'ambulances'>
   <AmbulanceTrips />
   <AmbulanceTrips />
   <AmbulanceTrips />          
        </div>
  <p className ='RatingText '> Highest Rated Ambulance </p>
  <div className='RatingContainer'>
    <p className='plate'>Kby 692z</p>
    <p className='rating'>4.0 <o> rating</o> </p>
     </div>


   </>
 )
}
export default TripsMade