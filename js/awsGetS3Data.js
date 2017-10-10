var imgs;

 var params = {
  Bucket: "visualizationsoftware",
  Delimiter:'/', 
  Prefix: ""
 };
 var conf ={
  accessKeyId:'AKIAI4PD23SRALTHRDJQ',
  secretAccessKey:'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',
  region: 'us-east-1'
  };
 
 var bucketLoc = "https://s3.amazonaws.com/visualizationsoftware/";
 //var to = 'nationwide/minburn1/may152017/hdimages/';  
 
 function test(){
 	var url=new URL(window.location.href);
 	//var bod = document.getElementById('body');

 	var struc = document.createElement("span");
 	struc.innerHTML=url.searchParams.get("structure");

 	var rhs = document.createElement("span");
 	rhs.innerHTML=url.searchParams.get("name");

 	console.log(window.location.href);
 	console.log(url.searchParams.get("name"));
 	console.log(url.searchParams.get("structure"));
 	// bod.appendChild(struc);
 	// bod.appendChild(rhs);
 }

 function generateGallery(to) {	 
	gatherData(to, function(data) {
		var bod = document.getElementById('body');
		console.log(data.Key);
		if(data.Key.charAt(data.Key.length - 1) !== '/'){
			

			if ((data.Key.includes(".hsv."))||(data.Key.includes(".sobel.")) ||data.Key.includes('.nonradiometric.') || data.Key.includes('.digital.') ) {





			}else{
//					0			1				2					3					4				5-0		 5-1
//				sample / Alden / April082017 / structure1 / hdimages / 			0D8A1388 . JPG
				var imgSplit = data.Key.split("/");
				var sp2 = imgSplit[5].split(".");

				var thumb = imgSplit[0] + "/" + imgSplit[1] + "/" + imgSplit[2] + "/" + imgSplit[3] + 
					"/thumb/" + sp2[0] + ".thumb.jpg";

				var thumb1 = imgSplit[0] + "/" + imgSplit[1] + "/" + imgSplit[2] + "/" + imgSplit[3] + 
					"/thumb/" + sp2[0] + ".hd.thumb.jpg";

				var thumb2 = imgSplit[0] + "/" + imgSplit[1] + "/" + imgSplit[2] + "/" + imgSplit[3] + 
					"/thumb/" + sp2[0] + ".radiometric.thumb.jpg";


				
				var domImg = document.createElement("img");
				var div = document.createElement("div");
				
				console.log(data.Key.includes('.digital.') +" "+ data.Key.includes('.nonradiometric.') );
				if (data.Key.includes(".hd.")) {

					div.className = "imgWrap hd";
					domImg.className = "img3 button";
					//domImg.src = bucketLoc + data.Key;
					domImg.src = bucketLoc + thumb1;

					div.style.alignContent="center";
					console.log(div.style.alignContent);
					// div.style.textAlign="center";
					// div.style.verticalAlign= "middle";
					div.onclick = function(){
						window.location.href="fullScreenImg.php?path="+ bucketLoc + data.Key + "&type=filter";
					} 

					//domImg.className = "img3 zoomMouse filtered";
					
				} else{


					div.className = "imgWrap";
					domImg.className = "img3 zoomMouse button";
					div.style.alignContent="center";
					//console.log(div.style.alignContent);
					// div.style.textAlign="center";
					// div.style.verticalAlign= "middle";
					// domImg.style.display="table-cell";
					// console.log(domImg.style.display);
					// domImg.style.textAlign="center";
					// domImg.style.verticalAlign= "middle";
					
					// $(domImg).attr("data-zoom-image",bucketLoc + data.Key);
					// $(domImg).elevateZoom({scrollZoom : true, zoomType	: "lens",
					// constrainType:"height", constrainSize:274, containLensZoom: true, cursor: 'pointer'});

					//console.log(data.Key.includes('digital') +" "+ data.Key.includes('nonradiometric') );

					if(data.Key.includes('.radiometric.')){
						console.log(data.Key+".radiometric.");
						// domImg.src = bucketLoc + data.Key;
						domImg.src = bucketLoc + thumb2;

						div.style.alignContent="center";
						console.log(div.style.alignContent);
						// div.style.textAlign="center";
						// div.style.verticalAlign= "middle";
						// domImg.style.verticalAlign= "middle";
						div.onclick = function(){
						window.location.href="fullScreenImg.php?path="+ bucketLoc + data.Key + "&type=thermal";
					} 

					}else{
						domImg.src = bucketLoc + thumb;
						div.style.alignContent="center";
						console.log(div.style.alignContent);
						// div.style.textAlign="center";
						// div.style.verticalAlign= "middle";
						// domImg.style.verticalAlign= "middle";
						div.onclick = function(){
						window.location.href="fullScreenImg.php?path="+ bucketLoc + data.Key + "&type=hd";
					}
					}
				}

				bod.appendChild(div);
				div.appendChild(domImg);
				
				console.log(domImg.src);
				
				
				// $(domImg).elevateZoom({scrollZoom : true, zoomType	: "lens",lensShape : "round",lensSize    : 200});
				

			}
				

		}
	});


 }





