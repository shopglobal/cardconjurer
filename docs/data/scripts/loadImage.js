function loadImage(event, destination, arg) {
	if (arg != false) {
		var input = event.target
		var reader = new FileReader()
		reader.onload = function() {
			var dataURL = reader.result
			destination.src = dataURL
		}
		reader.readAsDataURL(input.files[0])
	}
}