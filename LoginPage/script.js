// our js script
let btn = document.getElementsByTagName("button")[0]
let par = document.getElementsByTagName("p")[0]
console.log(par)
btn.onclick = () => par.style.color = "red"