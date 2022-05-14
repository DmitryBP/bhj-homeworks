let links = document.querySelectorAll('.has-tooltip')
links.forEach((link, index) => {
    let flag = false
    link.onclick = () => {
        let position = link.getBoundingClientRect()
        let dataPosition = link.getAttribute('data-position')
        let coordinateX = position.x
        let coordinateY = position.bottom

        if (!flag) {
            if(dataPosition == 'top'){
                coordinateY = position.top - 30
            } else
            if(dataPosition == 'right'){
                coordinateX = position.x + position.width
                coordinateY = position.top - 30
            } else
            if(dataPosition == 'left'){
                coordinateX = position.x - position.width
                coordinateY = position.top - 30
            } 
            
            link.insertAdjacentHTML('afterend', `
            <div class="tooltip" style="left: ${coordinateX}px; top: ${coordinateY}px; position: absolute">
            ${link.title}
            </div>
            `)
            flag = true
        }

        if (link.nextElementSibling.classList.contains('tooltip')) {
            link.nextElementSibling.classList.toggle('tooltip_active')
            }

        let activTips = document.querySelectorAll('.tooltip_active')
        activTips.forEach(activTip => {
            if(activTip !== links[index].nextElementSibling){
                activTip.classList.remove('tooltip_active')
            }
        });
        
        return false
    }
});
 
