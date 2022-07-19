import { useParams } from "react-router-dom"
import useFetch from "../customHooks/useFetch"
import { BASE_URL, BLOGS_PATH } from "../utils/consts"

function BlogDetails() {
  const { id } = useParams()
  const { data:blog, isLoading, error} = useFetch(`${BASE_URL}${BLOGS_PATH}/${id}`)

  console.log(blog)

  return (
    <div className="blog-details">
        { isLoading && <div>Still loading...</div>}
        { error && <div>{error}</div>}
        {blog && (
        <article>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <div>{blog.body}</div>
        </article>
        )}
    </div>
  )
}

export default BlogDetails