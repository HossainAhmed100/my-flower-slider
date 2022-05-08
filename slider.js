const images = [
    'images/img0.jpg',
    'images/img1.jpg',
    'images/img2.jpg',
    'images/img3.jpg',
    'images/img4.jpg',
    'images/img6.jpg',
    'images/img5.jpg',
    'images/img7.jpg',
    'images/img8.jpg',
    'images/img9.jpg'
]

let imgIndex = 0;
const imgsrc = document.getElementById("imgsrc");
setInterval(() => {
    
    if(imgIndex >= images.length){
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex++];
    imgsrc.setAttribute('src', imgUrl);
    console.log(imgUrl)    
}, 2000);