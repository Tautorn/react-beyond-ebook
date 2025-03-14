import { lazy } from 'react'

const Main = lazy(() => import('../containers/Main'))

export const mainRoutes = [
  {
    path: '/',
    element: <Main />,
    exact: true,
  }
]