

var i = 1;                  //  set your counter to 1

function myLoop() {         //  create a loop function
  setTimeout(function() {   //  call a 3s setTimeout when the loop is called
    
/*var a1 = "Wóda dziwki i lasery ";
var b1 = "Niech żyje zbrodniczy reżim Majora Jabota";
var c1 = "Resistanse is futile";
var d1 = "Piwo jest dobre jakie jest";
var e1 = "Żujcu jestesmy w domu";
var f1 = "Dyszka";
var g1 = "Bob zrobil to pierwszy";
var h1 = "W przyszłym roku drożej o 100zł ";
var i1 = "Od specjala puchną jaja";
var j1 = "Co kręcisz?"*/

var a1 = '<div id="Anime_txt_parent"> Wóda dziwki i lasery <div id="Anime_txt_border"></div></div>';
var b1 = '<div id="Anime_txt_parent"> Niech żyje zbrodniczy reżim Majora Jabota</div></div>';
var c1 = '<div id="Anime_txt_parent"> Resistanse is futile <div id="Anime_txt_border"></div></div>';
var d1 = '<div id="Anime_txt_parent"> Piwo jest dobre jakie jest <div id="Anime_txt_border"></div></div>';
var e1 = '<div id="Anime_txt_parent"> Żujcu jestesmy w domu <div id="Anime_txt_border"></div></div>';
var f1 = '<div id="Anime_txt_parent"> Bob zrobil to pierwszy <div id="Anime_txt_border"></div></div>';
var g1 = '<div id="Anime_txt_parent"> Dyszka <div id="Anime_txt_border"></div></div>';
var h1 = '<div id="Anime_txt_parent"> W przyszłym roku drożej o 100zł <div id="Anime_txt_border"></div></div>';
var i1 = '<div id="Anime_txt_parent"> Od specjala puchną jaja <div id="Anime_txt_border"></div></div>';
var j1 = '<div id="Anime_txt_parent"> Co kręcisz? <div id="Anime_txt_border"></div></div>';

var txt_contener = document.getElementById("Anime_txt_parent");
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
  }, 15000)
}

myLoop(); 

document.addEventListener('DOMContentLoaded', function(){ 
    
}, false);