<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>百度新闻后台登录</title>
    <link rel="stylesheet" type="text/css" href="../css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="css/login.css">
</head>

<body>
    <div class="container">
        <p class="h1 text-center">百度新闻后台登录</p>
        <form class="form-horizontal" action="doLogin.php" method="post">
            <div class="form-group">
                <label for="inputEmail3" class="col-sm-3 control-label">用户名</label>
                <div class="col-sm-8">
                    <input type="text" name="adminname" class="form-control" id="adminname" placeholder="管理员账号" requied>
                </div>
            </div>
            <div class="form-group">
                <label for="inputPassword3"  class="  col-sm-3 control-label">密&nbsp&nbsp&nbsp码</label>
                <div class="col-sm-8">
                    <input type="password" name="adminword"  class="form-control" id="adminword" placeholder="密码" requied>
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-3 col-sm-10">
                    <div class="checkbox">
                        <label>
                            <input type="checkbox"> 记住我
                        </label>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2">
                    <button type="submit" class="btn btn-success" >登录</button>
                    <button type="reset" class="btn btn-warning ">重置</button>
                </div>
            </div>
        </form>
    </div>
</body>
</html>
