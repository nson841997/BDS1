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
    <div class="row ">
        <div class="col-xs-12 col-md-12 col-lg-12">

            <div class="panel panel-primary">
                <div class="panel-body">
                    <div class="bootstrap-table">
                        <div class="table-responsive">
                            <?php
                                $message = Session::get('message');
                                if ($message)
                                {
                                    echo '<div  class="alert alert-success">'.$message .'</div>';
                                    Session::put('message', null);
                                }
                            ?>
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
                                    <a href="{{'/admin/user/unactive_user/'.$item->admin_id}}"><span class="fa-thumb-styling-down fa fa-thumbs-down"> </span></a>
                                    @else
                                    <a href="{{'/admin/user/active_user/'.$item->admin_id}}"><span class="fa-thumb-styling-up fa fa-thumbs-up"> </span></a>
                                    @endif
                                    </td>
                                     <td>
                                            <a href="/admin/user/edit/{{ $item->admin_id }}" class="btn btn-warning"><i class="fa fa-pencil" aria-hidden="true"></i> Sửa</a>
                                            <a onclick="return del_user()" href="/admin/user/del/{{ $item->admin_id }}" class="btn btn-danger"><i class="fa fa-trash" aria-hidden="true"></i> Xóa</a>
                                        </td>
                                    
                                </tr>
                                @endforeach
                                
                                </tbody>
                            </table>
                            <div align='right'>
                                <ul class="pagination">
                                    {{ $data->appends(['search'=>request()->search])->links() }}
                                </ul>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </div>

                </div>
            </div>
            <!--/.row-->
        
        <!--end main-->
@stop
@section('script')
@parent
<script>
    function del_user()
    {
        return confirm("Xác nhận xóa user?");
    }
</script>
    
@endsection