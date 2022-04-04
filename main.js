// window.onscroll = function() { alert("Scrolled"); };
const img1 = document.querySelector('#img-1');
const box1 = document.querySelector('#box-1');
const text1 = document.querySelector('#text-1');
const img2 = document.querySelector('#img-2');
const box2 = document.querySelector('#box-2');
const text2 = document.querySelector('#text-2');
const img3 = document.querySelector('#img-3');
const box3 = document.querySelector('#box-3');
const text3 = document.querySelector('#text-3');
document.addEventListener('scroll', function(e) {
    var scroll = window.pageYOffset || document.documentElement.scrollTop ||
            document.body.scrollTop || 0;
    // moveText(scroll, img1,text1,box1, 0.54, 0.01);
    // moveText(scroll, img2,text2,box2, 0.64, 0.43);
    // moveText(scroll, img3,text3,box3, 0.74, 0.53);
    moveItems(scroll, img2,text2,box2);


    let width =  Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    // console.log(width, '  width')
    if (scroll < width * 0.54) { // 140
                // console.log(scroll, ' scroll')
       
        let opacity = scroll / (width*1.34); //350
        // console.log(opacity, ' opacity');
        img1.style.opacity = opacity + 0.6;
        text1.style.top = opacity * (width*1.53)+'px';  // 400
        box1.style.marginBottom = (opacity *(width*0.61))+'px'; // 160
    }
    
});
function moveItems(scroll, img, text, box){
    let width =  Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    let startBoxY = width * 0.43;
    let endBoxY = width * 0.64;
    console.log(startBoxY, ' start y ')
    console.log(endBoxY, ' end y')
    let opacity = scroll / (width*1.34); //350
    let boxHeight = window.getComputedStyle(img, null).getPropertyValue("height").replace('px','');
    let oneScroll = boxHeight / (endBoxY-startBoxY);
    let oneScrollOpacity = 1.2/(endBoxY-startBoxY);
    console.log(oneScrollOpacity, ' scroll one') 
    if (scroll < width * 0.64 && scroll > width * 0.43) { // 140
        // console.log(scroll, ' scroll')
        // console.log(opacity, ' opacity');
        // console.log(boxHeight, '  -height');
        img.style.opacity = (scroll - startBoxY) * oneScrollOpacity;
        text.style.top = (scroll - startBoxY) * oneScroll+'px';  // 400
        box.style.marginBottom = (opacity *(width*0.61))+'px'; // 160
    }
}
function moveText(scroll,img,text,box,boxHeight, boxPosition){
    let width =  Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    // console.log(width, '  width')
    if (scroll < width * boxHeight && scroll > width * boxPosition) { // 140
                // console.log(scroll, ' scroll')
       
        let opacity = scroll / (width*1.34); //350
        // console.log(opacity, ' opacity');
        img.style.opacity = opacity + 0.6;
        text.style.top = opacity * (width*1.53)+'px';  // 400
        box.style.marginBottom = (opacity *(width*0.51))+'px'; // 160
    }else{
        // img.style.opacity = 0.2;
        // text.style.top = 0;  // 400
        // text.style.top = 0;  // 400

        // box.style.marginBottom = 0; // 160
    }
}