var left1=document.querySelectorAll(".left-arrow")[0];
var left2=document.querySelectorAll(".left-arrow")[1];
var right1=document.querySelectorAll(".right-arrow")[0];
var right2=document.querySelectorAll(".right-arrow")[1];
var container1=document.querySelectorAll(".carousel")[0];
var container2=document.querySelectorAll(".carousel")[1];
var mainContainer1=document.querySelectorAll(".mini-container2")[0];
var mainContainer2=document.querySelectorAll(".mini-container2")[1];

function moveRight(){
    container1.style.transform="translateX(-77rem)";
    container1.style.transition="0.5s ease-out";
}
function moveLeft(){
    container1.style.transform="translateX(0rem)";
    container1.style.transition="0.5s ease-out";
}
function moveRight1(){
    container2.style.transform="translateX(-77rem)";
    container2.style.transition="0.5s ease-out";
}
function moveLeft1(){
    container2.style.transform="translateX(0rem)";
    container2.style.transition="0.5s ease-out";
}

left1.addEventListener("click",moveLeft);
right1.addEventListener("click",moveRight);
left2.addEventListener("click",moveLeft1);
right2.addEventListener("click",moveRight1);

mainContainer1.addEventListener("mouseover",function(){
left1.style.visibility="visible";
right1.style.visibility="visible";
});
mainContainer1.addEventListener("mouseout",function(){
left1.style.visibility="hidden";
right1.style.visibility="hidden";
});
mainContainer2.addEventListener("mouseover",function(){
left2.style.visibility="visible";
right2.style.visibility="visible";
});
mainContainer2.addEventListener("mouseout",function(){
left2.style.visibility="hidden";
right2.style.visibility="hidden";
});