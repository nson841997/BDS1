@extends('backend.master.master')
@section('title','Sửa Danh Mục')
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
            <h1 class="page-header">Sửa Danh Mục</h1>
        </div>
    </div>
    <!--/.row-->


    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-default">
                <div class="panel-body">
                    <div class="row">

                        @if (session('thongbao'))
                            <div class="alert alert-success" role="alert"><strong> {{ session('thongbao') }}</strong> </div>
                        @endif
                        <div class="col-md-5">
                            <form action="" method="post">
                                @csrf
                            <div class="form-group">
                                <label for="">Danh mục cha:</label>
                                <select class="form-control" name="parent" >
                                    <option value="0">Danh mục</option>
                                   {{ getCategory($category,0,'',$cate->parent) }}
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="">Tên Danh mục</label>
                                <input type="text" class="form-control" name="name"  placeholder="Tên danh mục mới" value="{{ $cate->name }}">
                                {!! showError($errors,"name") !!}
                                @if (session('error'))
                                  <div class="alert alert-danger" role="alert"><strong> {{ session('error') }}</strong> </div>
                                @endif
                            </div>
                            <button type="submit" class="btn btn-primary">Sửa danh mục</button>
                           </form>
                        </div>
                        <div class="col-md-7">

                            <h3 style="margin: 0;"><strong>Phân cấp Menu</strong></h3>
                            <div class="vertical-menu">
                                <div class="item-menu active">Danh mục </div>
                                <div class="item-menu"><span>{{ showCategory($category,0,'') }}</span>

                            </div>
                        </div>
                    </div>
                </div>
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