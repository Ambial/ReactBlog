import { Link } from "react-router-dom"

function BlogEntry({blog}) {
  return (
    <div className="blog-preview">
      <Link to={`blogs/${blog.id}`} >
        <h2>{blog.title}</h2>
        <p>Written by {blog.author}</p>
      </Link>
    </div>
  )
}

export default BlogEntry