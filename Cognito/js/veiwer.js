function sidebarLeft(id) {
	console.log(id);
	console.log($('#canvas').attr('id'));
	console.log((id == $('#canvas').attr('id')));
	console.log($('#report').attr('id'));
	console.log((id == $('#report').attr('id')));
	console.log($('#images').attr('id'));
	console.log((id == $('#images').attr('id')));
	
	if (id == $('#canvas').attr('id')) {
	console.log(id);
		$('.iFrame').attr("scrolling", "no");
		$('.r').show();
		$('.f').show();
		//var objLoc = $("#canvas").attr('name')+$("#footer").attr("name")+"/"+$("#rhs").attr("name")+"obj/";
		//var objLoc1=fetchObj(objLoc);
		//$("#footer").attr("name",objLoc1.path);
		//console.log(objLoc1.path);
	} else if (id == $('#report').attr('id')) {
	console.log(id);
		$('.iFrame').attr("scrolling", "no");
		$('.r').hide();
		$('.f').hide();
	} else if (id == $('#images').attr('id')){
	console.log(id);
		$('.iFrame').attr("scrolling", "yes");
		$('.r').show();
		$('#li').hide();
		$('.f').show();
	}
	
}
function frameFocus(frame) {
	var structure = $("#footer").attr("name");
	var rhs = $("#rhs").attr("name");

	var iFrame = document.getElementById("frame");
	var header = document.getElementById("pageName");
	iFrame.src = frame + ".php?structure="+ structure + "&name=" + rhs;
	
	//pageName.innerHTML = frame;

	
	
}

function makeFocus(id, to) {
	var me = document.getElementById(id);
	console.log(id);
	if ($(me).hasClass('l')){ 
		$('.l').removeClass('focused');
		$('.r').removeClass('focused');
		$('#hd').addClass('focused');
		$("#rhs").attr("name","hd");
		sidebarLeft(id);
		frameFocus(to);
	} else if ($(me).hasClass('r')) {
		$('.r').removeClass('focused');
		// me.parent.name=me.id;
		$("#rhs").attr("name",$(me).attr("id"));
		frameFocus($('#frame').attr("src").split(".",1));
	} else if ($(me).hasClass('f')) {
		$('.f').removeClass('focused');
		$("#footer").attr("name",$(me).attr("id"));
		frameFocus($('#frame').attr("src").split(".",1));
	}
	$(me).addClass('focused');
	$('.fi').removeClass('focused');
	
}

function radioFilter(idFilter){

	var me = document.getElementById(idFilter);
	if ($(me).hasClass('focused')){
		$('.fi').removeClass('focused');
		document.getElementById('frame').contentWindow.generateFilters("hd");
		document.getElementById('frame').contentWindow.hideShowFilteredImages("hd");
	}else{

		$('.fi').removeClass('focused');
		$(me).addClass('focused');
		document.getElementById('frame').contentWindow.generateFilters(idFilter);
		document.getElementById('frame').contentWindow.hideShowFilteredImages(idFilter);
		
	}
}

function backButtonDisplay(){


document.getElementById("back").style.visibility = "hidden";

var frameId=document.getElementById("frame");
console.log(frameId.contentWindow.location.href);
if(frameId.contentWindow.location.href.includes("fullScreenImg.php")){
	console.log("If Part");
	// console.log(frameId.contentWindow.location.href);
	document.getElementById("back").style.visibility = "visible";
}else if(frameId.contentWindow.location.href.includes("ImageBlock.php")){
	console.log("Else  if Part");
	
document.getElementById("back").style.visibility = "hidden";
}else{
	console.log("Else Part");
	document.getElementById("back").style.visibility = "hidden";
}

}