// function generateFolders(to) {	 
// 	gatherData(to, function(data) {
// 		var bod = document.getElementById('body');
// 		console.log(data.Key);
// 		if(data.Key.charAt(data.Key.length - 1) == '/'){
// 				var domImg = document.createElement("img");
// 				var div = document.createElement("div");
// 				bod.appendChild(div);
// 				div.appendChild(domImg);
// 				domImg.src = bucketLoc + data.Key + "thumb.png";
// 				div.innerHTML=data.Key;
				
// 				//put text under img
// 				console.log(domImg.src);
// 				div.className = "imgWrap";
// 				domImg.className = "img3";
// 		}
// 	});
//  }



//Look for Simila
function generateFolders(to) {	
console.log(to); 
	gatherPrefix(to, function(data) {
		var bod = document.getElementById('body');
		console.log(data.Prefix);
		if(data.Prefix.charAt(data.Prefix.length - 1) == '/'){
				var domImg = document.createElement("img");
				var div = document.createElement("div");
				var span = document.createElement("span");
				
				
				bod.appendChild(div);
				div.appendChild(domImg);
				domImg.src = bucketLoc + data.Prefix + "thumb.png";
				//div.innerHTML=data.Prefix;
				div.appendChild(span);
				var locFolder = data.Prefix.substr(to.length,data.Prefix.length);
				console.log(locFolder);
				var lastChars = locFolder.substr(locFolder.length-5).replace("/","");
				console.log(lastChars);
				var checkLastChar = Number.isInteger(lastChars);
				console.log(lastChars);
				console.log(checkLastChar);
				console.log(isNaN(lastChars));

				var folderSplit = data.Prefix.split("/");
					console.log(folderSplit);
					var dateVar = folderSplit[2].split("_");

				console.log(dateVar);
				
				console.log(isNaN(dateVar[2]));
				// if(isNaN(lastChars)){
				if(isNaN(dateVar[2])){


					var namDisp = locFolder.charAt(0).toUpperCase() + locFolder.slice(1).replace("/","");
					// if(namDisp.includes("_")){
						if(namDisp.includes("-")){
						// namDisp=namDisp.replace("_"," ");
						console.log(namDisp);
						namDisp=namDisp.replace("-"," ");
					}else if(namDisp.includes("_")){
						console.log(namDisp);
						namDisp=namDisp.replace("_"," ");
					}
					span.innerHTML=namDisp;
					span.className="pageTitle spanText";

				}else{

					
					if(dateVar[1].includes("01")){
						dateVar[1]="January";
					}else if(dateVar[1].includes("02")){
						dateVar[1]="February";
					}else if(dateVar[1].includes("03")){
						dateVar[1]="March";
					}else if(dateVar[1].includes("04")){
						dateVar[1]="April";
					}else if(dateVar[1].includes("05")){
						dateVar[1]="May";
					}else if(dateVar[1].includes("06")){
						dateVar[1]="June";
					}else if(dateVar[1].includes("07")){
						dateVar[1]="July";
					}else if(dateVar[1].includes("08")){
						dateVar[1]="August";
					}else if(dateVar[1].includes("09")){
						dateVar[1]="September";
					}else if(dateVar[1].includes("10")){
						dateVar[1]="October";
					}else if(dateVar[1].includes("11")){
						dateVar[1]="November";
					}else if(dateVar[1].includes("12")){
						dateVar[1]="December";
					}

					var nameDisplay = dateVar[1]+" "+dateVar[2]+ ", " + dateVar[0];
					// var nameDisplay =  folderSplit[2].charAt(0).toUpperCase()+ folderSplit[2].substr(1,folderSplit[2].length-7)
					// 		+	" " + folderSplit[2].substr(folderSplit[2].length-6, 2) + ", " 
					// 		+	 folderSplit[2].substr(folderSplit[2].length-4, 4);
					console.log(nameDisplay);
					// if(nameDisplay.includes("_")){
					// 	nameDisplay=nameDisplay.replace("_"," ");
					// }
					if(nameDisplay.includes("_")){
						nameDisplay=nameDisplay.replace("_"," ");
					}

					span.innerHTML= nameDisplay;
					span.className="pageTitle spanText";
				}
				
				// if (checkLastChar) {

				// 	span.innerHTML=locFolder.charAt(0).toUpperCase() + locFolder.slice(1).replace("/","");

				// } else {

				// 	span.innerHTML=locFolder.charAt(0).toUpperCase() +locFolder.substr(-4).replace("/","");
				// }


				// div.onclick=function(){regenerate(data.Prefix)};
				// console.log(to.length);
				// console.log(to.indexOf("/"));


				if(to.indexOf("/")==(to.length-1)){
					div.onclick=function(){regenerate(data.Prefix)};
				}else{
			 	div.onclick=function(){
				// 		//window.location("locationHandler.php");
				// 		//window.alert("It Works");
				var dataPrefix=data.Prefix;
				$.post("locationHandler.php", {"dataPrefix":dataPrefix},function(data,status){top.location="viewer.php";});
				// 		window.location.replace("locationHandler.php");


					};
				
				//post("locationHandler.php",{name: dataPrefix});

				}
				
				//put text under img
				//console.log(domImg.src);
				div.className = "imgWrap";
				domImg.className = "img3";
		}
	});
 }

 

