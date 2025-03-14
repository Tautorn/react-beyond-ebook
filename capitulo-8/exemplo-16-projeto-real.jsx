// Arquivo único juntando todas as rotas do sistema
import { finalResultRoutes } from './FinalResult'
import { technologyTestRoutes } from './TechnologyTest'
import { mainRoutes } from './Main'
import { notFoundRoutes } from './NotFound'
import { reportRoutes } from './Report'

export const routes = [
  ...mainRoutes,
  ...technologyTestRoutes,
  ...finalResultRoutes,
  ...notFoundRoutes,
  ...reportRoutes
]