var lesKey = document.querySelectorAll(".key");
var audio = document.querySelectorAll("audio");
document.addEventListener("keydown", function(event) {

  switch (event.keyCode) {

 

case 65 :

 
      audio[0].play();
      lesKey[0].classList.add("playing");


 
break;
case 83 :

 
      audio[1].play();
      lesKey[1].classList.add("playing")

 
break;
case 68 :

 
      audio[2].play();
      lesKey[2].classList.add("playing")

 
break;
case 70 :

 
      audio[3].play();
      lesKey[3].classList.add("playing")

 
break;
case 71 :

 
      audio[4].play();
      lesKey[4].classList.add("playing")

 
break;
case 72 :

 
      audio[5].play();
      lesKey[5].classList.add("playing")

 
break;
case 74 :

 
      audio[6].play();
      lesKey[6].classList.add("playing")

 
break;
case 75 :

 
      audio[7].play();
      lesKey[7].classList.add("playing")

 
break;
case 76 :

 
      audio[8].play();
      lesKey[8].classList.add("playing")

 
break;
  }
});
document.addEventListener('transitionend', () => {
  for (i = 0; i < lesKey.length; ++i) {
  lesKey[i].classList.remove("playing");
};
});
