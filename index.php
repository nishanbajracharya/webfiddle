<html>
<head>
	<title>Web Fiddle</title>
	<link rel="stylesheet" type="text/css" href="system/font/font.css">
	<link rel="stylesheet" type="text/css" href="system/style/main.css">

	<script type="text/javascript" src="system/scripts/jquery-1.10.2.js"></script>
	<script type="text/javascript" src="system/scripts/main.js"></script>
</head>
<body oncontextmenu="return false">
	<div id="main">
		<div id="source" class="source">
			<ul>
				<li class="active" id="li-html">HTML</li>
				<li id="li-css">CSS | output.css</li>
				<li id="li-js">JS | output.js</li>
			</ul>
			<div id="textarea">
				<textarea id="html" class="html show" autofocus><?php echo file_get_contents('system/output/output.php') ?></textarea>
				<textarea id="css" class="css hide"><?php echo file_get_contents('system/output/output.css') ?></textarea>
				<textarea id="js" class="js hide"><?php echo file_get_contents('system/output/output.js') ?></textarea>

			</div>
			<button id="button" class="button">Execute Code</button>
			<div id="sidebar" class="sidebar"></div>
		</div>
		<iframe id="output" class="output" src="system/output/output.php"></iframe>
	</div>
</body>
</html>