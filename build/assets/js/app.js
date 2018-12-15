function showNav() {
	var navDiv = document.getElementById("responsive-nav");

	if (navDiv.className == "responsive-nav") {
		navDiv.className = "responsive-nav unfold"
	} else {
		navDiv.className = "responsive-nav"
	}
}