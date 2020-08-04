let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/business_photo.png') {
      myImage.setAttribute('src','images/business_photo_monochrome.png');
    } else {
      myImage.setAttribute('src','images/business_photo.png');
    }
}