<h1 align="center">
    <img alt="bold" title="#bold" src="readme/texteditor.png"/>
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/EliasJuk/RichTextEditor">	
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/EliasJuk/RichTextEditor">
	
  <a href="https://www.linkedin.com/in/eliaspjuk/">
    <img alt="Made by EliasJuk" src="https://img.shields.io/badge/made%20by-EliasJuk-%2304D361">
  </a>
  
  
  <a href="https://github.com/EliasJuk/RichTextEditor/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/EliasJuk/RichTextEditor">
  </a>
  
  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen"> 
<p>

<p align="center">
  <a href="#-How-To-Make">How To Make</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#dart-Links-para-ajudar">Links</a>
</p>


## ❔ How To Make

### ❔ Como criar um editor de texto - Rich Text Editor

<p>E mais simples que você imagina criar um editor de textos (Rich Text Editor), o exemplo a seguir mostra como aplicar um negrito (bold) a uma faixa de texto, a parir desde exemplo tenho certeza que você irá conseguir criar o seu com mais funcionalidades.</p>

<h1 align="center">
    <img alt="bold" title="#bold" src="readme/bold.png"/>
</h1>

Siga os passos a baixo:


### 📝 Index.html
```bash
#Importa icones do Font Awesome
<script src="https://kit.fontawesome.com/d83a960c7e.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="style.css"/>


<button onclick="bold()">
    <i class=' fas fa-bold fa-2x'></i>
</button>


<div class="editor" contenteditable="true"></div>
<script src="script.js"></script>
```

### 📝 Index.js

```bash
let editor = document.getElementById('editor');

function bold(){
	let cmd = 'bold'
	document.execCommand(cmd, false, null);		
}
```

### 📝 style.css

```bash
#Importa font Roboto do google
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

div.editor {
    width: 30vw;
    height: 30vh;
    border: 1px solid black;
    background-color: #fff;
}

li {
    list-style-type: none;
}
```
---

<p>&nbsp;&nbsp;</p>

## :dart: Links para ajudar

> https://developer.mozilla.org/pt-BR/docs/Web/API/Document/execCommand

---

<p>&nbsp;&nbsp;</p>

## :memo: License

This project is under the MIT license. See the [LICENSE](LICENSE.md) for details.