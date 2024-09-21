/*
* Copyright (c) 2034 Vikas Dwivedi
* Licensed under the MIT license
*/

(function() {
	/**
	 * Resize image map given an image element.
	 *
	 * @param {HTMLImageElement} img - Image element.
	 */
	function resizeImageMap(img) {
		// useMap property indicates if image has an associated image map.
		if (typeof img.useMap === 'string' && img.useMap !== '') {
			var map = document.querySelector('map[name="' + img.useMap.split('#')[1] + '"]');
			
			// Continue only if map exists.
			if (map) {
				var originalWidth = img.getAttribute('orgWidth');
				var originalHeight = img.getAttribute('orgHeight');

				// Continue only if both original width and height are provided.
				if (originalWidth && originalHeight) {
					var areas = map.getElementsByTagName('area');

					for (var i = 0; i < areas.length; ++i) {
						var originalCoords = areas[i].getAttribute('coords');

						// Continue only if original coordinates are provided. 
						if (originalCoords) {
							var coords = originalCoords.split(',').map(function(coord) {
								return Math.round(parseFloat(coord) * (coord.indexOf('%') !== -1 ? 0.01 : 1));
							});
							
							areas[i].coords = coords.map(function(coord, index) {
								// Scale coordinate using ratio of current width/height to original width/height.
								return coord * (index % 2 === 0 ? img.offsetWidth / originalWidth : img.offsetHeight / originalHeight);
							}).join(',');
						}
					}
				}
			}
		}
	}

	// Add event listener for `load` event.
	window.addEventListener('load', function() {
		// Get all the image elements.
		var imgs = document.getElementsByTagName('img');
		
		for (var i = 0; i < imgs.length; ++i) {
			resizeImageMap(imgs[i]);
		}

		// Add event listener for `resize` event.
		window.addEventListener('resize', function() {
			for (var i = 0; i < imgs.length; ++i) {
				resizeImageMap(imgs[i]);
			}
		});
	});
})();
