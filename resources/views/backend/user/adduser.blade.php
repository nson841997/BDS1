@extends('backend.master.master')
@section('title','Thêm thành viên')
@section('content')
<div class="content-wrapper">
    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">Thêm Thành viên</h1>
        </div>
    </div>
    <!--/.row-->
<div class="row">
    <div class="col-xs-12 col-md-12 col-lg-12">
            <div class="panel panel-primary">
                <div class="panel-heading"><i class="fas fa-user"></i> Thêm thành viên</div>
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
                                @if ($errors->has('admin_email'))
                                    <span class="alert alert-warning alert-dismissible">{{ $errors->first('admin_email') }}</span></p>
                                @endif
                            
                            <div class="form-group">
                                <label for="exampleInputEmail1">Mật khẩu</label>
                                <input type="password" name="admin_password" class="form-control" id="exampleInputEmail1" placeholder="Nhập mật khẩu">
                            </div>
                                @if ($errors->has('admin_password'))
                                    <span class="alert alert-warning alert-dismissible">{{ $errors->first('admin_password') }}</span></p>
                                @endif
                            <div class="form-group">
                                <label for="exampleInputPassword1">Tên người dùng</label>
                                <textarea style="resize: none;"  class="form-control" name="admin_name" id="exampleInputPassword1" placeholder="Nhập tên người dùng"></textarea>
                            </div>
                            @if ($errors->has('admin_name'))
                                    <span class="alert alert-warning alert-dismissible">{{ $errors->first('admin_name') }}</span></p>
                                @endif
                            <div class="form-group">
                                <label for="exampleInputPassword1">Số điện thoại</label>
                                <textarea style="resize: none;" class="form-control" name="admin_phone" id="exampleInputPassword1" placeholder="Nhập số điện thoại"></textarea>
                            </div>
                            @if ($errors->has('admin_phone'))
                            <span class="alert alert-warning alert-dismissible">{{ $errors->first('admin_phone') }}</span></p>
                            @endif                            
                            <div class="form-group">
                                <label for="exampleInputPassword1">Level</label>
                                <select name="level" class="form-control imput-sm-m-bot15">
                                    <option value="1">Cấp độ 1</option>
                                    <option value="2">Cấp độ 2</option>
                                    <option value="3">Cấp độ 3</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Trạng thái</label>
                                <select name="status" class="form-control imput-sm-m-bot15">
                                    <option value="0">Tắt</option>
                                    <option value="1">Bật</option>
                                </select>
                            </div>
                           
                           
                            
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
            </div>
    </div>
</div>

    <!--/.row-->
</div>

@endsection