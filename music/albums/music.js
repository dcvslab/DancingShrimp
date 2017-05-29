    audio = document.getElementById("audio")
    var tracks = ["01 ", "02 ", "03	", "04 ", "05	","06 ", "07 ", "08 ", "09 ","10 ", "11 Heavenly Father","12 ", "13 ", "14 "];
    document.getElementById("track").innerHTML = tracks[0]; nsorig = "01"
    function checkTrack(url) {
      var http = new XMLHttpRequest();
      http.open('HEAD', url, false);
      http.send();
      if (http.status != 404) {
        //nothing
      } else {
        tracklink = "http://dcvslab.github.io/music/mp3/07/01.mp3";
        document.getElementById("track").innerHTML = tracks[0]; nsorig = "01"
      }
    }
    function next() {
      nsparse = parseInt(nsorig);
      nsnum = nsparse + 1;
      nsnums = nsnum.toString();
      if (nsnums.length > 1) 
        { ns = nsnums; nsorig = ns} 
      else { ns = "0" + nsnums; nsorig = ns
      }
      document.getElementById("track").innerHTML = tracks[nsnum - 1];
      tracklink = "http://dcvslab.github.io/music/mp3/07/" + ns + ".mp3"
      checkTrack(tracklink)
      setTimeout(function() { $("#audiocontainer").append("<audio autoplay id='audio'><source src='" + tracklink + "' type='audio/mpeg'></audio>"); },1000)
    }
    function skip() {
      next(); $("#audio").remove();
     }
    function advance() {
      if (document.getElementById("audio").ended == true) { 
        next(); $("#audio").remove(); 
	    } else { 
        if (document.getElementById("audio").ended !== "undefined") { }
      } 
    }
    function playTrack() {
      tnum = prompt("enter a track number or 'random' for a random one:");
      if (parseInt(tnum) <= 14) {
        nsorig = tnum - 1; skip();
      } else {
        if (tnum == "random") {
          nsorig = Math.floor(Math.random() * 14); skip() 
        } else {
          alert("choose track number 1-14 / spell random right")
        }
      }
    }   
    setInterval(function() { advance(); }, 1000);
