export default class Map {
  _coordinates = [];
  _direction = 'N';
  _position = 0

  constructor(width /** equal X */, height /** equal Y */) {
    let i = 0;
    for (let x = width; x >= 0; x--) {
      for (let y = height; y >= 0; y--) {
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
}