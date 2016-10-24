function add() { //add tasks
	var text = document.getElementById("inputtask").value
	if (! text) { } else {
		$(text).insertAfter(document.getElementById("div"))
	}	
}
