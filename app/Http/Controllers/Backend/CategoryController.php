<?php

namespace App\Http\Controllers\backend;

use App\Http\Requests\AddCategoryRequest;
use App\Http\Requests\EditCategoryRequest;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use App\models\category;
use Illuminate\Support\Str;
use Session;

class CategoryController extends Controller
{
    public function AuthLogin()
    {      
        $admin_id = Session::get('tbl_admin','admin_id');
        if($admin_id)
        {
            return Redirect::to('index');
        }else{
            return Redirect::to('login')->send();
        }
    }
    public function getCategory()
    {
        $this->AuthLogin();
        $data['category'] = category::all()->toarray();
        return view('backend.category.category', $data);
    }
    public function postCategory(AddCategoryRequest $r)
    {
        $this->AuthLogin();
        if(Getlevel(category::all()->toarray(), $r->parent,1) > 2)
        {
            return redirect()->back()->with('error','Giao diện không tương thích danh mục lớn hơn 2 cấp');
        }

        $cate = new category;
        $cate->name =  $r->name;
        $cate->slug = Str::slug($r->name,'-');
        $cate->parent = $r->parent;
        $cate->save();

        return redirect()->back()->with('thongbao','Đã thêm thành công', $r->name);
    }
    public function getEditCategory($idCate)
    {
        $this->AuthLogin();
        $data['cate'] = category::findorFail($idCate);
        $data['category']= category::all()->toarray();
        return View('backend.category.editcategory',$data);
    }
    public function postEditCategory(EditCategoryRequest $r,$idCate)
    {
        $this->AuthLogin();
        if(Getlevel(category::all()->toarray(), $r->parent,1) > 2)
        {
            return redirect()->back()->with('error','Giao diện không tương thích danh mục lớn hơn 2 cấp');
        }

        $cate=Category::find($idCate);
        $cate->name=$r->name;
        $cate -> slug= Str::slug($r->name,'-');
        $cate -> parent = $r -> parent;
        $cate->save();

        return redirect()->back()->with('thongbao','Đã sửa thành công!');

    }
    function delCategory($idCate)
    {
        $this->AuthLogin();
        // tìm danh mục cần xóa
        $cate = Category::find($idCate);
        // lấy parent của danh mục cần xóa
        // $parent = $cate->parent;
        // tìm danh mục sau danh mục cần xóa-> thay thế parent danh mục con = chính parent danh mục con xóa
        Category::where('parent',$idCate)->update(['parent'=> $cate->parent]);
        // Xóa danh mục
        Category::destroy($idCate);
        return redirect()->back()->with('thongbao', 'Xóa danh mục thành công!');
    }
}
