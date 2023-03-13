export default class Map {
  _coordinates = [];

  constructor(width /** equal X */, height /** equal Y */) {
    let i = 0;
    for (let x = width; x >= 0; x--) {
      for (let y = 0; y < height + 1; y++) {
        this._coordinates[i++] = [x,y];
      }
    }
  }

  get coordinates() {
    return this._coordinates
  }

  getCoordinatesIndex(x, y) {
    return this._coordinates.findIndex(c => c[0] === parseInt(x) && c[1] === parseInt(y))
  }

  getCoordinatesByIndex(i) {
    return this._coordinates[i]
  }
}