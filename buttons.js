$(document).ready(function(){

   $("#button_1")
   .mouseenter(function() {
      $(this).find( "#button_2" ).attr("src","Style/buttons/Button_on.jpg");
    })
    .mouseleave(function() {
      $(this).find( "#button_2" ).attr("src","Style/buttons/Button_off.jpg");
    });
    
   $("#button_3")
   .mouseenter(function() {
      $(this).find( "#button_4" ).attr("src","Style/buttons/Button_on.jpg");
    })
    .mouseleave(function() {
      $(this).find( "#button_4" ).attr("src","Style/buttons/Button_off.jpg");
    });
    
   $("#button_5")
   .mouseenter(function() {
      $(this).find( "#button_6" ).attr("src","Style/buttons/Button_on.jpg");
    })
    .mouseleave(function() {
      $(this).find( "#button_6" ).attr("src","Style/buttons/Button_off.jpg");
    });
    
   $("#button_7")
   .mouseenter(function() {
      $(this).find( "#button_8" ).attr("src","Style/buttons/Button_on.jpg");
    })
    .mouseleave(function() {
      $(this).find( "#button_8" ).attr("src","Style/buttons/Button_off.jpg");
    });
    
   $("#button_9")
   .mouseenter(function() {
      $(this).find( "#button_10" ).attr("src","Style/buttons/Button_on.jpg");
    })
    .mouseleave(function() {
      $(this).find( "#button_10" ).attr("src","Style/buttons/Button_off.jpg");
    });
    
});