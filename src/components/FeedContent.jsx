import { useContextPosts } from '../shared/hooks/useContextPosts'
import { Link } from 'react-router-dom'

const FeedContent = () => {
    const { posts } = useContextPosts()

    return (
        <div>
            <h2>Posts</h2>
            {
                posts.length === 0
                ? <p>No posts available</p>
                : posts.map(post => (
                    <div key={post._id}>
                        <h3>{post.title}</h3>
                        <p>{post.description}</p>
                        {
                            post.link &&
                            <a href={post.link} target='_blank' rel='noopener noreferrer'>View project</a>
                        }
                        <Link to={`/post/${post._id}`}>Read more</Link>
                    </div>
                ))
            }
        </div>
    )
}

export default FeedContent
