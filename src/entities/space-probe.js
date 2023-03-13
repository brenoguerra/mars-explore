export default class SpaceProbe {
  _direction = 'N';
  _position = 0

  constructor(direction, position) {
    this._direction = direction.toUpperCase()
    this._position = position
  }

  get direction() {
    return this._direction
  }

  set direction(direction) {
    this._direction = direction.toUpperCase()
  }

  set position(position) {
    this._position = position
  }

  get position() {
    return this._position
  }
}