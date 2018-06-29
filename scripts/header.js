function operateNav() {
    if (document.getElementById("header").classList.contains("headerOpen")) {	
        closeNav();	
    }	
    else {	
        openNav();	
    }	
}	
    	
function openNav() {	
    var header = document.getElementById("header");
    header.classList.add("headerOpen");
    header.classList.remove("headerCollapsed");
}	
    	
function closeNav() {
    var header = document.getElementById("header");
    header.classList.add("headerCollapsed");
    header.classList.remove("headerOpen");
}

function closeSidenavOnOutsideClick (e) {
    if (!e.target.matches('#sidenavIcon') && !e.target.matches('#header')) {
        if (document.getElementById("header").classList.contains("headerOpen")) {
            closeNav();	
        }
    }
}
