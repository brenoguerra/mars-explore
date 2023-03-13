import { SHORT_TAGS as directionShortTags } from './directions.js';

export default class Map {
  _coordinates = [];
  _direction = 'N';
  _position = 0

  constructor(width /** equal X */, height /** equal Y */) {
    let i = 0;
    for (let x = width; x >= 0; x--) {
      for (let y = 0; y < height + 1; y++) {
        this._coordinates[i++] = [x,y];
      }
    }

    this._position = this._coordinates.findIndex(c => c[0] === 0 && c[1] === 0)
  }

  get coordinates() {
    return this._coordinates
  }

  get direction() {
    return this._direction
  }

  set direction(direction) {
    this._direction = direction.toUpperCase()
  }

  set position(index) {
    this._position = index
  }

  get position() {
    return this._position
  }

  getPositionByCoordinates(x, y) {
    return this._position = this._coordinates.findIndex(c => c[0] === parseInt(x) && c[1] === parseInt(y))
  }

  getPositionByIndex(i) {
    return this._coordinates[i]
  }

  rotateLeftPosition() {
    if (this._direction === directionShortTags.NORTH) {
      this.direction = directionShortTags.WEST
    } else if (this._direction === directionShortTags.WEST) {
      this.direction = directionShortTags.SOUTH
    } else if (this._direction === directionShortTags.SOUTH) {
      this.direction = directionShortTags.EAST
    } else if (this._direction === directionShortTags.EAST) {
      this.direction = directionShortTags.NORTH
    }
  }

  rotateRightPosition() {
    if (this._direction === directionShortTags.NORTH) {
      this.direction = directionShortTags.EAST
    } else if (this._direction === directionShortTags.EAST) {
      this.direction = directionShortTags.SOUTH
    } else if (this._direction === directionShortTags.SOUTH) {
      this.direction = directionShortTags.WEST
    } else if (this._direction === directionShortTags.WEST) {
      this.direction = directionShortTags.NORTH
    }
  }

  walk() {
    const currentPosition = this._coordinates[this.position]
    let newPositionIndex

    if (this._direction === directionShortTags.NORTH) {
      newPositionIndex = this.getPositionByCoordinates(currentPosition[0], currentPosition[1] + 1)
    } else if (this._direction === directionShortTags.EAST) {
      newPositionIndex = this.getPositionByCoordinates(currentPosition[0] + 1, currentPosition[1])
    } else if (this._direction === directionShortTags.SOUTH) {
      newPositionIndex = this.getPositionByCoordinates(currentPosition[0], currentPosition[1] - 1)
    } else if (this._direction === directionShortTags.WEST) {
      newPositionIndex = this.getPositionByCoordinates(currentPosition[0] - 1, currentPosition[1])
    }

    if (newPositionIndex !== -1) this.position = newPositionIndex
  }
}