var date = new Date();
var hour = date.getUTCHours();

var directory = "../assets/images/background/";

hour = 2;
alert("ah its working");

function checkTime(){
    if(hour => 6 && hour < 11){
        //set values to morning
        document.getElementsByClassName("masthead")[0].setAttribute("style","linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 75%, #000 100%), url(" + dir + "morning.jpg");
    }
    else if(hour >= 11 && hour < 17){
        //set values to afternoon
        document.getElementsByClassName("masthead")[0].setAttribute("style","linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 75%, #000 100%), url(" + dir + "afternoon.jpg");
    }
    else if(hour >= 17 || (hour >= 0 && hour < 6)){
        //set values to night
        document.getElementsByClassName("masthead")[0].setAttribute("style","linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 75%, #000 100%), url(" + dir + "night.jpg");
    }
}
console.log("cringe");
checkTime();