//Create canvas for cropping the image
        var cropCanvas = document.createElement("canvas")
        var cropContext = cropCanvas.getContext("2d")
        cropCanvas.onload = function() {
            //document.body.appendChild(cropCanvas) //For testing purposes only
        }
        //Function that auto crops the image
        function autocrop(url, destination) {
            //Create image, size canvas, draw image
            var imgTempSetSymbol = new Image()
            imgTempSetSymbol.src = url
            imgTempSetSymbol.onload = function() {
                if (imgTempSetSymbol.width > 0 && imgTempSetSymbol.height > 0) {
                cropCanvas.width = imgTempSetSymbol.width
                cropCanvas.height = imgTempSetSymbol.height
                cropContext.drawImage(imgTempSetSymbol, 0, 0)
                //declare variables
                var width = cropCanvas.width
                var height = cropCanvas.height
                var pix = {x:[], y:[]}
                var imageData = cropContext.getImageData(0,0,cropCanvas.width,cropCanvas.height)
                var x, y, index
                //Go through every pixel and
                for (y = 0; y < height; y++) {
                    for (x = 0; x < width; x++) {
                        //(y * width + x) * 4 + 3 calculates the index at which the alpha value of the pixel at x, y is given
                        index = (y * width + x) * 4 + 3
                        if (imageData.data[index] > 0) {
                            //pix is the image object that stores two arrays of x and y coordinates. These stored coordinates are all the visible pixels
                            pix.x.push(x)
                            pix.y.push(y)
                        }
                    }
                }
                //sorts the arrays numerically
                pix.x.sort(function(a,b){return a-b})
                pix.y.sort(function(a,b){return a-b})
                var n = pix.x.length - 1
                //Finds the difference between the leftmost and rightmost visible pixels, and the topmost and bottommost pixels, cuts out a section of the canvas
                width = pix.x[n] - pix.x[0]
                height = pix.y[n] - pix.y[0]
                var cropped = cropContext.getImageData(pix.x[0], pix.y[0], width + 1, height + 1)
                //Resizes the canvas and draws cropped image
                cropCanvas.width = width
                cropCanvas.height = height
                cropContext.putImageData(cropped, 0, 0)
                //Saves the newly cropped image to the given image
                destination.src = cropCanvas.toDataURL()
            }
        }
        }
