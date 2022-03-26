let kill = document.getElementById('dead')
let miss = document.getElementById('lost')

// hole1.onclick = () => {
//   if(hole1.className.includes('hole_has-mole')){
//   kill.textContent++
//   } else {
//     miss.textContent++
//   }
// }

  getHole = index => document.getElementById(`hole${index}`)
  for (let index = 1; index <= 9; index++) {
    getHole( index ).onclick = () => {
    if(getHole( index ).className.includes('hole_has-mole')){
      kill.textContent++
    } else {
      miss.textContent++
      }
    }
  } 


// console.log(getHole(1).className) // Так работает 

// for (let index = 0; index < 9; index++) {
//   // console.log(getHole(index).className) // evaluating 'getHole(index).className')???
// }
  