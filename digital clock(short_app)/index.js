function showDate () {
    var todayDate = new Date();
    document.getElementById("dateContainer").innerText = todayDate.toDateString();
}
showDate()

function showTime () {
    var clockTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', second: '2-digit'});
    document.getElementById("clockContainer").innerText = clockTime; 


}

 

var intervalRef;
function startclock () {
   intervalRef = setInterval(showTime, 1000);
}
 
function stopclock () {
    clearInterval(intervalRef) 

}