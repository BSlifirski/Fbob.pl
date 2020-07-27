

var i = 1;                  //  set your counter to 1

function myLoop() {         //  create a loop function
  setTimeout(function() {   //  call a 3s setTimeout when the loop is called
    
var a1 = "Woda dziwki i lasery ";
var b1 = "Niech zyje zbrodniczy rezim Majora Jabota";
var c1 = "Resistanse is futile";
var d1 = "Piwo jest dobre jakie jest";
var e1 = "Zujcu jestesmy w domu";
var f1 = "Dyszka";
var g1 = "Bob zrobil to pierwszy";
var h1 = "W pszyszlym roku drozej o 100zł ";
var i1 = "Od specjala puchna jaja";
var j1 = "Co krecisz?"

var txt_contener = document.getElementById("head-text");
let wynik= Math.floor((Math.random() * 10) + 1);



 if (wynik === 1){
    txt_contener.innerHTML= a1;

 }
 if (wynik === 2){
    txt_contener.innerHTML= b1;
 }
 if (wynik === 3){
    txt_contener.innerHTML= c1;
}
if (wynik === 4){
    txt_contener.innerHTML= d1;
}
if (wynik === 5){
    txt_contener.innerHTML= e1;
}
if (wynik === 6){
    txt_contener.innerHTML= f1;
}
if (wynik === 7){;
    txt_contener.innerHTML= g1;
}
if (wynik === 8){
    txt_contener.innerHTML= h1;
}
if (wynik === 9){
    txt_contener.innerHTML= i1;
}
if (wynik === 10){
    txt_contener.innerHTML= j1;
};                           //  your code here
    i++;                    //  increment the counter
    if (i > 1) {           //  if the counter < 10, call the loop function
      myLoop();             //  ..  again which will trigger another 
    }                       //  ..  setTimeout()
  }, 10000)
}

myLoop(); 

document.addEventListener('DOMContentLoaded', function(){ 
    
}, false);