import { useEffect, useState } from "react"
import BlogList from "./BlogList"

function Home() {

    const handleDelete = (idOfBlogToDelete) => {
        console.log(`Let's delete the blog with the id ${idOfBlogToDelete}`)
        setBlogs(blogs.filter(blog => blog.id !== idOfBlogToDelete))
      }

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])

    useEffect(() => {
        fetch('http://localhost:7777/blogs')
        .then(res => {
            return res.json()
        })
        .then(data => {
            setBlogs(data)
        })
    }, [])

  return (
    <div className="home">
        {blogs && <>
        <BlogList blogs={blogs} 
                  title={"All blogs"} 
                  handleDelete={handleDelete}/>
        <BlogList blogs={blogs.filter(entry => entry.author.toLowerCase() === 'mario')} 
                  title={"Mario's blogs"}
                  handleDelete={handleDelete}/>
        </>}
    </div>
  )
}

export default Home