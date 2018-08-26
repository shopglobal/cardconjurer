function loadScript(scriptName){
	var script = document.createElement("script")
	script.setAttribute("type","text/javascript")
	script.setAttribute("src", scriptName)
	if (typeof script != "undefined") {
		document.getElementsByTagName("head")[0].appendChild(script)
	}
}