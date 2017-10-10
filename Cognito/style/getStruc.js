function generateStructures(to){
 	console.log(to); 
	gatherPrefix(to, function(data) {
		var foot = document.getElementById('footer');
		console.log(data.Prefix);
		if(data.Prefix.charAt(data.Prefix.length - 1) == '/'){
			var locFolder = data.Prefix.substr(to.length,data.Prefix.length);

			if (locFolder.includes('extras')) {}else{

				//var div = document.createElement("div");
				var span = document.createElement("a");
				foot.appendChild(span);
				
				var strucName = locFolder.charAt(0).toUpperCase() + locFolder.slice(1).replace("/","");
				var strucBase = locFolder.charAt(0)+locFolder.slice(1).replace("/","");
				span.onclick=function(){
					console.log(strucName);
					// makeFocus(this.id, strucName);
					makeFocus(strucBase, strucBase);

				
				};
				console.log(foot.childElementCount);
				if(foot.childElementCount <= 1){
					$("#footer").attr("name",strucBase);
					span.id=strucBase;
					
					span.innerHTML=strucName;
					span.className = "f button focused footer-margin";
				}else {
					span.className = "f button footer-margin";
					span.id=strucBase;
					span.innerHTML=strucName;
				}
				//span.className = "imgWrap f focused button ";
			}
		}
	});
	//frameFocus("canvas");
}

function getVars() {
	var structure = $("#footer").attr("name");
	var rhs = $("#rhs").attr("name");
		document.getElementById("frame").src="canvas.php?structure="+ structure + "&name=" + rhs;
		// body...
}