 function fetchObj(loc){
//var output = {path:"unset"};
	console.log(loc);
	if (loc.indexOf("liobj")>0){
		startLi();
	}else{
	
		gatherData(loc, function(data) {
			console.log(data.Key);
			if(data.Key.slice(data.Key.length-4).includes(".obj")){
				//var path = data.Key.substring(0,data.Key.length-4);
				var path = data.Key.substring(loc.length,data.Key.length-4);
				start('../../data/objFiles/',path);
		// eg: threaded three start func
		//  	start('./data/objFiles/','GrainElevator');
			}
		});
//	 console.log(output.path);
//	 return output;
	}
}