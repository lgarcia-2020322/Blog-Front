import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import CommentForm from '../Comments/CommentForm'
import './PostDetail.css'

const PostDetail = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [post, setPost] = useState(null)
    const [comments, setComments] = useState([])

    const fetchData = async () => {
        try {
            const postRes = await axios.get(`http://localhost:3636/v1/Posts/One/${id}`)
            const commentsRes = await axios.get(`http://localhost:3636/v1/Comments/Post/${id}`)
            setPost(postRes.data.post)
            setComments(commentsRes.data.comments)
        } catch (err) {
            console.error('Error loading post or comments:', err)
        }
    }

    useEffect(() => {
        fetchData()
    }, [id])

    const handleBack = () => {
        navigate('/feed/posts')
    }

    if (!post) return <p>Loading...</p>

    return (
        <div className='post-container'>
            <button onClick={handleBack} className='btn-back'>
                Volver al feed
            </button>

            <h2>{post.title}</h2>
            <p><strong>Descripción:</strong> {post.description}</p>
            <p><strong>Curso:</strong> {post.course}</p>

            {
                post.link &&
                <p>
                    <a href={post.link} target='_blank' rel='noopener noreferrer'>
                        Ver proyecto
                    </a>
                </p>
            }

            <hr />

            <h4>Comentarios</h4>
            {
                comments.length === 0
                ? <p>No hay comentarios aún.</p>
                : comments.map(c => (
                    <div key={c._id} className='comment-box'>
                        <strong>{c.username}</strong>
                        <p>{c.content}</p>
                    </div>
                )
            )
            }

            <hr />
            <h5>Agregar comentario</h5>
            <div className='comment-form'>
                <CommentForm
                    postId={id}
                    onCommentAdded={fetchData}
                />
            </div>
        </div>
    )
}

export default PostDetail
