import Map from '../entities/map.js'
import SpaceProbe from '../entities/space-probe.js'
import { SHORT_TAGS as directionShortTags } from '../utils/directions-enum.js'

export default class InitializeMapService {
  constructor() {}

  execute({ x, y }) {
    const map = new Map(parseInt(x), parseFloat(y))
    const positionIndex = map.getCoordinatesIndex(0, 0)
    const spaceProbe = new SpaceProbe(directionShortTags.NORTH, positionIndex)

    return {
      map,
      spaceProbe,
    }
  }
}