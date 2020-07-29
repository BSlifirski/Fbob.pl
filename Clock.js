
setInterval(time,1000);

function time (){

    var today = new Date();
    
    var day = today.getDate();
    var month =today.getMonth()+1;
    var year = today.getFullYear()+100;

    var hour = today.getHours();
;    var minute = today.getMinutes();
    var second = today.getSeconds();

    document.getElementById('clock').innerHTML=
    day+"|"+month+"|"+year+"<br>"+hour+"|"+minute+"|"+second;
    
}
