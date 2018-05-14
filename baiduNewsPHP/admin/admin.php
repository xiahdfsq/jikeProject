<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="UTF-8">
    <title>百度新闻后台</title>
    <link rel="stylesheet" type="text/css" href="../css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="css/packpage.css">
    <script type="text/javascript" src="../js/jquery.min.js"></script>
    <script type="text/javascript" src="js/back.js"></script>
</head>

<body>
    <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <a class="navbar-brand" href="#">百度新闻后台</a>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#">Dashboard</a></li>
                    <li><a href="#">Setting</a></li>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Help</a></li>
                </ul>
                <form class="navbar-form navbar-right" role="search">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Search">
                    </div>
                </form>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
    </nav>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-3 col-md-2 sidebar">
                <ul class="nav nav-sidebar changect">
                    <li class="active"><a href="#">新闻列表 <span class="sr-only">(current)</span></a></li>
                    <li><a href="#">推举类新闻发布</a></li>
                    <li><a href="#">百家类新闻发布</a></li>
                    <li><a href="#">新闻管理</a></li>
                </ul>
            </div>
            <div class="col-sm-9 col-sm-offset-3 col-md-10  main">
                <div id="realcontent">
                    <h2 class="sub-header">新闻列表</h2>
                    <div class="table-responsive">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>编号</th>
                                    <th>新闻标题</th>
                                    <th>新闻作者</th>
                                    <th>新闻发布时间</th>
                                    <th>基本内容</th>
                                    <th>新闻编辑</th>
                                </tr>              
                            </thead>
                            <tbody>                              
<?php
header('Content-Type: text/html; charset=utf-8');
$con=mysql_connect("localhost","root","");
if(!$con){
    die('Could not connet:'.mysql_error());
}else{

    mysql_select_db("newsdata",$con);   
    mysql_query("set names'utf8'");          
 $ql="select * from newslist" ;//设置查询指令 
 $result=mysql_query($ql);//执行查询 
 $btn1="<button value="."编辑"." onclick="."editNews()".">编辑</button>";
 $btn2="<button value="."删除"."onclick="."deleNews()".">删除</button>";
 while($row=mysql_fetch_assoc($result))//将result结果集中查询结果取出一条 
 { echo "<tr>
 <td>".$row[ "newsid"]. "</td>
 <td>".$row[ "newstitle"]. "</td>
 <td>".$row[ "newsmaker"]. "</td>
 <td>".$row[ "addtime"]. "</td>
 <td>".$row[ "newscontent"]. "</td>
 <td>".$btn1.$btn2."</td></tr>";}   

$sql="select * from newsbaijia" ;//设置查询指令 
 $res=mysql_query($sql);//执行查询 
 while($row=mysql_fetch_assoc($res))//将result结果集中查询结果取出一条 
 { echo "<tr>
 <td>".$row[ "baijiaid"]. "</td>
 <td>".$row[ "baijiatitle"]. "</td>
 <td>".$row[ "baijiamaker"]. "</td>
 <td>".$row[ "baijiatime"]. "</td>
 <td>".$row[ "baijiacontent"]. "</td>
 <td>".$btn1.$btn2."</td></tr>";}
    
}
mysql_close($con);     

?>

                            </tbody>
                        </table>
                    </div>
                    <nav>
                        <ul class="pagination">
                            <li>
                                <a href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li class="active"><a href="#">1 <span class="sr-only">(current)</span></a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#">5</a></li>
                            <li>
                                <a href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div id="realcontentli"></div>
            </div>
        </div>
    </div>
</body>

</html>
