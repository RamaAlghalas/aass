var menuItem=document.getElementById("menu").getElementsByTagName("li");
var headline=document.getElementById("text");
var btn=document.getElementById("zar");
var myMenu=document.getElementById("menu");
var counter=1;
for (i = 0; i < menuItem.length; i++){
    menuItem[i].addEventListener("click",selectItem);
}
function selectItem(){
    for(i=0; i<menuItem.length;i++){
        menuItem[i].classList.remove("selected");
    }
    this.classList.add("selected");
}
btn.addEventListener("click",newItem);

function newItem(){
    myMenu.innerHTML+="<li> new line" +counter+ "</li>"
    counter++;
}  