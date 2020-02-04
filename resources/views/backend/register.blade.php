
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
        
        <div class="panel-body">
            <form action="" method="post">
                <?php
                    $message = Session::get('message');
                    if ($message)
                    {
                        echo '<div  class="alert alert-success">'.$message .'</div>';
                        Session::put('message', null);
                    }
                ?>
                    @csrf
        <div class="row justify-content-center" style="margin-bottom:40px">

            <div class="col-md-8 col-lg-8 col-lg-offset-2">

                <div class="form-group">
                    <label for="exampleInputEmail1">Email người dùng</label>
                    <input type="text" name="admin_email" class="form-control" id="exampleInputEmail1" placeholder="Nhập Email">
                </div>
                {!! showError($errors,'admin_email') !!}
                
                <div class="form-group">
                    <label for="exampleInputEmail1">Mật khẩu</label>
                    <input type="password" name="admin_password" class="form-control" id="exampleInputEmail1" placeholder="Nhập mật khẩu">
                </div>
                {!! showError($errors,'admin_password') !!}
                <div class="form-group">
                    <label for="exampleInputPassword1">Tên người dùng</label>
                    <textarea style="resize: none;"  class="form-control" name="admin_name" id="exampleInputPassword1" placeholder="Nhập tên người dùng"></textarea>
                </div>
                {!! showError($errors,'admin_name') !!}
                <div class="form-group">
                    <label for="exampleInputPassword1">Số điện thoại</label>
                    <textarea style="resize: none;" class="form-control" name="admin_phone" id="exampleInputPassword1" placeholder="Nhập số điện thoại"></textarea>
                </div>
                {!! showError($errors,'admin_phone') !!}                       
                
                
            </div>
            <div class="row">
                <div class="col-md-8 col-lg-8 col-lg-offset-2 text-right">

                    <button class="btn btn-success"  type="submit">Thêm thành viên</button>
                    <button class="btn btn-danger" type="reset">Huỷ bỏ</button>
                </div>
            </div>
        </div>
        <div class="clearfix"></div>
    </form>
    </div>
{{--        <p>Don't Have an Account ?<a href="registration.html">Create an account</a></p>--}}
    </div>
</div>
<script src="js/bootstrap.js"></script>
<script src="js/jquery.dcjqaccordion.2.7.js"></script>
<script src="js/scripts.js"></script>
<script src="js/jquery.slimscroll.js"></script>
<script src="js/jquery.nicescroll.js"></script>
<!--[if lte IE 8]><script language="javascript" type="text/javascript" src="js/flot-chart/excanvas.min.js"></script><![endif]-->
<script src="js/jquery.scrollTo.js"></script>
<script>
    function submit(){
        document.getElementById('frm').submit();
    }

</script>
</body>
</html>
