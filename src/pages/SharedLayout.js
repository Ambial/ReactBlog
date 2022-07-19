import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

function SharedLayout() {
  return (
    <div>  
        <Navbar />
        <section className="content">
          <Outlet /> 
        </section>         
    </div>
  )
}

export default SharedLayout