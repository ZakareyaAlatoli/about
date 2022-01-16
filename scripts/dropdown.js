let expanded = false;
let dict = {}

function handleDrop(body, text){
    let expanded = dict.body;
    if(expanded == null){
        dict.body = false;
        expanded = false;
    }

    _body = document.getElementById(body);
    _text = document.getElementById(text);

    function fadeIn() {
        _text.style.display = 'block';
        _text.style.opacity = '1';
        _body.removeEventListener('transitionend', fadeIn);
        dict.body = true;
    }
    function fadeOut() {
        _text.style.display = 'none';
        _body.removeEventListener('transitionend', fadeOut);
        dict.body = false;
    }
    if(!expanded) {
        _body.addEventListener('transitionend', fadeIn);
        _body.style.height = '200px';
    } else {
        _text.style.opacity = '0';
        _body.addEventListener('transitionend', fadeOut);
        _body.style.height = '0px';
    }
}