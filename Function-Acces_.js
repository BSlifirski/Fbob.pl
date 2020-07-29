window.onload = function(){
    var accesNews = document.getElementById('button_1');
    var accesCrew = document.getElementById('button_3');
    var accesArmory = document.getElementById('button_7');
    var accesOther = document.getElementById('button_9');
    var acces = document.getElementById('acces');


    function News(){
        acces.innerHTML = "Main"
    };
    function Crew(){
        acces.innerHTML = "Crew"
    };

    function Armory(){
        acces.innerHTML = "Armory"
    };

    function Other(){
        acces.innerHTML = "Other"
    };



    accesNews.addEventListener('click',News,false);
    accesCrew.addEventListener('click',Crew,false);
    accesArmory.addEventListener('click',Armory,false);
    accesOther.addEventListener('click',Other,false);
}

