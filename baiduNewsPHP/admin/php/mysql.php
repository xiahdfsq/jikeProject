<?php
// 将后台编辑的新闻内容插入到数据库中
header("Content-type: application/json;charset=utf-8");
//header("Cache-control:max-age=0");
//sleep(1);
$con=mysql_connect("localhost","root","");
if(!$con){
	die('Could not connet:'.mysql_error());
}else{
    // 推举类目新闻插入
    mysql_select_db("newsdata",$con);
    $newstitle = $_REQUEST['newstitle'];
    $newsmaker=$_REQUEST['newsmaker'];
    $addtime=$_REQUEST['addtime'];
    $newsimg=$_REQUEST['newsimg'];
    $newscontent=$_REQUEST['newscontent'];
    $sql="INSERT INTO `newslist`( `newstitle`, `newsmaker`, `addtime`, `newsimg`, `newscontent`) 
     VALUES ('$newstitle','$newsmaker','$addtime','$newsimg','$newscontent')";
    mysql_query("set names'utf8'");
    mysql_query($sql);
    // 百家类目新闻插入
    echo '添加新闻成功';
    $baijiatitle = $_REQUEST['baijiatitle'];
    $baijiamaker=$_REQUEST['baijiamaker'];
    $baijiatime=$_REQUEST['baijiatime'];
    $baijiaimg=$_REQUEST['baijiaimg'];
    $baijiacontent=$_REQUEST['baijiacontent'];
    $sqlbaijia="INSERT INTO `newsbaijia`( `baijiatitle`, `baijiamaker`, `baijiatime`, `baijiaimg`, `baijiacontent`) 
     VALUES ('$baijiatitle','$baijiamaker','$baijiatime','$baijiaimg','$baijiacontent')";
    mysql_query("set names'utf8'");
    mysql_query($sqlbaijia);
}
mysql_close($con);  
?>