import { createBrowserRouter, RouterProvider } from 'react-router'
import PageWrapper from './features/layout/PageWrapper'
import HomePage from './features/home/HomePage'
import NotFoundPage from './features/error/NotFoundPage'

const LobbyPage = () => <div className="text-text  bg-background">Lobby</div>
const ShopPage = () => <div className="text-text  bg-background">Shop</div>
const TutorialPage = () => (
  <div className="text-text  bg-background">Tutorial</div>
)
const EncyclopediaPage = () => (
  <div className="text-text  bg-background">Encyclopedia</div>
)
const CombatPage = () => <div className="text-text  bg-background">Combat</div>
const ResultPage = () => <div className="text-text  bg-background">Result</div>

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PageWrapper>
        <HomePage />
      </PageWrapper>
    ),
  },
  {
    path: '/lobby',
    element: (
      <PageWrapper>
        <LobbyPage />
      </PageWrapper>
    ),
  },
  {
    path: '/shop',
    element: (
      <PageWrapper>
        <ShopPage />
      </PageWrapper>
    ),
  },
  {
    path: '/tutorial',
    element: (
      <PageWrapper>
        <TutorialPage />
      </PageWrapper>
    ),
  },
  {
    path: '/encyclopedia',
    element: (
      <PageWrapper>
        <EncyclopediaPage />
      </PageWrapper>
    ),
  },
  {
    path: '/combat/:gameId',
    element: (
      <PageWrapper className="py-0 px-0 max-w-none">
        <CombatPage />
      </PageWrapper>
    ),
  },
  {
    path: '/result/:gameId',
    element: (
      <PageWrapper>
        <ResultPage />
      </PageWrapper>
    ),
  },
  {
    path: '*',
    element: (
      <PageWrapper>
        <NotFoundPage />
      </PageWrapper>
    ),
  },
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}
