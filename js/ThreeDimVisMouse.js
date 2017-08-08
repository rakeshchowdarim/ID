

/* 3d visualiser web backend
*	Code by Samuel@infradronellc.com
*	snippets taken from Steve Kautz (Iowa State University).
*	
*/

var axis = 'z';
var paused = false;
var camera;


/*
//translate keypress events to strings
//from http://javascript.info/tutorial/keyboard-events
function getChar(event) {
if (event.which == null) {
 return String.fromCharCode(event.keyCode) // IE
} else if (event.which!=0 && event.charCode!=0) {
 return String.fromCharCode(event.which)   // the rest
} else {
 return null // special key
}
}

function cameraControl(c, ch)
{
  var distance = c.position.length();
  var q, q2;
  
  switch (ch)
  {
  // camera controls
  case 'w':
    c.translateZ(-0.1);
    return true;
  case 'a':
    c.translateX(-0.1);
    return true;
  case 's':
    c.translateZ(0.1);
    return true;
  case 'd':
    c.translateX(0.1);
    return true;
  case 'r':
    c.translateY(0.1);
    return true;
  case 'f':
    c.translateY(-0.1);
    return true;
  case 'j':
    // need to do extrinsic rotation about world y axis, so multiply camera's quaternion
    // on left
    q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0),  5 * Math.PI / 180);
    q2 = new THREE.Quaternion().copy(c.quaternion);
    c.quaternion.copy(q).multiply(q2);
    return true;
  case 'l':
    q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0),  -5 * Math.PI / 180);
    q2 = new THREE.Quaternion().copy(c.quaternion);
    c.quaternion.copy(q).multiply(q2);
    return true;
  case 'i':
    // intrinsic rotation about camera's x-axis
    c.rotateX(5 * Math.PI / 180);
    return true;
  case 'k':
    c.rotateX(-5 * Math.PI / 180);
    return true;
  case 'O':
    c.lookAt(new THREE.Vector3(0, 0, 0));
    return true;
  case 'S':
    c.fov = Math.min(80, c.fov + 5);
    c.updateProjectionMatrix();
    return true;
  case 'W':
    c.fov = Math.max(5, c.fov  - 5);
    c.updateProjectionMatrix();
    return true;

    // alternates for arrow keys
  case 'J':
    //this.orbitLeft(5, distance)
    c.translateZ(-distance);
    q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0),  5 * Math.PI / 180);
    q2 = new THREE.Quaternion().copy(c.quaternion);
    c.quaternion.copy(q).multiply(q2);
    c.translateZ(distance);
    return true;
  case 'L':
    //this.orbitRight(5, distance)  
    c.translateZ(-distance);
    q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0),  -5 * Math.PI / 180);
    q2 = new THREE.Quaternion().copy(c.quaternion);
    c.quaternion.copy(q).multiply(q2);
    c.translateZ(distance);
    return true;
  case 'I':
    //this.orbitUp(5, distance)      
    c.translateZ(-distance);
    c.rotateX(-5 * Math.PI / 180);
    c.translateZ(distance);
    return true;
  case 'K':
    //this.orbitDown(5, distance)  
    c.translateZ(-distance);
    c.rotateX(5 * Math.PI / 180);
    c.translateZ(distance);
    return true;
  }
  return false;
}

function handleKeyPress(event)
{
  var ch = getChar(event);
  if (cameraControl(camera, ch)) return;
}

*/
// function parseHtml()
//   {
//     var parameters = location.search.substring(1).split("&");
//     var temp = parameters[0].split("=");
//     return unescape(temp[1]);
//  }

  // function parseHtml(){
  // var url= new URL(window.location.href);.path
  //var bod = document.getElementById('body');

  // var struc = document.createElement("span");
  // struc.innerHTML=url.searchParams.get("structure");

  // var rhs = document.createElement("span");
  // rhs.innerHTML=url.searchParams.get("name");

  // console.log(window.location.href);
  // console.log(url.searchParams.get("name"));
  // console.log(url.searchParams.get("structure"));



  //return [url.searchParams.get("name"),url.searchParams.get("structure")];
  // bod.appendChild(struc);
  // bod.appendChild(rhs);
 //}

