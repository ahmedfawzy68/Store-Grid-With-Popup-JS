var allImgs = Array.from(document.querySelectorAll(".item img"));
var parentLayer = document.querySelector(".ParentLayer");
var childLayer = document.querySelector(".ParentLayer .childLayer");
var close = document.getElementById("close");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var currentIndex = 0;


for(var i = 0 ; i < allImgs.length ; i++){
    allImgs[i].addEventListener("click", display)
}
function display(eInfo){
    parentLayer.style.display = "flex"
    var myInfo = eInfo.target.src;
    childLayer.style.cssText = "background-image: url("+myInfo+");"
    currentIndex = allImgs.indexOf(eInfo.target);   
}



close.addEventListener("click", closeImg)
function closeImg(){
    parentLayer.style.display = "none"
}


next.addEventListener("click", nextImg)
function nextImg(){
    currentIndex++;
    if(currentIndex >= allImgs.length){
        currentIndex = 0;
    }
    var myNext = allImgs[currentIndex].src;
    childLayer.style.cssText = "background-image: url("+myNext+");"
}


prev.addEventListener("click", prevImg)
function prevImg(){
    currentIndex--;
    if(currentIndex < 0){
        currentIndex = allImgs.length - 1;
    }
    var myprev = allImgs[currentIndex].src;
    childLayer.style.cssText = "background-image: url("+myprev+");"
}


document.addEventListener("keydown", function(eInfo){
    if(eInfo.keyCode == 39){
        nextImg();
    }
    else if(eInfo.keyCode == 37){
        prevImg();
    }
    else if(eInfo.keyCode == 27){
        closeImg();
    }
})


document.addEventListener("click", closeParentLayer)
function closeParentLayer(eInfo){
    if(eInfo.target == parentLayer){
        closeImg(); 
    }
}