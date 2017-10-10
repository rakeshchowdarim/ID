function formatName(folderPath) {

	var folderSplit = folderPath.split("/");
	console.log(folderSplit);
	var dateVar = folderSplit[2].split("_");
	console.log(dateVar);
	

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

	console.log(dateVar[1]);

	var nameDisplay = folderSplit[1].charAt(0).toUpperCase() + folderSplit[1].slice(1) + " - "
							+	dateVar[1]+" "+dateVar[2]+ ", " + dateVar[0];
console.log(nameDisplay);
	if(nameDisplay.includes("_")){
		nameDisplay=nameDisplay.replace("_"," ");
	}
	// }else if(nameDisplay.includes("-")){
	// 	nameDisplay=nameDisplay.replace("-"," ");
	// }
	
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