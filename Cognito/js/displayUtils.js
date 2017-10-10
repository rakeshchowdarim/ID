function formatName(folderPath) {

	var folderSplit = folderPath.split("/");
	var nameDisplay = folderSplit[1].charAt(0).toUpperCase() + folderSplit[1].slice(1) + " - "
							+	folderSplit[2].charAt(0).toUpperCase()+ folderSplit[2].substr(1,folderSplit[2].length-7)
							+	" " + folderSplit[2].substr(folderSplit[2].length-6, 2) + ", " 
							+	 folderSplit[2].substr(folderSplit[2].length-4, 4);
console.log(nameDisplay);
	if(nameDisplay.includes("_")){
		nameDisplay=nameDisplay.replace("_"," ");
	}
	
	document.getElementById('pageName').style.color= "white";

	//document.getElementById('pageNameText').style.font= "Calibri";
	//document.getElementById('pageName').style.font-family= Calibri;
	//document.getElementById('pageName').style.font-style= "italic";
	// document.getElementById('pageName').style.transform ="scale3d(1.5,1.5,1.5)";
	// document.getElementById('pageName').style.animation  ="mynewmove 4s infinite";

	document.getElementById('pageName').innerHTML= nameDisplay;

	// body...

	// nationwide/macksburg/may182017/
}