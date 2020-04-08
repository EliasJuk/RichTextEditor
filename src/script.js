let editor = document.getElementById('editor');

function bold(){
	let cmd = 'bold'
	document.execCommand(cmd, false, null);		
}

function italic(){
	let cmd = 'italic'
	document.execCommand(cmd, false, null);		
}
