import { useEffect, useState } from "react"
import BlogList from "./BlogList"

function Home() {

    const handleDelete = (idOfBlogToDelete) => {
        setBlogs(blogs.filter(blog => blog.id !== idOfBlogToDelete))
      }

    const [blogs, setBlogs] = useState([])

    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
            fetch('http://localhost:7777/blogs')
                .then(res => {
                    if (!res.ok) {
                        throw Error("Error fetching data for that resource")
                    }
                    return res.json()
                })
                .then(data => {
                    setError(null)
                    setBlogs(data)
                    setIsLoading(false)
                })
                .catch(err => {
                    setIsLoading(false)
                    setError(err.message)
                })
    }, [])

  return (
    <div className="home">
        {error && <div>{error}</div>}
        {!isLoading ?
        <>
        {blogs.length > 0 ? <>
        <BlogList blogs={blogs} 
                  title={"All blogs"} 
                  handleDelete={handleDelete}/>
        <BlogList blogs={blogs.filter(entry => entry.author.toLowerCase() === 'mario')} 
                  title={"Mario's blogs"}
                  handleDelete={handleDelete}/>
        </> : ''}
        </>
        : <div>Loading...</div>}
    </div>
  )
}

export default Home