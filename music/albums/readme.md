# music/albums

- ### all the .html pages for listening are here
- ### all follow a general formula which can be seen below

### html
```html
  <head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <link href='http://fonts.googleapis.com/css?family=Roboto:100,200,300,400,500,600,700,800,900' rel='stylesheet' type='text/css'>
    <style>
      body {
        font-family: 'Roboto', sans-serif;
      };
    </style>
  </head>
  <body>
    <center>
      <img onclick="skip()" src="http://dcvslab.github.io/music/mp3/00/album.jpg">
      <p id="track">## - name</p>
      <div id="audiocontainer">
        <audio autoplay id="audio">
          <source src="http://dcvslab.github.io/music/mp3/00/01.mp3" type="audio/mpeg">
        </audio>
      </div>
    </center>
  </body>
  ```
  ### js
  
  ```javascript
  audio = document.getElementById("audio")
    var tracks = ["01","02","03","04","05"]
    document.getElementById("track").innerHTML = tracks[0]; nsorig = "01";
    function checkTrack(url) {
      var http = new XMLHttpRequest();
      http.open('HEAD', url, false);
      http.send();
      if (http.status != 404) {
        //nothing
      } else {
        tracklink = "http://dcvslab.github.io/music/mp3/00/01.mp3";
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
      tracklink = "http://dcvslab.github.io/music/mp3/00/" + ns + ".mp3"
      checkTrack(tracklink)
      setTimeout(function() { $("#audiocontainer").append("<audio autoplay id='audio'><source src='" + tracklink + "' type='audio/mpeg'></audio>"); },1000)
    }
    function skip() {
      next(); $("#audio").remove();
     }
    function advance() {
      if (document.getElementById("audio").ended == true) { next(); $("#audio").remove(); }
    }
    setInterval(function() { advance(); }, 1000);
  ```
