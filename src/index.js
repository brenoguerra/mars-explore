import { createInterface } from 'node:readline'
import util from 'node:util'
import QuestionController from './controllers/question-controller.js'

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
})
const question = util.promisify(readline.question).bind(readline)

function initQuests() {
  const questionController = new QuestionController(question)
  questionController.handle()
}

initQuests()