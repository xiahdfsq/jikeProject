<?php
header('Content-type: application/json;charset=utf-8');
require_once 'lib/mysqlCon.php';
$ql="select * from newslist" ;
$result=mysql_query($ql);
$arr=array();
while($row=mysql_fetch_assoc($result))//将result结果集中查询结果取出一条 
  { 
  	array_push($arr,array("newstitle"=>$row['newstitle']
  	,"newsmaker"=>$row['newsmaker'],"addtime"=>$row['addtime'],
  	"newsimg"=>$row['newsimg'],"newscontent"=>$row['newscontent']));  
 }
echo json_encode($arr);
mysql_close($con);  

?>
