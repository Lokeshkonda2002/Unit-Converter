function CtoFConverter(temp) {
    document.querySelector(".fahrenheit").innerHTML=(temp-32)/1.8;
 }
 function KmtoMConverter(speed) {
    document.querySelector(".metersPerSecond").innerHTML = speed * 0.277778;
 }
 function convert() {
    var hours = document.getElementById("hoursInput").value;
    var minutes = hours * 60;
    document.getElementById("result").innerHTML = minutes +" minutes";
}
function convert1() {
    var minutes = document.getElementById("minutesInput").value;
    var seconds = minutes * 60;
    document.getElementById("result1").innerHTML = seconds + " seconds";
}