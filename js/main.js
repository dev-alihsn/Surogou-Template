(function(){
// Start genral varbiles
var btnTop = document.getElementsByClassName("button-top")[0];
// End  genral varbiles

// Start functions

// Start magic scroll function
function magicScroll(speed,type,element) {
    let scy = window.scrollY;
    if(type == "toTop") {
        let sInter = setInterval(function(){
            scy=scy - speed
            window.scrollTo(0,scy)
            if (scy <= 0) {
                clearInterval(sInter)
                console.log("scrolled")
            }
        },1)
    }else if(type == "toElement") {
        let ele = element.offsetTop;
        if(scy < ele) {
            let sInter = setInterval(function(){
                scy=scy + speed
                window.scrollTo(0,scy)
                if (scy >= ele) {
                    clearInterval(sInter)
                    console.log("scrolled")
                }
            },1)
        }else {
            let sInter = setInterval(function(){
                scy=scy - speed
                window.scrollTo(0,scy)
                if (scy <= ele) {
                    clearInterval(sInter)
                    console.log("scrolled")
                }
            },1)
        }
    }
}
// End magic scroll function

// Start functionality effacts
function magicEffacts(Effact,element,duration) {
    if (Effact == "fadeIn") {
        if(element.style.opacity === "0.9" || element.style.opacity === "1") {}
        else {
            let v = 0;
            let fadeInter = setInterval(function(){
                v++
                element.style.opacity = "." + v
                if (v >= 9) {
                    clearInterval(fadeInter)
                    element.style.display = "block"
                }
            },duration /9)
        }
    }else if(Effact == "fadeOut") {
        if(element.style.opacity === "0") {}
        else {
            let v = 9;
            let fadeInter = setInterval(function(){
                v--
                element.style.opacity = "." + v
                if (v <= 0) {
                    clearInterval(fadeInter)
                    element.style.display = "none"
                }
            },duration /9)
        }
    }
}
// End functionality effacts

// Start on scroll function activties
window.onscroll = _=> {
    var wsy = window.scrollY;
    if (wsy >= 500) {
        magicEffacts("fadeIn",btnTop,100)
    }else {
        magicEffacts("fadeOut",btnTop,100)
    }
}
// End on scroll function activties

// End functions

// traiger functions and events

// smoth scroll to top button
btnTop.onclick = function() {
    magicScroll(20,"toTop")
}

}())