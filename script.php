<?php
$file = fopen("system/output/output.php","w");
fwrite($file,$_POST['htmldata']);
fclose($file);
$file = fopen("system/output/output.css","w");
fwrite($file,$_POST['cssdata']);
fclose($file);
$file = fopen("system/output/output.js","w");
fwrite($file,$_POST['jsdata']);
fclose($file);
?>