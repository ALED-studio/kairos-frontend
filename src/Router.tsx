import { createBrowserRouter, RouterProvider } from 'react-router'
import HomePage from '@/features/home/HomePage'
import NotFoundPage from '@/features/error/NotFoundPage'
import HomeLayout from '@/features/home/HomeLayout'
import EncyclopediaPage from './features/encyclopedia/EncyclopediaPage'

const CombatPage = () => <div className="text-text  bg-background">Combat</div>

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <HomeLayout>
        <HomePage />
      </HomeLayout>
    ),
  },
  {
    path: '/encyclopedia',
    element: (
      <HomeLayout>
        <EncyclopediaPage />
      </HomeLayout>
    ),
  },
  {
    path: '/combat/:gameId',
    element: <CombatPage />,
  },
  {
    path: '*',
    element: (
      <HomeLayout>
        <NotFoundPage />
      </HomeLayout>
    ),
  },
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}
