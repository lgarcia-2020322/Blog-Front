import { useContextPosts } from '../../shared/hooks/useContextPosts'
import { CardPost } from './CardPost'
import './Posts.css'

export const Posts = () => {
    const { posts } = useContextPosts()

    return (
        <div className='posts-page'>
            <h2 className='page-title'>Mis publicaciones</h2>
            {
                posts.map(post => (
                    <CardPost
                        key={post._id}
                        title={post.title}
                        description={post.description}
                        link={post.link}
                        postId={post._id}
                        course={post.course}
                    />
                ))
            }
        </div>
    )
}
