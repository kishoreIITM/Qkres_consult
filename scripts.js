window.onscroll = function() {
    scrollnav()
};

var two = document.getElementsByClassName("two");
var bigimg = document.createElement("img");
bigimg.onload = function(){
    two[0].style.backgroundImage =  'url("'+bigimg.src+'")';
};

setTimeout(function(){
    bigimg.src = "img/50.jpg" ;

},100)

function scrollnav(){
    if ( document.documentElement.scrollTop > 300 ){
        document.getElementById("nav").style.padding =" 0 1rem";
        document.getElementById("nav").style.backgroundColor = "black";
    }
    else {
        document.getElementById("nav").style.padding= "0.5rem 1rem";
        document.getElementById("nav").style.backgroundColor = "rgb(31, 26, 26,0.8)";
    }

}