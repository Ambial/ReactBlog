import { useParams } from "react-router-dom"
import useFetch from "../customHooks/useFetch"
import { BASE_URL, BLOGS_PATH } from "../utils/consts"
import { useNavigate } from "react-router-dom"

function BlogDetails() {
  const { id } = useParams()
  const { data:blog, isLoading, error} = useFetch(`${BASE_URL}${BLOGS_PATH}/${id}`)
  let navigate = useNavigate();

  const handleClick = () => {
    fetch(`${BASE_URL}${BLOGS_PATH}/${id}`, {
      method: 'DELETE'
    }).then(() => {
      navigate('/')
    })
  }

  return (
    <div className="blog-details">
        { isLoading && <div>Still loading...</div>}
        { error && <div>{error}</div>}
        {blog && (
        <article>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <div>{blog.body}</div>
            <button onClick={handleClick}>Delete</button>
        </article>
        )}
    </div>
  )
}

export default BlogDetails