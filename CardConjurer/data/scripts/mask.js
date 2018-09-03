var mask = document.createElement("canvas")
var maskContext = mask.getContext("2d")

function drawMask(img, x, y, width, height, imgMask, secondMask, arg) {
	mask.width = width
	mask.height = height
	maskContext.clearRect(0, 0, width, height)
	maskContext.globalCompositeOperation = "source-over"
	if (secondMask.src != undefined) {
		maskContext.drawImage(secondMask, 0, 0, width, height)
		if (arg == "reverseSecond") {
			maskContext.globalCompositeOperation = "source-out"
		} else {
			maskContext.globalCompositeOperation = "source-in"
		}
	}
	maskContext.drawImage(imgMask, 0, 0, width, height)
	maskContext.globalCompositeOperation = "source-in"
	if (img.src == undefined) {
		maskContext.fillStyle = img
		maskContext.fillRect(0, 0, width, height)
	} else {
		maskContext.drawImage(img, 0, 0, width, height)
	}
	card.drawImage(mask, x, y, width, height)
}