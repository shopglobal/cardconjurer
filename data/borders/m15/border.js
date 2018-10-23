//M15 Border
//Anything to do with...
//Card Title
var titleFont = "40px belerenb"
var titleFontSpacing = "0.15px"
var titleX = 62
var titleY = 56
//Mana Cost
var manaCostRadius = 17.5
var manaCostX = 657
var manaCostY = 59
//Card Type
var typeFont = "33.5px belerenb"
var typeFontSpacing = "0.05px"
var typeX = 62
var typeY = 595
//Rules/Flavor Text
var textFont = "px mplantin"
var textFontSpacing = 1.3
var textX = 66
var textY = 656
var textWidth = 682
//Power Toughness
var ptFont = "39px belerenb"
var ptFontSpacing = "0.3px"
var ptTextX = 645
var ptTextY = 936
var ptX = 571
var ptY = 929
var ptWidth = 137
var ptHeight = 75
//Bottom Info
var eighthInfo = false
var eighthInfoY = 992
var m15Info = true
var m15InfoY = 993
//Set Symbol
var setSymbolY = 616
var setSymbolRight = 693
var setSymbolWidth = 77
var setSymbolHeight = 44
//Watermark
var watermarkWidth = 520
var watermarkHeight = 250
var watermarkY = 805
//Rare Stamp
var rareStampY = 958
//Color Options
loadColors("white-White,whiteLand-White Land,blue-Blue,blueLand-Blue Land,black-Black,blackLand-Black Land,red-Red,redLand-Red Land,green-Green,greenLand-Green Land,gold-Gold,goldLand-Gold Land,colorless-Colorless,colorlessLand-Colorless Land,artifact-Artifact,vehicle-Vehicle")
document.getElementById("secondColorSelection").innerHTML = document.getElementById("colorSelection").innerHTML
document.getElementById("thirdColorSelection").innerHTML = document.getElementById("colorSelection").innerHTML
//Other
legendaryBorder = true
stampBorder = true
nyxBorder = true
miracleBorder = true
flipBorder = true
//With all the new values in place, the program will update it's border images
updateBorder()
//Any special functions go at the bottom