import { Outlet } from 'react-router-dom'
import { PostsProvider } from '../../contexts/PostsContext'

export const FeedPage = () => {    
  return (
    <PostsProvider>
      <div>
        <Outlet />
      </div>
    </PostsProvider>
  )
}
