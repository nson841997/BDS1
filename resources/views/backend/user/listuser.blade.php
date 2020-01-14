@extends('backend.master.master')
@section('title','Danh sách user')
@section('content')
<!--main-->
<div class="content-wrapper">
    <!--/.row-->
    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">Danh sách thành viên</h1>
        </div>
    </div>
    <!--/.row-->
    <div class="row">
        <div class="col-xs-12 col-md-12 col-lg-12">

            <div class="panel panel-primary">

                <div class="panel-body">
                    <div class="bootstrap-table">
                        <div class="table-responsive">
                            @if (session('thongbao'))
                            <div class="alert alert-success" role="alert">
                                <strong> {{ session('thongbao') }}</strong>
                            </div>
                            @endif
                            <a href="/admin/user/add" class="btn btn-primary">Thêm Thành viên</a>
                            <table class="table table-bordered" style="margin-top:20px;">

                                <thead>
                                    <tr class="bg-primary">
                                        <th>ID</th>
                                        <th>Email</th>
                                        <th>Name</th>
                                        <th>Phone</th>
                                        <th>Level</th>
                                        <th width='18%'>Tùy chọn</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($tbl_admin as $row)
                                    <tr>
                                        <td>{{ $row->admin_id }}</td>
                                        <td>{{ $row->admin_email }}</td>
                                        <td>{{ $row->admin_name }}</td>
                                        <td>{{ $row->admin_phone }} </td>
                                        <td>{{ $row->level }}</td>
                                        <td>
                                            <a href="/admin/user/edit/{{ $row->admin_id }}" class="btn btn-warning"><i class="fa fa-pencil" aria-hidden="true"></i> Sửa</a>
                                            <a href="/admin/user/del/{{ $row->admin_id }}" class="btn btn-danger"><i class="fa fa-trash" aria-hidden="true"></i> Xóa</a>
                                        </td>
                                    </tr>
                                    @endforeach
                                </tbody>
                            </table>
                            <div align='right'>
                                <ul class="pagination">
                                    {{ $tbl_admin->appends(['search'=>request()->search])->links() }}
                                </ul>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </div>

                </div>
            </div>
            <!--/.row-->


        </div>
        <!--end main-->
@stop
