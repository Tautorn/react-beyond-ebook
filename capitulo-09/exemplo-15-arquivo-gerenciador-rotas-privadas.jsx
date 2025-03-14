import Region from '../Containers/Region'
import World from '../Containers/World'
import Campaign from '../Containers/Campaign'
import RegionTemplate from '../Templates/Region'
import WorldTemplate from '../Templates/World'

export const PrivateRoutes = [
  {
    path: '/',
    element: World,
    template: WorldTemplate,
  },
  {
    path: '/world',
    element: World,
    template: WorldTemplate,
  },
  {
    path: '/region/:region',
    element: Region,
    template: RegionTemplate,
  },
  {
    path: '/campaign',
    element: Campaign,
  },
]
