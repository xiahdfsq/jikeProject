<?php
// 登录验证
header("Content-Type: application/json; charset=UTF-8");
$con=mysql_connect("localhost","root","");
$adminname=$_REQUEST['adminname'];
 $adminword=$_REQUEST['adminword'];
// $adminname='admin';
// $adminword='123';
if(!$con){
	die('Could not connet:'.mysql_error());
}
	mysql_select_db("newsdata",$con);
    $sql="select * from newadmin";
    mysql_query("set names 'utf-8");
    $result=mysql_query($sql);
    $arr=array();
    while ($row=mysql_fetch_array($result)) {
    	$adminuser= $row['adname'];
    	$adminpass= $row['adpassword'];  	
    }
 if($adminuser==$adminname&&$adminpass==$adminword){
  header("Location: admin.php");
 }else {
 	echo "登录失败";
 }
 mysql_close($con);
?>