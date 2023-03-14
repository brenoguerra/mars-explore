import { createInterface } from 'node:readline';
import QuestionController from './controllers/question-controller.js';

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
})

readline.prompt()
console.log('What is map size (x and y)?')
const questionController = new QuestionController()

readline.on('line', (input) => {
  questionController.handle(input)
});