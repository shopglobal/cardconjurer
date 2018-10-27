//Default Border
//Sets the correct values to anything that may have been changed from an out of the ordinary border
var eighthInfo = false
var m15Info = false
var legendaryBorder = false
var nyxBorder = false
var miracleBorder = false
var stampBorder = false
var flipBorder = false
titleRightShift = 0
typeRightShift = 0
//Loads the correct border data
borderPath = "data/borders/" + document.getElementById("borderSelection").value
loadScript(borderPath + "border.js")