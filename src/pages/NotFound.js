import { Link } from "react-router-dom"

function NotFound() {
  return (
    <div className="not-found">
      <h2>Sorry</h2>      
      <p>The page you're looking for is in another castle...</p>
      <Link to="/">Back to the homepage...</Link>
    </div>
  )
}

export default NotFound