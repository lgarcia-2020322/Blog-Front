import { useState } from 'react'
import { addCommentRequest } from '../../services/api'
import toast from 'react-hot-toast'

const CommentForm = ({ postId, onCommentAdded }) => {
    const [username, setUsername] = useState('')
    const [content, setContent] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!username || !content) {
            toast.error('Agrega Datos')
            return
        }

        setLoading(true)

        const res = await addCommentRequest({ post: postId, username, content })

        if (!res.error) {
            toast.success('Comment added')
            setUsername('')
            setContent('')
            onCommentAdded()
        } else {
            toast.error('Failed to add comment')
            console.error(res.err)
        }

        setLoading(false)
    }

    return (
        <form onSubmit={handleSubmit} className='mt-4'>
            <div className='mb-2'>
                <input
                    type='text'
                    placeholder='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className='form-control'
                />
            </div>
            <div className='mb-2'>
                <textarea
                    placeholder='Write a comment...'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className='form-control'
                ></textarea>
            </div>
            <button type='submit' className='btn btn-primary' disabled={loading}>
                {loading ? 'Posting' : 'Add Comment'}
            </button>
        </form>
    )
}

export default CommentForm
