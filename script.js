var canvas = document.createElement('canvas')
canvas.height = 512
canvas.width = 512
document.querySelector('body').appendChild(canvas)
var ctx = canvas.getContext('2d')
ctx.fillStyle = 'green'
ctx.fillRect(32, 32, 32, 32)
const grid = []
for (let y = 0; y < 16; y++) {
  let row = []
  for (let x = 0; x < 16; x++) {
    row.push(0)
  }
  grid.push(row)
}
console.log(grid)
function step () {

}
window.addEventListener('click', function (event) {
  ctx.clearRect(0, 0, canvas.height, canvas.width)
  ctx.fillRect(event.pageX - 16, event.pageY - 16, 32, 32)
}, false)
