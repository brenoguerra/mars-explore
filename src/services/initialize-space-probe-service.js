import SpaceProbe from '../entities/space-probe.js'
import { TAGS_ICON as directionTagsIcon } from '../utils/directions-enum.js'

export default class InitializeSpaceProbeService {
  _map

  constructor(map) {
    this._map = map
  }

  execute({ x, y, direction }) {
    const findDirection = directionTagsIcon[direction.toUpperCase()]
    if (!findDirection) throw new Error('Invalid direction')

    const positionIndex = this._map.getCoordinatesIndex(x, y)
    if (positionIndex === -1) throw new Error('Invalid position')
    
    const spaceProbe = new SpaceProbe(direction, positionIndex)

    return {
      spaceProbe
    }
  }
}