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
var apik = "AIzaSyAT6PzxM3dJSHfaUzNn1qYuSWCAlSCL"
var authk = "606761269242-vi71295hqn5uu9fmkfina926lpb6ih9s.apps.googleusercontent.com"
function init() {
    gapi.client.setApiKey(apik);
}
var OAUTH2_CLIENT_ID = authk;
var OAUTH2_SCOPES = [
    'https://www.googleapis.com/auth/youtube'
];
googleApiClientReady = function() {
    gapi.auth.init(function() {
        window.setTimeout(checkAuth, 1);
    });
}
function checkAuth() {
    gapi.auth.authorize({
        client_id: OAUTH2_CLIENT_ID,
        scope: OAUTH2_SCOPES,
        immediate: true
    }, handleAuthResult);
}
function handleAuthResult(authResult) {
    if (authResult && !authResult.error) {
        loadAPIClientInterfaces()
    } else {
      document.getElementById("ytaa").close()
        gapi.auth.authorize({
            client_id: OAUTH2_CLIENT_ID,
            scope: OAUTH2_SCOPES,
            immediate: false
            }, handleAuthResult);
    }
}
function loadAPIClientInterfaces() {
    gapi.client.load('youtube', 'v3', function() {
        handleAPILoaded();
    });
}
function signIn(gu) {
    window.gup = gu.getBasicProfile();
    var name = gup.getName();
    var image = gup.getImageUrl();
    document.getElementById("signupin").style.display = "none";
    document.getElementById("loggedin").style.display = "block";
    dcvCheckAuth()
}
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut()
}
function dcvCheckAuth() {
    gapi.auth.authorize({
        client_id: OAUTH2_CLIENT_ID,
        scope: OAUTH2_SCOPES,
        immediate: true
    }, dcvAuthResult);
}
function dcvAuthResult(authResult) {
    if (authResult && !authResult.error) {
        playList(apik);
        getPlaylists()
    } else {
      document.getElementById("ytaa").open()
    }
}
function playList(accessToken, pagetoken, playlistid) {
    if (! pagetoken) { pagetoken = "" }; if (! playlistid) { playlistid = "" }
    this.accessToken = accessToken;
    this.gapi = gapi;
    this.authenticated = true;
    setTimeout(function() {
        this.gapi.client.request({
            path: '/youtube/v3/playlists',
            params: {
                part: 'snippet',
                mine: true,
                maxResults: 50,
                pagetoken: pagetoken,
                playlistId: playlistid
        },
        callback: function(response) {
            window.pl = response
        }
        })
    }, 1000)
}
function alertId(id) {
  playList(apik, "", id)
  setTimeout(function() { console.log(window.pl) }, 5000)
}
function getPlaylists() {
$("#pln").append("<div id='loading'>loading...</div>")
    setTimeout(function() {
        var plitems = pl.items
        var plil = plitems.length;
        for (var i = 0; i < plil; i++) {
            $("#loading").remove()
            $("#pln").append("<div onclick='alertId(this.data-pid)' data-pid='" + plitems[i].id + "'>" + plitems[i].snippet.title + "</div>")
        }
    }, 5000)
}
