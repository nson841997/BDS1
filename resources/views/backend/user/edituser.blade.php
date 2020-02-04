@extends('backend.master.master')
@section('title','Cập nhật thành viên')
@section('content')
    <div class="content-wrapper">
        <div class="col-lg-12">
            <section class="panel">
                <header class="panel-heading alert alert-info" role="alert">
                    
                    Cập nhật người dùng {{ $user->admin_name }}
                </header>
                <div class="panel-body">
                        <div class="position-center">
                            <form role="form" method="post" >
                                @csrf
                                <?php
                                $message = Session::get('thongbao');
                                if ($message)
                                    {
                                        echo '<div class="alert alert-success">'.$message .'</div>';
                                        Session::put('thongbao', null);
                                    }
                                ?>
                                <div class="form-group">
                                    <label>Email</label>
                                    <input type="text" name="admin_email" class="form-control" value="{{ $user->admin_email }}">
                                    {!! showError($errors,'admin_email') !!}
                                </div>
                                <div class="form-group">
                                    <label>Password</label>
                                    <input type="password" name="admin_password" class="form-control" value="">
                                    
                                </div>
                                <div class="form-group">
                                    <label>Họ và tên</label>
                                    <input type="full" name="admin_name" class="form-control" value="{{ $user->admin_name }}">
                                    {!! showError($errors,'admin_name') !!}
                                </div>
                                <div class="form-group">
                                    <label>Số điện thoại</label>
                                    <input type="address" name="admin_phone" class="form-control" value="{{ $user->admin_phone }}">
                                    {!! showError($errors,'admin_phone') !!}
                                </div>
                                <div class="form-group">
                                    <label>Cấp độ</label>
                                    <select name="level" class="form-control" value="">
                                      
                                       @if ($user->level==1)
                                       <option  value="1">Admin chính</option>
                                       @elseif ($user->level==2)
                                       <option value="2">Người kiểm dyệt</option>
                                       @else($user->level==3)
                                       <option value="3">Member</option>
                                       @endif

                                    </select>
                                </div>

                                <div class="form-group">
                                    <label>Trạng thái</label>
                                    <select name="status" class="form-control" value="">
                                        @if ($user->status==1)
                                       <option  value="1">Đang kích hoạt</option>
                                       @else($user->status==0)
                                       <option value="3">Không kích hoạt</option>
                                       @endif
                                    </select>
                                </div>              
                                
                                <div class="row">
                                    <div class="col-md-8 col-lg-8 col-lg-offset-2 text-right">
    
                                        <button class="btn btn-info"  type="submit">Sửa thành viên</button>
                                        <button class="btn btn-danger" type="reset">Huỷ bỏ</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                </div>
            </section>

        </div>
    </div>
@endsection
