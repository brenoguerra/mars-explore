import SpaceProbe from '../entities/space-probe.js'

export default class InitializeSpaceProbeService {
  _map

  constructor(map) {
    this._map = map
  }

  execute({ positionIndex, direction }) {
    const spaceProbe = new SpaceProbe(direction, positionIndex)

    return {
      spaceProbe
    }
  }
}