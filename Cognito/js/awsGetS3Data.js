var imgs;

var params = {
	Bucket: "visualizationsoftware",
	Delimiter:'/', 
	Prefix: ""
};
 
var bucketLoc = "https://s3.amazonaws.com/" + params.Bucket + "/";
 

function generateGallery(to) {	 
	gatherData(to, function(data) {
		var bod = document.getElementById('body');
		console.log(data.Key);
		if(data.Key.charAt(data.Key.length - 1) !== '/'){
			

			if ((data.Key.includes(".hsv."))||(data.Key.includes(".sobel.")) ||data.Key.includes('.nonradiometric.') || data.Key.includes('.digital.') ) {
				//do nothing
			}else{
//					0			1				2					3					4				5-0		 5-1
//				sample / Alden / April082017 / structure1 / hdimages / 			0D8A1388 . JPG
				var imgSplit = data.Key.split("/");
				var sp2 = imgSplit[5].split(".");

				var thumb = imgSplit[0] + "/" + imgSplit[1] + "/" + imgSplit[2] + "/" + imgSplit[3] + 
					"/thumb/" + sp2[0] + ".thumb.jpg";
				
				var domImg = document.createElement("img");
				var div = document.createElement("div");
				
				console.log(data.Key.includes('.digital.') +" "+ data.Key.includes('.nonradiometric.') );
				if (data.Key.includes(".hd.")) {
					div.className = "imgWrap hd";
					domImg.className = "img3 button";
					domImg.src = bucketLoc + data.Key;
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
					if(data.Key.includes('.radiometric.')){
						console.log(data.Key);
						domImg.src = bucketLoc + data.Key;
						div.style.alignContent="center";
						console.log(div.style.alignContent);
						div.onclick = function(){
							window.location.href="fullScreenImg.php?path="+ bucketLoc + data.Key + "&type=thermal";
						} 
					}else{
						domImg.src = bucketLoc + thumb;
						div.style.alignContent="center";
						console.log(div.style.alignContent);
						div.onclick = function(){
							window.location.href="fullScreenImg.php?path="+ bucketLoc + data.Key + "&type=hd";
						}
					}
				}
				bod.appendChild(div);
				div.appendChild(domImg);
				
				console.log(domImg.src);
				
			}
			
		}
	});
 }


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
			div.appendChild(span);
			var locFolder = data.Prefix.substr(to.length,data.Prefix.length);
			var lastChars = locFolder.substr(locFolder.length-5).replace("/","");
			var checkLastChar = Number.isInteger(lastChars);
			console.log(lastChars);
			console.log(checkLastChar);
			console.log(isNaN(lastChars));
			if(isNaN(lastChars)){
				var namDisp = locFolder.charAt(0).toUpperCase() + locFolder.slice(1).replace("/","");
				if(namDisp.includes("_")){
					namDisp=namDisp.replace("_"," ");
				}
				span.innerHTML=namDisp;
				span.className="pageTitle spanText";
			}else{
				var folderSplit = data.Prefix.split("/");
				var nameDisplay =  folderSplit[2].charAt(0).toUpperCase()+ folderSplit[2].substr(1,folderSplit[2].length-7)
						+	" " + folderSplit[2].substr(folderSplit[2].length-6, 2) + ", " 
						+	 folderSplit[2].substr(folderSplit[2].length-4, 4);
				if(nameDisplay.includes("_")){
					nameDisplay=nameDisplay.replace("_"," ");
				}
				span.innerHTML= nameDisplay;
				span.className="pageTitle spanText";
			}
			if(to.indexOf("/")==(to.length-1)){
					div.onclick=function(){regenerate(data.Prefix)};
			}else{
			 	div.onclick=function(){
					var dataPrefix=data.Prefix;
					$.post("locationHandler.php", {"dataPrefix":dataPrefix},function(data,status){top.location="viewer.php";});
				};
			}
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
 	document.getElementById('body').innerHTML = "";
 	generateFolders(loc);
}

	/**
		USE: to parse data from S3
			Pass the S3 folder path to the location you need and the function that
			will opperate on said data (example above)
			
			input function needs to have a content parameter to accept the key data (String)
	*/
function gatherData(key, operator) {	 
	var s3 = new AWS.S3();
	params.Prefix = key;
	console.log(key);
	s3.listObjects(params, function(err, data) {
	if (err) console.log(err, err.stack); // an error occurred
		else {
			console.log(data);
			console.log(data.Contents);
			data.Contents.map(operator);
		}    
	});
 }

function gatherPrefix(key, operator) {	 
	var s3 = new AWS.S3();
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