import { useContext } from 'react'
import { PostsContext } from '../../contexts/PostsContext'

export const useContextPosts = () => useContext(PostsContext)
