import { Posts } from './components/Posts/Posts'

import { FeedPage } from './pages/Feed/FeedPage'
import { NotFoundPage } from './pages/NotFound/NotFoundPage'
import PostDetail from './components/Posts/PostDetail'

export const routes = [
    {
        path: '/feed',
        element: <FeedPage />,
        children: [
            {
                index: true,
                element: <p>Bienvenido al feed, selecciona una opción</p>
            },
            {
                path: 'posts',
                element: <Posts />
            },
            {
                path: 'posts/:id',
                element: <PostDetail />
            }
        ]
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
]
