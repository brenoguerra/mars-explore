import InitializeMapService from '../services/initialize-map-service.js'
import InitializeSpaceProbeService from '../services/initialize-space-probe-service.js'
import MoveSpaceProbeService from '../services/move-space-probe-service.js'

export default class QuestionController {
  _question
  map
  spaceProbe

  constructor(question) {
    this._question = question
  }

  async handle() {
    await this.questionSize()
  }

  async questionSize() {
    try {
      const answer = await this._question('What is map size (x and y)?\n')
      const [x, y] = answer.split(' ')
  
      const initializeMapService = new InitializeMapService()
      const { map: mapFromService, spaceProbe: spaceProbeFromService } = initializeMapService.execute({ x, y })
  
      this.map = mapFromService
      this.spaceProbe = spaceProbeFromService
      
      console.log(this.map.coordinates)
      this.questionInitialPosition();
    } catch (err) {
      console.error('Error', err)
    }
  }

  async questionInitialPosition() {
    try {
      const answer = await this._question('What is initial position (x, y and direction)?\n')
      const [x, y, direction] = answer.split(' ')
  
      const initializeSpaceProbeService = new InitializeSpaceProbeService(this.map)
      const { spaceProbe: spaceProbeFromService } = initializeSpaceProbeService.execute({ x, y, direction })
      this.spaceProbe = spaceProbeFromService
  
      console.log(`${this.map.getCoordinatesByIndex(this.spaceProbe.position)} ${this.spaceProbe.direction}`)
      this.questionMovementAction()
    } catch (err) {
      console.error('Error', err)
    }
  }

  async questionMovementAction() {
    try {
      const answer = await this._question('What is the movement action?\n')
      const actions = answer.split('')
  
      const moveSpaceProbeService = new MoveSpaceProbeService(this.map, this.spaceProbe)
      const { direction, coordinates } = moveSpaceProbeService.execute({ actions })
  
      console.log(`${coordinates[0]} ${coordinates[1]} ${direction}`)
    } catch (err) {
      console.error('Error', err)
    }
  }
}