import { useEffect } from 'react'
import {
  BrowserRouter,
  Route,
  Navigate,
  Routes as ReactRouterRoutes,
} from 'react-router-dom'
import { SecurityRoute } from '../../Routes'
import ContainerAuth from '../../Containers/Auth'
import { PrivateRoutes } from '../../Routes/PrivateRoutes'

export const Main = () => {
  useEffect(() => {
    if (!SecurityRoute.isAuthenticated() && window.location.pathname !== '/auth') {
      window.location.href = '/auth'
    }
  }, [])

  const renderRoutes = (route, key) => {
    const Template = route?.template
    const Element = route?.element

    const elementRender = Template ? (
      <Template>
        <Element />
      </Template>
    ) : (
      <Element />
    )

    return <Route key={key} path={route.path} element={elementRender} />
  }

  return (
    <BrowserRouter>
      <ReactRouterRoutes>
        {PrivateRoutes.map(renderRoutes)}
        <Route path="/auth" element={<ContainerAuth />} />
        <Route path="*" element={<Navigate to="/auth" replace />} />
      </ReactRouterRoutes>
    </BrowserRouter>
  )
}