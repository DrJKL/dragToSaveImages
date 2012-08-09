(function() {

	function saveImage(e) {
		var filename = this.src.substring(this.src.lastIndexOf("/") + 1);
		e = e ? e : window.event;
		var xhr = new XMLHttpRequest();
		xhr.responseType = 'blob';
		xhr.onload = function() {
			// xhr.response is a Blob
			var url = webkitURL.createObjectURL(xhr.response);
			var a = document.createElement('a');
			a.href = url;
			a.download = filename;
			var e = document.createEvent('MouseEvents');
			e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
			a.dispatchEvent(e);
			window.webkitURL.revokeObjectURL(url);
		};
		xhr.open('GET', this.src);
		xhr.send();
		return false;
	}

	var documentImages = document.images;
	for ( i = 0; i < documentImages.length; ++i)
		documentImages[i].ondragend = saveImage;
})()

