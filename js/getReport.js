var bucketLoc = "https://s3.amazonaws.com/visualizationsoftware/";
function loadReport(loc){

	gatherData(loc, function(data) {
		var bod = document.getElementById('body');
		console.log(data.Key);
		if(data.Key.charAt(data.Key.length - 1) !== '/'){
			if(data.Key.endsWith(".pdf")){
				document.getElementById("refPDF").href=bucketLoc + data.Key;
				document.getElementById("refObj").data=bucketLoc + data.Key;

				console.log(document.getElementById("refPDF").href);
			}
		}
	});
}