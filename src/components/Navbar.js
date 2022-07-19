import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar">
        <h1>My awesome React-powered Blog</h1>
        <div className="links">
          <Link to="/">Home </Link>
          <Link to="create">New Entry</Link>          
        </div>
    </nav>
  )
}

export default Navbar