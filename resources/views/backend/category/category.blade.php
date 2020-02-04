@extends('backend.master.master')
@section('title','Danh mục')
@section('content')
<style>
    .vertical-menu {
    width: 100%;
    height: 400px;
    overflow-y: auto;
}

.vertical-menu .item-menu {
    background-color: #eee;
    color: black;
    display: block;
    padding: 12px;
    text-decoration: none;
}

.vertical-menu .item-menu:hover {
    background-color: #ccc;
    
}
.category-fix {   
    display: inline-block;
    font-size: 20px;
}
.vertical-menu .item-menu.active {
    background-color: #30a5ff;
    color: white;
}
</style>
<div class="content-wrapper">

    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">Quản lý danh mục</h1>
        </div>
    </div>
    <!--/.row-->
    <div class="row">

        <div class="col-md-12">
            <div class="panel panel-default">
                <div class="panel-body">
                        <form method="POST" action="">
                                @csrf
                    <div class="row">
                        <div class="col-md-5">
                            <div class="form-group" >
                                <label for="">Danh mục cha:</label>
                                <select class="form-control" name="parent" id="">
                                    <option value="0">Lựa chọn danh mục</option>
                                   {{ getCategory($category,0,'',0) }}

                                </select>
                            </div>

                            <div class="form-group" >

                                <label for="">Tên Danh mục</label>
                                <input type="text" class="form-control" name="name" id="" placeholder="Tên danh mục mới" value="{{ old('name') }}">
                                {!! showError($errors,'name') !!}
                                @if (session('error'))
                                        <div class="alert alert-danger" role="alert">
                                            <strong>{{ session('error') }}</strong>
                                        </div>
                                    @endif

                            </div>
                            <button type="submit" class="btn btn-primary">Thêm danh mục</button>

                        </div>

                        <div class="col-md-7">
                            @if (session('thongbao'))
                            <div class="box-header with-border bg-aqua" role="alert">
                                 {{ session('thongbao') }}
                            </div>
                                
                            @endif
                            <h3 style="margin: 0;"><strong>Phân cấp Menu</strong></h3>
                            <div class="vertical-menu">
                                <div class="item-menu active">Danh mục </div>
                                {{ showCategory($category, 0, '') }}

                            </div>
                        </div>
                       
                    </div>

                </div>
            </form>
            </div>
        </div>
        <!--/.col-->


    </div>
    <!--/.row-->
</div>
<!--/.main-->

@stop

@section('script')
@parent
<script>
    function del_cat()
    {
        return confirm("Xác nhận xóa danh mục?");
    }
</script>
    
@endsection