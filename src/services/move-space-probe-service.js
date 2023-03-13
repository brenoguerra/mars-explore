import { SHORT_TAGS as directionShortTags } from '../utils/directions-enum.js'

export default class MoveSpaceProbeService {
  _map
  _spaceProbe

  constructor(map, spaceProbe) {
    this._map = map
    this._spaceProbe = spaceProbe
  }

  execute({ actions }) {
    actions?.map(action => {
      if (action.toUpperCase() === 'L') {
        if (this._spaceProbe.direction === directionShortTags.NORTH) {
          this._spaceProbe.direction = directionShortTags.WEST
        } else if (this._spaceProbe.direction === directionShortTags.WEST) {
          this._spaceProbe.direction = directionShortTags.SOUTH
        } else if (this._spaceProbe.direction === directionShortTags.SOUTH) {
          this._spaceProbe.direction = directionShortTags.EAST
        } else if (this._spaceProbe.direction === directionShortTags.EAST) {
          this._spaceProbe.direction = directionShortTags.NORTH
        }
      }

      if (action.toUpperCase() === 'R') {
        if (this._spaceProbe.direction === directionShortTags.NORTH) {
          this._spaceProbe.direction = directionShortTags.EAST
        } else if (this._spaceProbe.direction === directionShortTags.EAST) {
          this._spaceProbe.direction = directionShortTags.SOUTH
        } else if (this._spaceProbe.direction === directionShortTags.SOUTH) {
          this._spaceProbe.direction = directionShortTags.WEST
        } else if (this._spaceProbe.direction === directionShortTags.WEST) {
          this._spaceProbe.direction = directionShortTags.NORTH
        }
      }

      if (action.toUpperCase() === 'M') {
        const currentPosition = this._map._coordinates[this._spaceProbe.position]
        let newPositionIndex

        if (this._spaceProbe.direction === directionShortTags.NORTH) {
          newPositionIndex = this._map.getCoordinatesIndex(currentPosition[0], currentPosition[1] + 1)
        } else if (this._spaceProbe.direction === directionShortTags.EAST) {
          newPositionIndex = this._map.getCoordinatesIndex(currentPosition[0] + 1, currentPosition[1])
        } else if (this._spaceProbe.direction === directionShortTags.SOUTH) {
          newPositionIndex = this._map.getCoordinatesIndex(currentPosition[0], currentPosition[1] - 1)
        } else if (this._spaceProbe.direction === directionShortTags.WEST) {
          newPositionIndex = this._map.getCoordinatesIndex(currentPosition[0] - 1, currentPosition[1])
        }

        if (newPositionIndex !== -1) this._spaceProbe.position = newPositionIndex
      }
    })

    return {
      direction: this._spaceProbe.direction,
      coordinates: this._map.getCoordinatesByIndex(this._spaceProbe.position),
      coordinatesIndex: this._spaceProbe.position,
    }
  }
}