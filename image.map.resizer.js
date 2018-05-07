/*
* Copyright (c) 2018 Vikas Dwivedi
* Licensed under the MIT license
*/

(function (global) {
 
	window.rwdImageMap = function () {
	var	imagesWithMaps = global.document.querySelectorAll('img[usemap]');
	for(var image of imagesWithMaps)
	{
		var tempImage =  new Image();
			tempImage.src = image.src;
			tempImage.onload = function () {
				let tempWidth =  this.width,
				tempHeight = this.height,
				wPercent = image.width /100,
				hPercent = image.height/100,
				map = image.getAttribute('usemap').replace('#', ''),
				cname = 'ogcoords',
				imgMapAreas =  global.document.querySelectorAll('map[name="' + map + '"] > area');
				
				for(imgArea of imgMapAreas)
				{
				 	imgArea.getAttribute(cname) || imgArea.setAttribute('ogcoords', imgArea.getAttribute('coords'));
					if(imgArea.getAttribute(cname))
					{
						let coords = imgArea.getAttribute(cname).split(','),
						cpercent = new Array(coords.length);
						for(let i = 0; i <coords.length; i++)
						{
							cpercent[i] = (i % 2 == 0) ? parseInt(((coords[i] / tempWidth) * 100) * wPercent) :
							parseInt(((coords[i] / tempHeight) * 100) * hPercent);
						}
						imgArea.setAttribute('coords', cpercent.toString());
					}	
				}			
			};
 }
}
})(window);

window.addEventListener('resize', rwdImageMap);
