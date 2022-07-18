function BlogEntry({blog, handleDelete}) {
  return (
    <div className="blog-preview">
        <h2>{blog.title}</h2>
        <p>Written by {blog.author}</p>
        <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
    </div>
  )
}

export default BlogEntry