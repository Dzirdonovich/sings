let quadratItem = document.querySelectorAll('.quadrat__item');
let body = document.body;


let numberNull = 8;
let clickCountTopp = 1;
let clickCountLeft = 1;

let arrTop = document.createElement("div");
    arrTop.innerHTML = "&#8593";
    arrTop.classList.add("quadrat__top")


let arrLeft = document.createElement("div");
    arrLeft.innerHTML = "&#8592";
    arrLeft.classList.add("quadrat__left")


let arrBottom = document.createElement("div");
    arrBottom.innerHTML = "&#8595";
    arrBottom.classList.add("quadrat__bottom")


let arrRight = document.createElement("div");
    arrRight.innerHTML = "&#8594";
    arrRight.classList.add("quadrat__right")








function chek(topArr, leftArr, bottomArr, rightArr, pos) {

  let quadratTop = document.querySelector('.quadrat__top')
  let quadratBottom = document.querySelector('.quadrat__bottom')
  let quadratRight = document.querySelector('.quadrat__right')
  let quadratLeft = document.querySelector('.quadrat__left')
  console.log(quadratBottom);
  for (var i = 0; i < topArr.length; i++) {
    if((topArr[i] != pos) && (quadratTop == null)){
        quadratItem[8].appendChild(arrTop);
      }
    if((topArr[i] == pos) && (quadratTop != null)){
      quadratItem[8].removeChild(arrTop)
    }
  }
  for (var i = 0; i < bottomArr.length; i++) {

    if ((bottomArr[i] != pos) &&(quadratBottom == null)){
      quadratItem[8].appendChild(arrBottom)
    }
    if ((bottomArr[i] == pos)&&(quadratBottom != null)){
      quadratItem[8].removeChild(arrBottom)
    }

  }
  for (var i = 0; i < leftArr.length; i++) {
    if ((leftArr[i] != pos) && (quadratLeft == null)){
      quadratItem[8].appendChild(arrLeft)
    }
      if((leftArr[i] == pos) && (quadratLeft != null)) {
        quadratItem[8].removeChild(arrLeft)
      }
    }
  for (var i = 0; i < rightArr.length; i++) {
    if ((rightArr[i] != pos) && (quadratRight ==null)){
      quadratItem[8].appendChild(arrRight)
    if((rightArr[i] == pos) && (quadratRight != null)) {
        quadratItem[8].removeChild(arrRight)
      }

   }
  }
}


  topArr = [0,1,2];
  leftArr = [0,3,6];
  bottomArr = [6,7,8];
  rightArr = [2,5,8];

  chek(topArr, leftArr, bottomArr, rightArr, 8)





window.onload = function(){
  let qudratHeigth = quadratItem[8].style.height.substring(3, -3);
  let quaratHeightNumber = Number(qudratHeigth)+1.5;
  let quaratHeigthString = String(quaratHeightNumber);
  let curentHeight = ""
  let qudratWidth = quadratItem[8].style.width.substring(3, -3);
  let quaratWidthNumber = Number(qudratWidth)+1.5;
  let curentWidth = 0


arrTop.addEventListener('click', ()=> {

  let clickPos = numberNull - 3;
  curentHeight += quaratHeigthString

  chek(topArr, leftArr, bottomArr, rightArr, clickPos);

  quadratItem[clickPos].style.transform = "translate(,"++"px)";
  quadratItem[8].style.transform = "translate(-"+String(quaratHeightNumber*clickCountTopp)+"px)";
  numberNull = clickPos;

  clickCountTopp++;

  return numberNull;
})

body.addEventListener('click', ()=>{
  console.log(numberNull, clickCountTopp);
})




console.log(numberNull);

arrLeft.addEventListener('click', ()=> {
  let qudratHeigth = quadratItem[8].style.height.substring(3, -3);
  let quaratHeightNumber = Number(qudratHeigth)+1.5;

  let clickPos = numberNull - 1;

  chek(topArr, leftArr, bottomArr, rightArr, clickPos);



  quadratItem[clickPos].style.transform = "translateX("+String(quaratHeightNumber)+"px)";
  quadratItem[8].style.transform = "translateX(-"+String(quaratHeightNumber*clickCountLeft)+"px)";
  numberNull = clickPos;

  clickCountLeft++;

  console.log(clickCountLeft);
})
}
