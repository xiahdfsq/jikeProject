<?php 
header('Content-type: application/json;charset=utf-8');
$con=mysql_connect("localhost","root","");
mysql_select_db("newsdata",$con);
mysql_query("set names'utf8'");
 ?>