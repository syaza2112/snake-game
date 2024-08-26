import { onSnake, expandSnake } from './snake.js'
import { randomGridPositian } from './grid.js
let food = getRandomFoodPosition()
const EXPANSION_RATE = 5
export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE)
    food = getRandomFoodPosition()
  }
}
export function draw(gameBoard) {
  const foodElement = document.createElement('div')
  foodElement.style.gridRowStart = food.y
  foodElement.style.gridColumnStart = food.x
  foodElement.classList.add('food')
  gameBoard.appendChild(foodElemen)
}
function getRandomFoodPosition () {
  let newFoodPosition
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGrPosition()
  }
  return newFoodPosition
}
