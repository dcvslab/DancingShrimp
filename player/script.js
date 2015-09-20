function mAdd() {
  var mlink = document.getElementById("madd").value
    if (! mlink.split("youtube.com")[1]) {
      if (! mlink.split("youtu.be")[1]) {
        if (! mlink.split("soundcloud.com")[1]) {
          alert("This is not a valid link!")
        } else { 
          if (! mlink.split("soundcloud.com")[1]) {
            
          } else { //soundcloud
            var scpl = mlink.split("soundcloud.com/")[1]
            var sclink = "https://www.soundcloud.com/" + scpl
            $.ajax({
              url: "https://api.soundcloud.com/resolve.json?url=" + sclink + "&client_id=bb52b4a0c199ecc98cd5d4e4ddf2ee14", 
              dataType: "jsonp",
              success: function(data){
               console.log(data);           
              },
              error: function(jqXHR, textStatus, errorThrown) {
                alert("This is not a valid link!");
              }
            });

          }
        }
      }
    }
}
