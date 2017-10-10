function startLi(){
	if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

	var canvasElm, stats;
	var camera, controls, scene, renderer;

	init();
	animate();
}
function init() {
	
	canvasElm=document.getElementById('example');
	
	scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera( 15, window.innerWidth / window.innerHeight, 0.01, 40 );
	camera.position.x = 0.4;
	camera.position.z = -2;
	camera.up.set(0,0,1);

	controls = new THREE.OrbitControls( camera, canvasElm );

	controls.rotateSpeed = 2.0;
	controls.zoomSpeed = 0.3;
	controls.panSpeed = 0.2;
	controls.noZoom = false;
	controls.noPan = false;

	controls.staticMoving = true;
	controls.dynamicDampingFactor = 0.3;
	controls.minDistance = 0.3;
	controls.maxDistance = 0.3 * 100;
	scene.add( camera );

	var axisHelper = new THREE.AxisHelper( 0.1 );
	scene.add( axisHelper );
	renderer = new THREE.WebGLRenderer( { antialias: true, canvas: canvasElm } );
	renderer.setClearColor( 0xffffff, .95);
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	//document.body.appendChild( renderer.domElement );

	var loader = new THREE.PCDLoader();
	loader.load( './data/pcd/RoughSample.pcd', function ( mesh ) {
		scene.add( mesh );
		mesh.material.color.setHex(0x000000);
		mesh.material.needsUpdate = true;
			//var center = mesh.geometry.boundingSphere.center;
			//controls.target.set( center.x, center.y, center.z);
			//controls.update();
	} );
	//container = document.createElement( 'div' );
	//document.body.appendChild( container );
	//container.appendChild( renderer.domElement );
	//window.addEventListener( 'resize', onWindowResize, false );
	//window.addEventListener('keypress', keyboard);
	
	
	$('#feedback').html('Example Data');
}
	function onWindowResize() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize( window.innerWidth, window.innerHeight );
		controls.handleResize();
	}
	function animate() {
		requestAnimationFrame( animate );
		controls.update();
		renderer.render( scene, camera );
	}
