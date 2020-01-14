
<!DOCTYPE html>
<head>
    <title>Admin - Ms Việt Nam</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="keywords" content="MS" />
    <base href="{{ asset('backend/login') }}/">
    <script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
    <!-- bootstrap-css -->
    <link rel="stylesheet" href="css/bootstrap.min.css" >
    <!-- //bootstrap-css -->
    <!-- Custom CSS -->
    <link href="css/style.css" rel='stylesheet' type='text/css' />
    <link href="css/style-responsive.css" rel="stylesheet"/>
    <!-- font CSS -->
    <link href='//fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'>
    <!-- font-awesome icons -->
    <link rel="stylesheet" href="css/font.css" type="text/css"/>
    <link href="css/font-awesome.css" rel="stylesheet">
    <!-- //font-awesome icons -->
    <script src="js/jquery2.0.3.min.js"></script>
</head>
<body>
<div class="log-w3">
    <div class="w3layouts-main">
        <h2>Ms - Xin Chào</h2>
        
        <?php
            $message = Session::get('message');
            if ($message)
                {
                    echo '<div  class="alert alert-danger">'.$message .'</div>';
                    Session::put('message', null);
                }
        ?>
        
        <form action="{{'/login'}}" method="post">
            @csrf
            {{--  <input type="text" class="ggg" name="UserMail" placeholder="Nhập Email" required="">
            <input type="password" class="ggg" name="UserPassword" placeholder="Nhập Password" required="">
            <span><input  name="remember" type="checkbox" value="Remember Me" />Nhớ đăng nhập</span>
            <h6><a href="{{ ('/register') }}">Đăng ký</a></h6>
            <div class="clearfix"></div>
            <input type="submit" value="Đăng Nhập" name="login">  --}}

            
            <input type="text" class="ggg" name="admin_email" placeholder="Nhập Email" required="">
            <input type="password" class="ggg" name="admin_password" placeholder="Nhập Password" required="">
            <span><input type="checkbox" />Nhớ đăng nhập</span>
            <h6><a href="#">Quên mật khẩu?</a></h6>
            <div class="clearfix"></div>
            <input type="submit" value="Đăng Nhập" name="login">
        </form>
       
    </div>
</div>
<script src="js/bootstrap.js"></script>
<script src="js/jquery.dcjqaccordion.2.7.js"></script>
<script src="js/scripts.js"></script>
<script src="js/jquery.slimscroll.js"></script>
<script src="js/jquery.nicescroll.js"></script>
<!--[if lte IE 8]><script language="javascript" type="text/javascript" src="js/flot-chart/excanvas.min.js"></script><![endif]-->
<script src="js/jquery.scrollTo.js"></script>

</body>
</html>
