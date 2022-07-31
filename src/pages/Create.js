import { useState } from "react"
import { BASE_URL, BLOGS_PATH } from "../utils/consts"

function Create() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('mario')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const newBlogEntry = {title, body, author}

    setIsLoading(true)

    fetch(`${BASE_URL}${BLOGS_PATH}`,{
      method:'POST',
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify(newBlogEntry)
    }).then(() => setIsLoading(false))
  }

  return (
    <div className="create">
      <h2>Add a new blog entry</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input type="text"
               required
               value={title}
               onChange={(event)=> setTitle(event.target.value)}
        ></input>
        <label>Blog body:</label>
        <textarea required
                  value={body}
                  onChange={(event)=> setBody(event.target.value)}
        ></textarea>
        <label>Blog author</label>
        <select value={author}
                onChange={(event)=> setAuthor(event.target.value)}>
          <option value="mario">mario</option>
          <option value="luigi">luigi</option>
          <option value="yoshi">yoshi</option>
        </select>
        {!isLoading && <button>Add blog</button>}
        {isLoading && <button disabled>Posting new blog...</button>}
      </form>
    </div>
  )
}

export default Create