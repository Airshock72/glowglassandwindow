import { Route, Routes } from 'react-router-dom'
import { RouteType } from 'api/core'
import PrivateLayout from 'src/layouts/PrivateLayout.tsx'

const routesFromContext = (): Array<RouteType> => {
  const moduleRoutes: Array<RouteType> = []
  const routeModules = import.meta.glob('./**/routes.ts', { eager: true }) as Record<string, { default: Array<RouteType> }>
  Object.values(routeModules).forEach((module) => {
    if (Array.isArray(module.default)) {
      moduleRoutes.push(...module.default)
    }
  })
  return moduleRoutes
}

export const routes = routesFromContext()

const App = () => {
  return (
    <Routes>
      <Route element={<PrivateLayout />}>
        {routes.map((el, index) => (
          <Route
            key={index}
            path={el.path}
            element={<el.element />}
          />
        ))}
      </Route>
    </Routes>
  )
}

export default App