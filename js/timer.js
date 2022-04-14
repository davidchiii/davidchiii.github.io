var date = new Date();
var hour = date.getUTCHours();
hour -= 4;
if(hour < 0){
    hour += 24;
}

var dir = "../assets/images/background/";

//alert("ah its working");

var mastheads = document.getElementById('headr');

if(hour >= 6 && hour < 11){
    //set values to morning
    //document.getElementsByClassName("masthead")[0].setAttribute("style","linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 75%, #000 100%), url(" + dir + "morning.jpg");
    //alert(document.getElementsByClassName("masthead")[0]);
    mastheads.style.background = "linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 75%, #000 100%), url(" + dir + "morning.jpg)";
}
else if(hour >= 11 && hour < 17){
    //set values to afternoon
    //document.getElementsByClassName("masthead")[0].setAttribute("style","linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 75%, #000 100%), url(" + dir + "afternoon.jpg");
    //alert(document.getElementsByClassName("masthead")[0]);
    mastheads.style.background = "linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 75%, #000 100%), url(" + dir + "afternoon.jpg)";
}
else if(hour >= 17 || (hour >= 0 && hour < 6)){
    //set values to night
    document.getElementsByClassName("masthead")[0].setAttribute("style","linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 75%, #000 100%), url(" + dir + "night.jpg");
    //alert(document.getElementsByClassName("masthead")[0]);
    mastheads.style.background = "linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 75%, #000 100%), url(" + dir + "night.jpg)";
}
else{
    alert("falls though");
}