function start(webRef)
{
  

  //window.onkeypress = handleKeyPress;
  // var sNum = parseHtml();
  // var bucketLoc = "https://s3.amazonaws.com/visualizationsoftware/";
  // //alert("sNum is: " + sNum);
  var fileName=webRef;
  // fileName = sNum[1];
  console.log(fileName);

  var scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera( 45, 1.5, 0.1, 1000 );
  camera.position.x = 5;
  camera.position.y = 0;
  camera.position.z = 5;
  camera.lookAt(new THREE.Vector3(0, 0, 0));
  
  
  var ourCanvas = document.getElementById('theCanvas');
  var renderer = new THREE.WebGLRenderer({canvas: ourCanvas});
  renderer.setClearColor(0xffffff, .95);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.BasicShadowMap;
  
  // comp
  
  controls = new THREE.OrbitControls( camera, renderer.domElement );
  controls.rotateSpeed = 1.0;
  controls.zoomSpeed = 1.2;
  controls.panSpeed = 0.2;
 
  controls.noZoom = false;
  controls.noPan = false;
 
  controls.staticMoving = false;
  controls.dynamicDampingFactor = 0.3;
 
  controls.minDistance = 1.1;
  controls.maxDistance = 100;
 
  controls.keys = [ 16, 17, 18 ];

  var light0, light1;
  
  var loader = new THREE.TextureLoader();
  var material = new THREE.MeshPhongMaterial({ color: 0x81a8aa, specular: 0x222222, shininess: 50, shading: THREE.SmoothShading } );
  
  var object1;
  var cone = new THREE.ConeGeometry(1, 3, 20);
  
  object1 = new THREE.Mesh(cone, material);
  object1.castShadow = true;
  object1.receiveShadow = true;
//  scene.add(object1);
  
  //  $( ".strBtn" ).click(function() {
  //   $( ".strBtn" ).css('background', 'red');
  // });


// var b1=document.getElementById.("str1");
// var b2=document.getElementById.("str2");
// var b3=document.getElementById.("str3");
// var b4=document.getElementById.("str4");

// b1.onclick = function() {
//      b1.style.background = "#FDC300";
//      b2.style.background = "#32CCBD";
//      b3.style.background = "#32CCBD";
//      b4.style.background = "#32CCBD";   
// }

// b2.onclick = function() {
//      b1.style.background = "#32CCBD";
//      b2.style.background = "#FDC300";
//      b3.style.background = "#32CCBD";
//      b4.style.background = "#32CCBD";   
// }

// b3.onclick = function() {
//      b1.style.background = "#32CCBD";
//      b2.style.background = "#32CCBD";
//      b3.style.background = "#FDC300";
//      b4.style.background = "#32CCBD";   
// }

// b4.onclick = function() {
//      b1.style.background = "#32CCBD";
//      b2.style.background = "#32CCBD";
//      b3.style.background = "#32CCBD";
//      b4.style.background = "#FDC300";   
// }



  //var fileName;
  
  // fileName = webRef + sNum[1] +"/"+ sNum[0]+"Obj/";
  //var fileName = webRef;
  //var filePath="";

  //var filePath = webRef + sNum[1] +"/"+ sNum[0]+"Obj/";







//var filePath = "data/objFiles/";
//var fileName = "Loc1OrthoInspireLenoxZone2_Center";


//   var struct1 = document.getElementById("str1");
//   var struct2 = document.getElementById("str2");
//   var struct3 = document.getElementById("str3");
//   var struct4 = document.getElementById("str4");


// if(struct2.onclick == true){
//   var filePath = "data/objFiles/";
//   var fileName = "DallasCenterRadial1_center";
// }else if (struct3.onclick == true) {
// var filePath = "data/objFiles/";
//   var fileName = "Loc1OrthoInspireLenoxZone2_Center";
// } else if (struct4.onclick == true){
//   var filePath = "data/objFiles/";
//   var fileName = "Minburn_skinnedB";
// }else {
//   var filePath = "data/objFiles/";
//   var fileName = "Minburn_skinnedB";
// }
	//var filePath = "data/objFiles/";
//alert(fileName);
var objLoc = "/dynamic/data/objFiles/";
console.log(fileName);
 var mtlLoader = new THREE.MTLLoader();
 mtlLoader.setPath(objLoc);
 mtlLoader.load(fileName+".mtl", function(mtlMaterials){
	  mtlMaterials.preload();
	  var objLoader = new THREE.OBJLoader();
	  objLoader.setMaterials(mtlMaterials);
	  objLoader.setPath(objLoc);
	  objLoader.load(fileName+".obj", function(object) {
		  //object.position.y = -95;
		  //object.rotateX(-90 * Math.PI / 180);
		  object.scale.setScalar(.05);
		  scene.add(object);
	  });
 }); 
 
  //Add Lights to scene
  light0 = new THREE.AmbientLight(0x555555, .7);
  scene.add(light0);
  
  
  light1 = new THREE.PointLight(0xffffff, 1.0);
  light1.castShadow = true;
  light1.shadow.camera.near = 1;
  light1.shadow.camera.far = 30;
  light1.shadow.bias = .01;
  light1.position.set(-10, 10, -4); //xyz
  scene.add(light1);
  
  var rotation = 0;
  var increment = 0.01;
  
  var resize = function() {
		
    var w = window.innerWidth;
		//var w = ourCanvas.clientWidth *  1;
		ourCanvas.width = w;
		
		var h = window.innerHeight;
    //var h = ourCanvas.clientHeight *  1;
		ourCanvas.height = h;
		renderer.setViewport(0,0,w, h);
		renderer.setSize(w, h);

    ourCanvas.width=w;
    ourCanvas.height=h;

		camera.aspect = (w / h);
		camera.updateProjectionMatrix();
	  };
  
  var render = function () {
    resize();
	requestAnimationFrame( render );
	controls.update();
	//animate
     renderer.render(scene, camera);
  };
  render();
}

