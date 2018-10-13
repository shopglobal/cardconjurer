//loadColors("white-White,blue-Blue,colorlessLand-Colorless Land,gold-Gold")
function loadColors(colors) {
	var endResult = ""
	var colorList = colors.split(",")
	for (i = 0; i < colorList.length; i++) {
		endResult += "<option value='" + colorList[i].split("-")[0] + "'>" + colorList[i].split("-")[1] + "</option>"
	}
	document.getElementById("colorSelection").innerHTML = endResult
}