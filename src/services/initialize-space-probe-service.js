import SpaceProbe from '../entities/space-probe.js'
import { TAGS_ICON as directionTagsIcon } from '../utils/directions-enum.js'

export default class InitializeSpaceProbeService {
  _map

  constructor(map) {
    this._map = map
  }

  execute({ x, y, direction }) {
    const findDirection = directionTagsIcon[direction.toUpperCase()]
    if (!findDirection) console.log('Invalid direction')

    const positionIndex = this._map.getCoordinatesIndex(x, y)
    if (positionIndex === -1) return console.log('Invalid position')
    
    const spaceProbe = new SpaceProbe(direction, positionIndex)

    return {
      spaceProbe
    }
  }
}