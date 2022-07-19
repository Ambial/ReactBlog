import { Link, useNavigate } from "react-router-dom"

function BlogEntry({blog}) {
  const navigate = useNavigate()

  return (
    <div className="blog-preview"
         onClick={() => navigate(`blogs/${blog.id}`)}>
        <h2>{blog.title}</h2>
        <p>Written by {blog.author}</p>
    </div>
  )
}

export default BlogEntry