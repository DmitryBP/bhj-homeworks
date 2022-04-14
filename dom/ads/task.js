let ads = Array.from(document.querySelectorAll('.rotator__case'))
let i = 0


console.log(ads[0].dataset)

let timerId = setTimeout(function speedSwitch() {
  
  if (i < ads.length-1) {
    ads[i].classList.remove('rotator__case_active')
    ads[i+1].classList.add('rotator__case_active')
    ads[i+1].style.color = ads[i+1].dataset.color 
    i++
  } else {
    ads[i].classList.remove('rotator__case_active')
    i = 0
    ads[i].classList.add('rotator__case_active')
  }
  let speed = ads[i].dataset.speed 
  timerId = setTimeout(speedSwitch, speed)
}, 100)

