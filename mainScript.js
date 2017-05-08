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
	document.getElementById("main").style.width = "85%";
	document.getElementById("overview").style.width = "85%";
	document.getElementById("header").style.width = "85%";
	document.getElementById("contact").style.width = "85%";
    document.getElementById("main").style.marginLeft = "15%";
	document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0px";
	document.getElementById("main").style.width = "100%";
	document.getElementById("overview").style.width = "100%";
	document.getElementById("header").style.width = "100%";
	document.getElementById("contact").style.width = "100%";
    document.getElementById("main").style.marginLeft = "0px";
	document.body.style.backgroundColor = "white";
}