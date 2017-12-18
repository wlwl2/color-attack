var body = document.querySelector('body')
var canvas = document.createElement('canvas')
canvas.height = 512
canvas.width = 512
var playerStatus = document.createElement('div')
var playerHealth = document.createElement('div')
var playerEnergy = document.createElement('div')
body.appendChild(canvas)
body.appendChild(playerStatus)
body.appendChild(playerHealth)
body.appendChild(playerEnergy)

playerStatus.textContent = 'It\'s green\'s turn.'

function state () {

}

function setStatus (playerStatus, playerHealth, playerEnergy) {

}

var ctx = canvas.getContext('2d')
function draw (pos, color) {
  ctx.lineWidth = 5
  ctx.strokeStyle = 'yellow'
  ctx.fillStyle = 'green'
  ctx.fillRect(pos[0][0] * 32, pos[0][1] * 32, 32, 32)
  if (color === 'green') ctx.strokeRect(pos[0][0] * 32, pos[0][1] * 32, 32, 32)
  ctx.fillStyle = 'red'
  ctx.fillRect(pos[1][0] * 32, pos[1][1] * 32, 32, 32)
  if (color === 'red') ctx.strokeRect(pos[1][0] * 32, pos[1][1] * 32, 32, 32)
}
var pos = [[1, 1], [14, 14]]
draw(pos, 'green')
const grid = []
for (let y = 0; y < 16; y++) {
  let row = []
  for (let x = 0; x < 16; x++) {
    row.push(0)
  }
  grid.push(row)
}

var playersTurn = 'red'
var turn = 2
playerStatus.style.color = 'green'

function step (x, y) {
  ctx.clearRect(0, 0, canvas.height, canvas.width)
  var originX = pos[0]
  var originY = pos[1]
  if (playersTurn === 'red') {
    if (
      Math.abs(originX[0] - x) > 2
      || Math.abs(originX[1] - y) > 2
      || (x === pos[0][0] && y === pos[0][1])
    ) {
      pos[0] = originX
      draw(pos, 'green')
    } else {
      pos[0] = [x, y]
      playersTurn = 'green'
      playerStatus.textContent = 'green moved to position x: ' + x + ' y: ' + y + ' It\'s  red\'s turn.'
      playerStatus.style.color = 'green'
      draw(pos, 'red')
    }
  } else {
    if (
      Math.abs(originY[0] - x) > 2
      || Math.abs(originY[1] - y) > 2
      || (x === pos[1][0] && y === pos[1][1])
    ) {
      pos[1] = originY
      draw(pos, 'red')
    } else {
      pos[1] = [x, y]
      playersTurn = 'red'
      playerStatus.textContent = 'red moved to position x: ' + x + ' y: ' + y + ' It\'s  green\'s turn.'
      playerStatus.style.color = 'red'
      draw(pos, 'green')
    }
  }
}
window.addEventListener('click', function (event) {
  step(Math.floor(event.pageX/512 * 16), Math.floor(event.pageY/512 * 16))
}, false)
