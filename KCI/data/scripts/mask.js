var mask = document.createElement("canvas")
var maskContext = mask.getContext("2d")

function drawMask(img, x, y, width, height, imgMask){
	mask.width = width
	mask.height = height
	maskContext.clearRect(0, 0, width, height)
	maskContext.globalCompositeOperation = "source-over"
	maskContext.drawImage(imgMask, 0, 0, width, height)
	maskContext.globalCompositeOperation = "source-atop"
	maskContext.drawImage(img, 0, 0, width, height)
	card.drawImage(mask, x, y, width, height)
}