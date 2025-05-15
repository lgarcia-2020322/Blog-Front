import { Link } from 'react-router-dom'
import './CardPost.css'

export const CardPost = ({ title, description, link, postId, course }) => {
    return (
        <div className='card-post'>
            <h3>{title}</h3>
            <p className='description'>{description}</p>
            <p className='course'><strong>Curso:</strong> {course}</p>
            {
                link &&
                <p>
                    <a href={link} target='_blank' rel='noopener noreferrer'>
                        Ver proyecto
                    </a>
                </p>
            }
            <Link to={`/feed/posts/${postId}`} className='ver-mas'>
                Ver más
            </Link>
        </div>
    )
}
