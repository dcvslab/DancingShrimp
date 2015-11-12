var mc = 0
window.twtft = "tw"
function getDT() {
  var time = new Date();
    if (window.twtft == "tw") {
    if (time.getHours() >= 12) { hours = time.getHours() - 12; if (hours == 0) { hours = 12} } else { hours = time.getHours(); if (hours == 0) { hours = 12} }
    } else {
    hours = time.getHours()
    }
    if (time.getMinutes().toString().length == 1) { minutes = "0" + time.getMinutes().toString() } else { minutes = time.getMinutes().toString() }
    document.getElementById("timeh").innerHTML =  hours; document.getElementById("timem").innerHTML = ":" + minutes
    d = time.getDay(); n = time.getDate(); m = time.getMonth();
    if (d == 0) { d = " SUN" } else { if (d == 1) { d = " MON" } else { if (d == 2) { d = " TUE" } else { if (d == 3) { d = " WED" } else { if (d == 4) { d = " THURS" } else { if (d == 5) { d = " FRI" } else { d = " SAT" }}}}}}
    if (m == 0) { m = "JAN " } else { if (m == 1) { m = "FEB " } else { if (m == 2) { m = "MAR " } else { if (m == 3) { m = "APR " } else { if (m == 4) { m = "MAY " } else { if (m == 5) { m = "JUNE " } else { if (m == 6) { m = "JULY " } else { if (m == 7) { m = "AUG " } else { if (m == 8) { m = "SEPT " } else { if (m == 9) { m = "OCT" } else { if (m == 10) { m = "NOV " } else { m = "DEC " }}}}}}}}}}}
    document.getElementById("d").innerHTML = d + " "; document.getElementById("n").innerHTML = n; document.getElementById("m").innerHTML = " " + m;
    mc = mc + 1; if (mc == 240) {mc = 0; bG()}
}
getDT(); setInterval(function(){ getDT(); }, 1000);
function rN(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function bG(num) {
  if (! num) { window.bg = rN(1, 747) } else { window.bg = num }
  $("#background").animate({ opacity: 0 })
  setTimeout(function(){
    if (window.bg > 699) { window.bg = window.bg + ".jpg" } else { window.bg = window.bg + ".jpeg" }
    document.getElementById("background").setAttribute('style', 'background: url("http://dcvslab.github.io/backgrounds/' + window.bg + '") no-repeat center center fixed; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover;');
  }, 300);
  setTimeout(function(){
    $("#background").animate({ opacity: .3 })
  }, 600);
}
bG()
window.sttf = "false"
var dd = document.getElementById("date"); var twtf = document.getElementById("twtf"); var th = document.getElementById("timeh"); var tm = document.getElementById("timem"); var tms = document.getElementById("timems")
var tw = document.getElementById("tw"); var tf = document.getElementById("tf")
document.getElementById("n").addEventListener("click", function() {bG()})
document.getElementById("m").addEventListener("click", function() { window.open("http://dcvslab.github.io/backgrounds/" + window.bg)})
tw.addEventListener("click", function () { window.twtft = "tw"; tf.className = "n cp"; tw.className = "b cp"; getDT()})
tf.addEventListener("click", function () { window.twtft = "tf"; tw.className = "n cp"; tf.className = "b cp"; getDT()})
