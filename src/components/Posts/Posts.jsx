import { useState } from 'react'
import { useContextPosts } from '../../shared/hooks/useContextPosts'
import { CardPost } from './CardPost'
import './Posts.css'

const filtros = ['Todos', 'Taller', 'Práctica Supervisada', 'TICS', 'Tecnología']

export const Posts = () => {
  const { posts } = useContextPosts()
  const [filtroSeleccionado, setFiltroSeleccionado] = useState('Todos')

  const postsFiltrados = filtroSeleccionado === 'Todos'
    ? posts
    : posts.filter(post => post.course.trim().toLowerCase() === filtroSeleccionado.toLowerCase())

  return (
    <div className='posts-container'>
      <h2 className='page-title'>Mis publicaciones</h2>

      <div className='filtros'>
        {filtros.map(filtro => (
          <button
            key={filtro}
            className={`filtro-btn ${filtroSeleccionado === filtro ? 'activo' : ''}`}
            onClick={() => setFiltroSeleccionado(filtro)}
          >
            {filtro}
          </button>
        ))}
      </div>

      <div className='posts-lista'>
        {postsFiltrados.length === 0
          ? <p>No hay publicaciones para este curso.</p>
          : postsFiltrados.map(post => (
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
    </div>
  )
}
