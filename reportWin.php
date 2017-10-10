	<?php
		session_start();
	?>
<!DOCTYPE html>
<html style="width:100%; height: 100%">
<head>
<title>Report</title>
<meta http-equiv="cache-control" content="max-age=0">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="-1">
<meta http-equiv="pragma" content="no-cache">
</head>
<script src="https://sdk.amazonaws.com/js/aws-sdk-2.7.20.min.js"></script>
<script src='js/awsGetS3Data.js'></script>
<script src='js/getReport.js'></script>
<body style="position:relative; width: auto; height: 100%;margin: 3px;">
    <object data="test.pdf" id="refObj" type="application/pdf" width="100%" height= "100%">
        <a id="refPDF" href="<?php echo $_SESSION['dataPrefix'].'test.pdf'; ?>">test.pdf</a>
    </object>
</body>
<script type="text/javascript">
	window.onload = loadReport('<?php echo $_SESSION["dataPrefix"]; ?>');
</script>
</html>
