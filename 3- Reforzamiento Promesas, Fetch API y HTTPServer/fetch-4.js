let img = document.querySelector('img');
fetch("superman.png")
.then( resp => resp.blob())
.then(respBlob =>{
    var imgPath = URL.createObjectURL(respBlob);
    img.src = imgPath;
})