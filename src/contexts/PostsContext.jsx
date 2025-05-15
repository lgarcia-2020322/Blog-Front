import { createContext, useEffect, useState } from 'react'
import { getPostRequest } from '../services/api'

export const PostsContext = createContext()

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([])

  const loadPosts = async () => {
    const res = await getPostRequest()
    if (!res.error) {
      setPosts(res.data.posts)
    }
  }

  useEffect(() => {
    loadPosts()
  }, [])

  return (
    <PostsContext.Provider value={{ posts }}>
      {children}
    </PostsContext.Provider>
  )
}
