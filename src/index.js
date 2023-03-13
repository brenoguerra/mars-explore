import { createInterface } from 'node:readline'
import util from 'node:util'
import Map from './Map.js'

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
})
const question = util.promisify(readline.question).bind(readline)

let map;

function initQuests() {
  questionSize()
}

async function questionSize() {
  try {
    const answer = await question('What is map size (x and y)?\n')
    const [x, y] = answer.split(' ')
    map = new Map(parseInt(y), parseFloat(x))
    console.log(map.coordinates)

    questionInitialPosition();
  } catch (err) {
    console.error('Invalid answer', err)
  }
}

async function questionInitialPosition() {
  try {
    const answer = await question('What is initial position (x, y and direction)?\n')
    const [x, y, direction] = answer.split(' ')

    const positionIndex = map.getPositionByCoordinates(x, y)
    if (positionIndex === -1) throw new Error('Invalid position')
    
    map.position = positionIndex
    map.direction = direction

    console.log(map.position)
    console.log(map.direction)

    questionMovementAction()
  } catch (err) {
    console.error('Invalid answer', err)
  }
}

async function questionMovementAction() {
  try {
    const answer = await question('What is the movement action?\n')
    const actions = answer.split('')

    actions?.map(action => {
      console.log({ action })
      if (action.toUpperCase() === 'L') map.rotateLeftPosition()
      if (action.toUpperCase() === 'R') map.rotateRightPosition()
      if (action.toUpperCase() === 'M') map.walk()
    })

    console.log(map.position)
    console.log(map.direction)
  } catch (err) {
    console.error('Invalid answer', err)
  }
}

initQuests()