# Desenvolvendo uma SPA com vue.js

Aula na School of Net

![O que é um SPA](spa.gif)

## CSS para o aplicativo

```
body {
    background-color: yellowgreen;
}

nav ul, nav li {
    display: inline-block;
    list-style: none;
    margin: 0;
    padding: 0;
}

nav ul li a {
    display: block;
    background-color: rgba(0, 0, 0, 0.3);
    margin-bottom: 10px;
    padding: 10px 20px;
    color: white;
    text-decoration: none;
    border-radius: 4px;
}

nav ul li a:hover {
    background-color: rgba(0, 0, 0, 0.5);
}

.content {
    background-color: white;
    padding: 20px;
}

.content.not-found {
    background-color: red;
    color: white;
    padding: 20px;
}


/* ANIMAÇÕES */

body {
    overflow: hidden;
    width: 100%;
}

.transition {
  position: relative;
}

.animated {
  position: absolute;
  top: 0;
}

.content {
    width: 100%;
}

```