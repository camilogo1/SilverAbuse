import { Link } from 'react-router-dom'
//import FaHome from 'react-icons/lib/fa/home'

const MainMenu = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="about" 
            	  activestyle={{
            	  backgroundColor: "white", 
            	  color: "slategray"
            	}}>
            	About
            </Link>
            <Link to="members" 
            	  activestyle={{
            	  	backgroundColor: "white", 
            	  	color: "slategray"
            	  }}>
            	  Members
           	</Link>
        </nav>
    )
}

export default MainMenu