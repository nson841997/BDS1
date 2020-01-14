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
                            
                            <a href="/admin/user/add" class="btn btn-primary">Thêm Thành viên</a>
                            <table class="table table-bordered" style="margin-top:20px;">

                                <thead>
                                    <tr class="bg-primary">
                                        <th>ID</th>
                                        <th>Email</th>
                                        <th>Name</th>
                                        <th>Phone</th>
                                        <th>Level</th>
                                        <th>status</th>
                                        <th width='18%'>Tùy chọn</th>
                                    </tr>
                                </thead>
                               
                                @foreach ($data as $item)
                                
                                <tr>
                                    <td>{{ $item->admin_id }}</td>
                                    <td>{{ $item->admin_email }}</td>
                                    <td>{{ $item->admin_name }}</td>
                                    <td>{{ $item->admin_phone }}</td>
                                    <td>{{ $item->level }}</td>
                                    <td>
                                    @if ($item->status == 0)
                                    <a href="{{'/unactive_brand_product/'.$item->admin_id}}"><span class="fa-thumb-styling-down fa fa-thumbs-down"> </span></a>
                                    @else
                                    <a href="{{'/active_brand_product/'.$item->admin_id}}"><span class="fa-thumb-styling-up fa fa-thumbs-up"> </span></a>
                                    @endif
                                    </td>
                                     <td>
                                            <a href="/backend/user/edit/{{ $item->admin_id }}" class="btn btn-warning"><i class="fa fa-pencil" aria-hidden="true"></i> Sửa</a>
                                            <a href="/backend/user/del/{{ $item->admin_id }}" class="btn btn-danger"><i class="fa fa-trash" aria-hidden="true"></i> Xóa</a>
                                        </td>
                                    
                                </tr>
                                @endforeach
                                
                                </tbody>
                            </table>
                            <div align='right'>
                                <ul class="pagination">
                                   
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
