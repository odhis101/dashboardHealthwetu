import Sidebar from '../../components/sidebar/Sidebar'
import NavBar from '../../components/navbar/Navbar'
import Module from '../../components/ambulance_module/Ambluance_module'
import './home.scss'

 const Home = () => {
  return (
    <div className ='home'> 
    
    <NavBar />
    <div className ='homeContainer'> contents
    <p className ='title'> All ambulances </p> 
    
    <Module />
    </div>
    </div>
    
  )
}
export default Home