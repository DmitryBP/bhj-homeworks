let links = document.querySelectorAll('.has-tooltip')
links.forEach((link, index) => {
    let flag = false
    link.onclick = () => {
        let position = link.getBoundingClientRect()
        let dataPosition = link.getAttribute('data-position')
 
        if (!flag) {
            if(dataPosition == 'bottom'){
                link.insertAdjacentHTML('afterend', `
                <div class="tooltip" style="left: ${position.x}px; top: ${position.bottom}px; position: absolute">
                ${link.title}
                </div>
                `)
            }
            if(dataPosition == 'top'){
                link.insertAdjacentHTML('afterend', `
                <div class="tooltip" style="left: ${position.x}px; top: ${position.top-30}px; position: absolute">
                ${link.title}
                </div>
                `)
            }
            if(dataPosition == 'right'){
                link.insertAdjacentHTML('afterend', `
                <div class="tooltip" style="left: ${position.x + position.width}px; top: ${position.top-30}px; position: absolute">
                ${link.title}
                </div>
                `)
            }
            if(dataPosition == 'left'){
                link.insertAdjacentHTML('afterend', `
                <div class="tooltip" style="left: ${position.x - position.width}px; top: ${position.top-30}px; position: absolute">
                ${link.title}
                </div>
                `)
            }
            flag = true
        }
 
        link.nextElementSibling.classList.toggle('tooltip_active')
 
        let activTips = document.querySelectorAll('.tooltip_active')
        activTips.forEach(activTip => {
            if(activTip !== links[index].nextElementSibling){
                activTip.classList.remove('tooltip_active')
            }
        });
        
        return false
    }
});
 
