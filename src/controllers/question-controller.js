import InitializeMapService from '../services/initialize-map-service.js'
import InitializeSpaceProbeService from '../services/initialize-space-probe-service.js'
import MoveSpaceProbeService from '../services/move-space-probe-service.js'
import { TAGS_ICON as directionTagsIcon } from '../utils/directions-enum.js'

export default class QuestionController {
  map
  spaceProbe
  steps = {
    initializedMap: false,
    position: false,
    movements: false,
  }

  async handle(input) {
    try {
      if (!this.steps.initializedMap) {
        const [x, y] = input.split(' ')
        if (!Number(x) || !Number(y)) return console.log('Invalid number')
  
        const initializeMapService = new InitializeMapService()
        const { map: mapFromService, spaceProbe: spaceProbeFromService } = initializeMapService.execute({ x, y })
        this.map = mapFromService
        this.spaceProbe = spaceProbeFromService
  
        this.steps.initializedMap = true
        console.log('Insert the initial position')
        return;
      }
      
      if (!this.steps.position) {
        const [x, y, direction] = input.split(' ')
        if (!Number(x) || !Number(y)) return console.log('Invalid number')

        const findDirection = directionTagsIcon[direction.toUpperCase()]
        if (!findDirection) return console.log('Invalid direction')

       const positionIndex = this.map.getCoordinatesIndex(x, y)
        if (positionIndex === -1) return console.log('Invalid position')
      
        const initializeSpaceProbeService = new InitializeSpaceProbeService(this.map)
        const { spaceProbe: spaceProbeFromService } = initializeSpaceProbeService.execute({ positionIndex, direction })
        this.spaceProbe = spaceProbeFromService
  
        console.log(`${String(this.map.getCoordinatesByIndex(this.spaceProbe.position)).replace(',', ' ')} ${this.spaceProbe.direction}`)
        console.log('Insert the movements')
        this.steps.position = true
        return;
      }
  
      if (!this.steps.movements) {
        this.steps.movements = true
        const actions = input.split('')
  
        const moveSpaceProbeService = new MoveSpaceProbeService(this.map, this.spaceProbe)
        const { direction, coordinates } = moveSpaceProbeService.execute({ actions })
        console.log(`${coordinates[0]} ${coordinates[1]} ${direction}`)
  
        this.steps.position = false
        this.steps.movements = false
        console.log('\nInsert the initial position')
        return;
      }
    } catch (error) {
      console.error(error.message)
    }
  }
}