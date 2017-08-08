function start(path, file){

var app = new OBJLoader2Example( document.getElementById( 'example' ) );


	// init three.js example application
	
	var resizeWindow = function () {
		app.resizeDisplayGL();
	};
	var render = function () {
		requestAnimationFrame( render );
		app.render();
	};


	
	window.addEventListener( 'resize', resizeWindow, false );
	console.log( 'Starting initialisation phase...' );
	app.initGL();
	app.resizeDisplayGL();
	app.initPostGL( {
		path: path,
		fileObj: file+'.obj',
		texturePath: path,
		fileMtl: file+'.mtl'
	} );
	render();
}