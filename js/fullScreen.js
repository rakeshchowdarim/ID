function populate(path, type) {


	console.log(path);
	console.log(type);
	var imgSplit = path.split("/");
	console.log(imgSplit);
				

				if(type=="hd") {
				

				var sp2 = imgSplit[9].split(".");
				var thumb = imgSplit[0] + "/" + imgSplit[1] + "/" + imgSplit[2] + "/" + imgSplit[3] +"/" + imgSplit[4] +
				"/" + imgSplit[5]+ "/" + imgSplit[6]+ "/" + imgSplit[7]+ "/thumb/" + sp2[0] + ".thumb.jpg";
					$("#fullScreen").attr("src",thumb);
					$("#fullScreen").attr("data-zoom-image",path);


				}else if (type=="filter") {
					$("#fullScreen").attr("src",path);
					$("#fullScreen").attr("data-zoom-image",path);
					var imgSplit = path.split("/");
					var filtSplit = imgSplit[9].split(".");
					var pre = imgSplit[0] + "/" + imgSplit[1] + "/" + imgSplit[2] + "/" + imgSplit[3]
								+"/" + imgSplit[4] + "/" + imgSplit[5] + "/" + imgSplit[6]
								+ "/" + imgSplit[7]+ "/" + imgSplit[8]+ "/" + filtSplit[0] + ".";
					var post ="."+filtSplit[2] ;




					var a1=document.createElement("a");
					var img1=document.createElement("img");

					a1.appendChild(img1);
					a1.className="elevatezoom-gallery active";
					$(a1).attr("data-image",pre+"hd"+post);
					$(a1).attr("data-zoom-image",pre+"hd"+post);
					$(img1).attr("src",pre+"hd"+post);


					var a2=document.createElement("a");
					var img2=document.createElement("img");
					a2.appendChild(img2);
					a2.className="elevatezoom-gallery";
					$(a2).attr("data-image",pre+"sobel"+post);
					$(a2).attr("data-zoom-image",pre+"sobel"+post);
					$(img2).attr("src",pre+"sobel"+post);

					var a3=document.createElement("a");
					var img3=document.createElement("img");
					a3.appendChild(img3);
					a3.className="elevatezoom-gallery";
					$(a3).attr("data-image",pre+"hsv"+post);
					$(a3).attr("data-zoom-image",pre+"hsv"+post);
					$(img3).attr("src",pre+"hsv"+post);

					$("#gallery").append(a1);
					$("#gallery").append(a2);
					$("#gallery").append(a3);
					




				} else if(type=="thermal"){

					$("#fullScreen").attr("src",path);
					$("#fullScreen").attr("data-zoom-image",path);

				}

}

// <a class="elevatezoom-gallery active"  data-zoom-image="img/0D8A3214.JPG" data-image="img/0D8A3214.JPG">
// 		<img id="f1" src="img/0D8A3214.JPG">
// 	</a>
// 	<a class="elevatezoom-gallery"  data-zoom-image="img/0D8A3215.JPG" data-image="img/0D8A3215.JPG">
// 		<img id="f2" src="img/0D8A3215.JPG">
// 	</a>
// 	<a  class="elevatezoom-gallery" data-zoom-image="img/0D8A3216.JPG" data-image="img/0D8A3216.JPG">
// 		<img id="f3" src="img/0D8A3216.JPG">
// 	</a>
// 	<a  class="elevatezoom-gallery" data-zoom-image="img/0D8A3217.JPG" data-image="img/0D8A3217.JPG">
// 		<img id="f4" src="img/0D8A3217.JPG">
// 	</a>