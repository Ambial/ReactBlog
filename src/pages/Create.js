import { useState } from "react"

function Create() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('mario')

  return (
    <div className="create">
      <h2>Add a new blog entry</h2>
      <form>
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
        <button>Add blog</button>
      </form>
    </div>
  )
}

export default Create