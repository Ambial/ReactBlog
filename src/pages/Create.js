function Create() {
  return (
    <div className="create">
      <h2>Add a new blog entry</h2>
      <form>
        <label>Blog title:</label>
        <input type="text"
               required
        ></input>
        <label>Blog body:</label>
        <textarea required></textarea>
        <label>Blog author</label>
        <select>
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