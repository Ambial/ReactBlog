import { useParams } from "react-router-dom"

function BlogDetails() {
  const { id } = useParams()

  return (
    <div className="blog-details">
        <h2>BlogDetails for the blog with the id {id}</h2>
    </div>
  )
}

export default BlogDetails