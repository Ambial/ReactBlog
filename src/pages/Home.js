import useFetch from "../customHooks/useFetch"
import BlogList from "../components/BlogList"
import { BASE_URL, BLOGS_PATH } from "../utils/consts"

function Home() {
  const { data:blogs, isLoading, error} = useFetch(`${BASE_URL}${BLOGS_PATH}`)

  return (
    <div >
        {error && <div>{error}</div>}
        {!isLoading ?
        <>
        {blogs.length > 0 ? <>
        <BlogList blogs={blogs} 
                  title={"All blogs"} 
                  />
        <BlogList blogs={blogs.filter(entry => entry.author.toLowerCase() === 'mario')} 
                  title={"Mario's blogs"}
                  />
        </> : ''}
        </>
        : <div>Loading...</div>}
    </div>
  )
}

export default Home