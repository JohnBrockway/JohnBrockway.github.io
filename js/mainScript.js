function operateNav() {
    if (document.getElementById("sidenav").style.width > "0px") {
        closeNav();
    }
    else {
        openNav();
    }
}

function openNav() {
    document.getElementById("sidenav").style.width = "15%";
    document.getElementById("main").style.marginLeft = "15%";
    document.getElementById("main").style.width = "85%";
    document.getElementById("header").style.width = "85%";
    document.getElementById("openAndCloseNav").innerHTML="&times;";
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0px";
    document.getElementById("main").style.width = "100%";
    document.getElementById("header").style.width = "100%";
    document.getElementById("main").style.marginLeft = "0px";
    document.getElementById("openAndCloseNav").innerHTML="&#x2261;";
}
