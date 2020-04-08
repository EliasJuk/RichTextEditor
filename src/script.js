let editor = document.getElementById('editor');


function insertText(){
	let text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'

	let cmd = 'insertText'
	document.execCommand(cmd, false, text);		
}

function indent(){
	let cmd = 'indent'
	document.execCommand(cmd, false, null);		
}

function outdent(){
	let cmd = 'outdent'
	document.execCommand(cmd, false, null);		
}

function bold(){
	let cmd = 'bold'
	document.execCommand(cmd, false, null);		
}

function italic(){
	let cmd = 'italic'
	document.execCommand(cmd, false, null);		
}

function underline(){
	let cmd = 'underline'
	document.execCommand(cmd, false, null);		
}

function alignleft(){
	let cmd = 'justifyLeft'
	document.execCommand(cmd, false, null);		
}

function alignjustify(){
	let cmd = 'justifyFull'
	document.execCommand(cmd, false, null);		
}

function aligncenter(){
	let cmd = 'justifyCenter'
	document.execCommand(cmd, false, null);		
}

function alignright(){
	let cmd = 'justifyRight'
	document.execCommand(cmd, false, null);		
}

function insertImage(){
	let link = prompt('Link da imagem')

	let cmd = 'insertImage'
	document.execCommand(cmd, false, link);	
}

function link(){
	let link = prompt('Link')

	let cmd = 'createLink'
	document.execCommand(cmd, false, link);	
}

function unlink(){
	let cmd = 'unlink'
	document.execCommand(cmd, false, null);	
}

async function foreColor(){
	let inputColor = await document.getElementById('color');
	let color = inputColor.value;

	let cmd = 'foreColor'
	document.execCommand(cmd, false, color);
	
}







