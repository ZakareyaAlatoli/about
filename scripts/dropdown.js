boxes = document.getElementsByClassName('dropdown-body');

for(let i=0; i<boxes.length; i++){
    boxes[i].addEventListener('transitionend', () => {
        if(boxes[i].style.opacity == '0'){
            boxes[i].style.setProperty('font-size', '0em');
        }
    });
    boxes[i].addEventListener('transitionstart', () => {
        if(boxes[i].style.opacity == '0'){
            boxes[i].style.setProperty('font-size', '1em');
        }
    });
}