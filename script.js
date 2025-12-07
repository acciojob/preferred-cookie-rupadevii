//your JS code here. If required.
const saveBtn = document.querySelector("input[type='submit']")
const root = document.documentElement;

const cookies = document.cookie.split(";")

cookies.forEach(cookie => {
	const cookiee = cookie.split("=");
	if(cookiee[0].trim() === "fontsize") {
	root.style.setProperty('--fontsize', cookiee[1]+"px");
	}
	if(cookiee[0].trim() === "fontcolor") {
	root.style.setProperty('--fontcolor', cookiee[1]);	
	}
})

saveBtn.addEventListener("click", (e) => {
	e.preventDefault();
	const fontSize = document.getElementById("fontsize").value;
	const fontColor = document.getElementById("fontcolor").value;

	document.cookie = `fontsize=${fontSize}`
	document.cookie = `fontcolor=${fontColor}`
	
})
