<?php
header('Content-type: application/json;charset=utf-8');
require_once 'lib/mysqlCon.php';
$ql="select * from newsbaijia" ;
$result=mysql_query($ql);
$arr=array();
while($row=mysql_fetch_assoc($result))//将result结果集中查询结果取出一条 
  { 
  	array_push($arr,array("baijiatitle"=>$row['baijiatitle']
  	,"baijiamaker"=>$row['baijiamaker'],"baijiatime"=>$row['baijiatime'],
  	"baijiaimg"=>$row['baijiaimg'],"baijiacontent"=>$row['baijiacontent']));  
 }
echo json_encode($arr);
mysql_close($con);  

?>
