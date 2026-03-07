const footer = document.querySelector("footer");

window.addEventListener("resize", () => {
	document.body.style.paddingBottom = (footer.offsetHeight + 16)+"px";
});

window.dispatchEvent( new Event("resize") );