function populateImgs(path) {
	createImg(path,"hd");
	createImg(path,"sobel");
	createImg(path,"hsv");
	
	
	$(".zoomMouse").elevateZoom({scrollZoom : true, zoomType	: "lens",
					constrainType:"height", constrainSize:274, containLensZoom: true, cursor: 'pointer'});
	

}

function createImg(path, filterId){

	var imgSrc = path.split(".");
	var newImgSrc = imgSrc[0]+"."+imgSrc[1]+"."+imgSrc[2]+"."+filterId+"."+imgSrc[4];
	// body...
	var bod = document.getElementById('imgHolder');
	var domImg = document.createElement("img");
	var div = document.createElement("div");
	domImg.style.verticalAlign= "middle";
	div.className = "imgWrap";
	domImg.className = "img3 zoomMouse";
	bod.appendChild(div);
				div.appendChild(domImg);
				domImg.src = newImgSrc;
				$(domImg).attr("data-zoom-image",newImgSrc);
				//console.log(domImg.src);
				
}