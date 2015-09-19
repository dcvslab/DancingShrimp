function mAdd() {
  var mlink = document.getElementById("madd").value
    if (! mlink.split("youtube.com")[1]) {
      if (! mlink.split("youtu.be")[1]) {
        if (! mlink.split("soundcloud.com")[1]) {
          alert("This is not a valid link!")
        } else { //soundcloud
            $.get('https://api.soundcloud.com/resolve.json?url=' + mlink + '&client_id=bb52b4a0c199ecc98cd5d4e4ddf2ee14', 
              function (scdata) {
                if (scdata.kind != "track"); { alert("This is not a valid link!")} 
                else { }
            });

        }
      }
    }
}
