let enlarged = false
style = document.getElementById('jumbotron').style

function resizeJumbotron() { 
    if(enlarged){
        enlarged = false
        style.setProperty('width', '50%')
        style.setProperty('height', '50%')
        style.setProperty('background-color', 'black')
        style.setProperty('border-radius', '50%')
    }else{
        enlarged = true
        style.setProperty('width', '90%')
        style.setProperty('height', '60%')
        style.setProperty('background-color', '#777777')
        style.setProperty('border-radius', '10%')
    }
}

