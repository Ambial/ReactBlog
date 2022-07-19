import BlogEntry from "./BlogEntry"

function BlogList({blogs, title}) {
  return (
    <>
    <h2>{title}</h2>
    <div className="blog-list">
        {
            blogs.map(blog => <BlogEntry blog={blog} key={blog.id}/>
        )}
    </div>
    </>
  )
}

export default BlogList