function post(path, params, method) {
    method = method || "post"; // Set method to post by default if not specified.

    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);



    for(var key in params) {
        if(params.hasOwnProperty(key)) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", params[key]);

            form.appendChild(hiddenField);
         }
    }

    document.body.appendChild(form);
    form.submit();
}


 function regenerate(loc){

 	// $(".imgWrap").style.display = "none";
 	//
 	document.getElementById('body').innerHTML = "";
 	//$(".imgWrap").style="display :none; ";
 	// document.getElementByClass('imgWrap').style.display='none';
 	generateFolders(loc);

 }

	/**
		USE: to parse data from S3
			Pass the S3 folder path to the location you need and the function that
			will opperate on said data (example above)
			
			input function needs to have a content parameter to accept the key data (String)
	*/
 //  function gatherData(key, operator) {	 
	// var s3 = new AWS.S3(conf);
	// params.Prefix = key;
	// console.log(params.Prefix);
	// s3.listObjects(params, function(err, data) {
	// if (err) console.log(err, err.stack); // an error occurred
	// else  {
	// 	console.log(data);
	// 	console.log(data.Contents);
	// 	data.Contents.map(operator);
	// 	}    
	// });
 // }

   function gatherData(key, operator) {	 
	var s3 = new AWS.S3(conf);
	params.Prefix = key;
	console.log(key);
	s3.listObjects(params, function(err, data) {
	if (err) console.log(err, err.stack); // an error occurred
	else  {
		console.log(data);
		console.log(data.Contents);
		data.Contents.map(operator);
		}    
	});
 }

   function gatherPrefix(key, operator) {	 
	var s3 = new AWS.S3(conf);
	params.Prefix = key;
	console.log(params.Prefix);
	s3.listObjects(params, function(err, data) {
	if (err){
		console.log(err, err.stack);
	}  // an error occurred
	else  {
		console.log(data);
		console.log(data.CommonPrefixes);
		//data.Contents.map(operator);
		data.CommonPrefixes.map(operator);
		}    
	});
 }