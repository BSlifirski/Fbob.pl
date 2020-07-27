
 window.onload=function(){
    var button1 = document.getElementById('button_1');
    var button2 = document.getElementById('button_2');
    var button3 = document.getElementById('button_3');
    var button4 = document.getElementById('button_4');
    var button5 = document.getElementById('button_5');


    //IMAGE LIGHT IN

      function test1(){
         button1.onmouseenter = function() {(button_img1)};
         button1.onmouseleave = function() {(button_img1_out)};
     
      }

    function button_img1() {
       button1.innerHTML = '<img  src="/Style/buttons/News_light.png">';
    };

    function button_img2() {
        button2.innerHTML = '<img  src="/Style/buttons/Crew_light.png">';

     };

     function button_img3() {
        button3.innerHTML = '<img  src="/Style/buttons/Forum_light.png">';
     };

     function button_img4() {
        button4.innerHTML = '<img  src="/Style/buttons/Armory_light.png">';
     };

     function button_img5() {
        button5.innerHTML = '<img  src="/Style/buttons/Other_light.png">';
     }; 
     //iMAGE LIGHT OUT 
     
     function button_img1_out() {
        button1.innerHTML = '<img  src="/Style/buttons/News.png">';
 
     };

     function button_img2_out() {
        button2.innerHTML = '<img  src="/Style/buttons/Crew.png">';
 
     };

     function button_img3_out() {
        button3.innerHTML = '<img  src="/Style/buttons/Forum.png">';
 
     };

     function button_img4_out() {
        button4.innerHTML = '<img  src="/Style/buttons/Armory.png">';
 
     };

     function button_img5_out() {
        button5.innerHTML = '<img  src="/Style/buttons/Other.png">';
 
     }; 
   

   
     
    button5.addEventListener('mouseleave', button_img5_out, false);
    button4.addEventListener('mouseleave', button_img4_out, false);
    button3.addEventListener('mouseleave', button_img3_out, false);
    button2.addEventListener('mouseleave', button_img2_out, false);
    button1.addEventListener('mouseleave', a, false);
    
    //button1.addEventListener('mouseover', button_img1,false);
    button2.addEventListener('mouseover', button_img2,false);
    button3.addEventListener('mouseover', button_img3,false);
    button4.addEventListener('mouseover', button_img4,false);
    button5.addEventListener('mouseover', button_img5,false);
   
  };

  function a(){

   if( button1 == onmouseover) {
      button1.innerHTML = '<img  src="/Style/buttons/News_light.png">';

   }

   else{
      button1.innerHTML = '<img  src="/Style/buttons/News.png">';
   }


  }
  