
<!DOCTYPE html>
<html style="width: 100%;height: 100%;">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
		<meta http-equiv="cache-control" content="max-age=0">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="-1">
<meta http-equiv="pragma" content="no-cache">
<title> Canvas Test </title>
		<style>
		body {
				font-family: Monospace;
				background-color: #000;
				overflow:hidden;
				color: #fff;
				width: 100%;
				height: 100%;
				margin: 0 0 0 0;
				padding: 0 0 0 0;
				border: none;
				cursor: default;
			}
			#glFullscreen {
				width: 100%;
				height: 100%;
				position: relative;
				overflow: hidden;
				z-index: 0;
			}
			#example {
				width: 100%;
				height: 100%;
				top: 0;
				left: 0;
				background-color: #000000;
			}
			#info {
				color: #777;
				position: fixed;
				bottom: 50px;
				width: 100%;
				height: 20px;
				text-align: center;
				z-index: 100;
				display:block;
			}
			#info a {
				color: #f00;
				font-weight: bold;
				text-decoration: underline;
				cursor: pointer
			}
			#feedback {				
				color: darkorange;
			}
		</style>
	</head>
<body>
	<div id="glFullscreen">
		<canvas id="example"></canvas>
	</div>
	
	<div id="info">
		<!--<a href="http://threejs.org" target="_blank" rel="noopener">three.js</a> - OBJLoader2 direct loader test -->
		<div id="feedback">Setting Up</div>
	</div>

<script src="/Three/build/three.js"></script>
<script src="/Three/examples/js/Detector.js"></script>

<script src="/Three/examples/js/controls/OrbitControls.js"></script>
<script src="/Three/examples/js/loaders/MTLLoader.js"></script>
<script src="/Three/examples/js/loaders/OBJLoader2.js"></script>
<script src="/Three/examples/js/loaders/WWOBJLoader2.js"></script>

<script src="https://sdk.amazonaws.com/js/aws-sdk-2.7.20.min.js"></script>
<script src="http://code.jquery.com/jquery-1.11.2.min.js"></script>
 <? /*<script src="htmlJavascript/ThreeDimVisMouse.js"></script>*/ ?>
<script src="js/webLoader2.js"></script>
 <script src="js/threadedThree2.js"></script>


<script>
	window.onload = function () {
  	start('./data/objFiles/','GrainElevator');
	
  }
  

  </script>
</body>
</html>