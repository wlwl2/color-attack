var body = document.querySelector('body')
var canvas = document.createElement('canvas')
canvas.height = 512
canvas.width = 512
var statusText = document.createElement('div')
body.appendChild(canvas)
body.appendChild(statusText)
var ctx = canvas.getContext('2d')
function draw (pos) {
  ctx.fillStyle = 'green'
  ctx.fillRect(pos[0][0] * 32, pos[0][1] * 32, 32, 32)
  ctx.fillStyle = 'red'
  ctx.fillRect(pos[1][0] * 32, pos[1][1] * 32, 32, 32)
}
var pos = [[1, 1], [14, 14]]
draw(pos)
const grid = []
for (let y = 0; y < 16; y++) {
  let row = []
  for (let x = 0; x < 16; x++) {
    row.push(0)
  }
  grid.push(row)
}

function step (x, y) {
  ctx.clearRect(0, 0, canvas.height, canvas.width)
  var newPos = [[1, 1], [x, y]]
  draw(newPos)
  statusText.textContent = 'player moved to position x: ' + x + ' y: ' + y
}
window.addEventListener('click', function (event) {
  step(Math.floor(event.pageX/512 * 16), Math.floor(event.pageY/512 * 16))
}, false)
