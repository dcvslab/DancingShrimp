function cmdAdd() {
  setTimeout(function(){
  var cont = document.getElementById("container");
  var body = document.getElementsByTagName("body")[0]
  $(cont).append("<div>index@dcvslab.github.io:~$</div><div><input id='cmd' class='cmd' placeholder='enter a command' onKeyPress='return submit(event)'></input></div>");
  body.scrollTop = body.scrollHeight
  document.getElementById("cmd").click()
  }, 500)}
function cmdAddR() {
  setTimeout(function(){
    var cont = document.getElementById("container");
    $(cont).append("<div>root@dcvslab.github.io:~#</div><div><input id='cmd' class='cmd' placeholder='enter a command' onKeyPress='return submit(event)'></input></div>");
}, 500)}
function sudoAdd() {
  setTimeout(function(){
    var cont = document.getElementById("container")
    $(cont).append("<div><input id='password' class='cmd' placeholder='enter the password' onKeyPress='return password(event)'></input></div>")
  }, 500)}
var sudoa = 0 //sudo attempts
function password(e) {
  if (e && e.keyCode == 13) {
  var cont = document.getElementById("container")
    if (sudoa == 3) {
      $(cont).append("<div>sudo: 3 incorrect password attempts")
      cmdAdd()
    } else {
      $(cont).append("<div>Sorry, try again.")
      sudoAdd()
    }
  }
}
function submit(e) {
  if(e && e.keyCode == 13) {
    var cmd = document.getElementById("cmd");
    var cont = document.getElementById("container");
    cmdv = cmd.value.toLowerCase()
    if (cmdv == "contact" || cmdv == "help" || cmdv == "reload" || cmdv.indexOf("sudo") > -1 || cmdv.indexOf("goto") > -1 || cmdv.indexOf("cd") > -1) {
      if (cmd.value.toLowerCase() == "contact") {
        cmd.remove();
        $(cont).append(
          "<div>contact</div>"
          +"<div><div class='cmdname'>message</div><div class='cmddesc'><a href='https://dcv.typeform.com/to/NumNLn' target='_blank'>typeform</a></div></div>"
          +"<div><div class='cmdname'>website</div><div class='cmddesc'><a href='http://dcvslab.github.io' target='_blank'>dcvslab.github.io</a></div></div>"
        );
        cmdAdd()
      }
      if (cmd.value.toLowerCase().split(" ")[0] == "goto") {
        if (cmd.value.toLowerCase() == "goto") {
          cmd.remove();
          $(cont).append("<div>goto</div><div>usage: goto [link]</div>"); cmdAdd()
        } else {
          if (cmd.value.split(" ")[1].startsWith("http")) {
            cmd.remove()
            $(cont).append("<div>goto " + cmd.value.split(" ")[1] + "</div>"); cmdAdd()
            window.open(cmd.value.split(" ")[1])
          } else {
            cmd.remove()
            $(cont).append("<div>goto " + cmd.value.split(" ")[1] + "<div>goto: " + cmd.value.split(" ")[1] + ": invalid page, does it start with `http'?"); cmdAdd()
          }
        }
      }
      if (cmd.value.toLowerCase() == "help") {
        cmd.remove();
        $(cont).append(
          "<div>help</div><div>dcvslab terminal, version 1.0</div>"
          +"<div><div class='cmdname'>contact</div><div class='cmddesc'>ways to contact me</div>"
          +"<div><div class='cmdname'>goto</div><div class='cmddesc'>go to a website</div></div>"
          +"<div><div class='cmdname'>help</div><div class='cmddesc'>shows this menu</div></div>"
          +"<div><div class='cmdname'>reload</div><div class='cmddesc'>reloads this page</div></div>"
          +"<div><div class='cmdname'>sudo</div><div class='cmddesc'>run sudo commands</div></div>"
        );
        cmdAdd()
      }
      if (cmd.value.toLowerCase() == "reload") {
        location.reload()
      }
      if (cmd.value.indexOf("sudo") > -1) {
        $(cont).append("<div>[sudo] password for dcvslab.github.io:")
        sudoAdd()
      }
    } else {
    cmd.remove()
    $(cont).append("<div>" + cmdv + "</div><div>" + cmdv + ": command not found, type `help' for a list of commands")
    cmdAdd()
    }
  }
}
