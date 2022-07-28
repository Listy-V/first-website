var click=0;
function inc()
{
  click++;
  console.log(click);
  countdraw();
  if (click == 10)
  {
    touch.clearRect(0, 0, box.width, box.height);
    text()
  }
  if (click == 25)
  {
    touch.clearRect(0, 0, box.width, box.height);
    text2()
  }
  if (click == 50)
  {
    touch.clearRect(0, 0, box.width, box.height);
    text3()
  }
  if (click == 100)
  {
    touch.clearRect(0, 0, box.width, box.height);
    text4()
  }
  if (click == 150)
  {
    touch.clearRect(0, 0, box.width, box.height);
    text5()
  }
  if (click == 250)
  {
    touch.clearRect(0, 0, box.width, box.height);
    text6()
  }
  if (click == 10000)
  {
    touch.clearRect(0, 0, box.width, box.height);
    text7()
  }
}
var heart=document.getElementById("heart");
var box=document.getElementById("box");
var touch=box.getContext("2d");

function countdraw(){
  touch.clearRect(0, 0, box.width, box.height);
  touch.fillStyle='white';
  touch.font='36px Calibri';
  touch.fillText(click, 145, 65);
}

function text(){
  touch.fillStyle='white';
  touch.font='36px Calibri';
  touch.fillText("Ты солнышко", 55, 65);
}

function text2(){
  touch.fillStyle='white';
  touch.font='36px Calibri';
  touch.fillText("Ты молодец", 55, 65);
}
function text3(){
  touch.fillStyle='white';
  touch.font='36px Calibri';
  touch.fillText("Ты справишься", 55, 65);
}
function text4(){
  touch.fillStyle='white';
  touch.font='36px Calibri';
  touch.fillText("Я верю в тебя", 55, 65);
}
function text5(){
  touch.fillStyle='white';
  touch.font='36px Calibri';
  touch.fillText("Ты прекрасен", 55, 65);
}
function text6(){
  touch.fillStyle='white';
  touch.font='36px Calibri';
  touch.fillText("Ты лучший", 55, 65);
}
function text7(){
  touch.fillStyle='white';
  touch.font='36px Calibri';
  touch.fillText("Капец, чел", 55, 65);
}
countdraw();
