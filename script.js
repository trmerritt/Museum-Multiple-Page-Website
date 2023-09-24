let slideImages = new Array();
slideImages[0] = new Image();
slideImages[0].src = "https://cdn.pixabay.com/photo/2017/04/05/01/10/natural-history-museum-2203648_1280.jpg";
slideImages[1] = new Image();
slideImages[1].src = "https://cdn.pixabay.com/photo/2014/07/07/01/54/wollaton-hall-385976_1280.jpg";
slideImages[2] = new Image();
slideImages[2].src = "https://cdn.pixabay.com/photo/2021/08/20/18/33/british-museum-6561029_1280.jpg";


let step=0;

function slideShow(){

   document.getElementById('slide').src = slideImages[step].src;

   if (step<2){

      step++;

   } else {

      step=0;

   }

   setTimeout(slideShow,3000);

}

slideShow();