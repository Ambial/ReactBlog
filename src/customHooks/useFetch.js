import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const abortController = new AbortController()
            fetch(url, {signal: abortController.signal })
                .then(res => {
                    if (!res.ok) {
                        throw Error("Error fetching data for that resource")
                    }
                    return res.json()
                })
                .then(data => {
                    setError(null)
                    setData(data)
                    setIsLoading(false)
                })
                .catch(err => {
                    if (err.name !== 'AbortError') {
                        setIsLoading(false)
                        setError(err.message)
                    }

                })

                return () => {
                    abortController.abort()
                } 
    }, [url])

    return { data, isLoading, error }
}

export default useFetch