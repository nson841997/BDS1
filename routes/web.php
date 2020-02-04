<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('', 'frontend\IndexController@getIndex');


// register
Route::get('register', 'backend\RegisterController@getRegister');
Route::post('register', 'backend\RegisterController@postRegister');

//login
Route::get('/login','backend\LoginController@getLogin');
Route::post('/login','backend\LoginController@postLogin');

// logout
Route::get('/logout', 'backend\LoginController@getLogout');


// admin
Route::group(['prefix' => 'admin'], function () {

    Route::get('', 'backend\IndexController@getIndex');
    Route::get('logout', 'backend\IndexController@getLogout');

    //user
    Route::group(['prefix' => 'user'], function () {
        Route::get('','backend\UserController@getListUser');

        Route::get('add','backend\UserController@getAddUser');
        Route::post('add','backend\UserController@postAddUser');

        Route::get('edit/{idUser}','backend\UserController@getEditUser');
        Route::post('edit/{idUser}','backend\UserController@postEditUser');
        // Route::get('laydulieu', function () {
        //     $data=DB::table('tbl_admin')->get();
        //     echo '<pre>';
        //         print_r($data);
        //         echo '</pre>';
        // });

        Route::get('del/{idUser}','backend\UserController@getdelUser');

        Route::get('/active_user/{idUser}', 'backend\UserController@active_user');
        Route::get('/unactive_user/{idUser}', 'backend\UserController@unactive_user');

    });

    // category
    Route::group(['prefix' => 'category'], function () {

        Route::get('','backend\CategoryController@getCategory');
        Route::post('','backend\CategoryController@postCategory');
        
        Route::get('edit/{idCate}','backend\CategoryController@getEditCategory');
        Route::post('edit/{idCate}','backend\CategoryController@postEditCategory');

        Route::get('delete/{idCate}','backend\CategoryController@delCategory' );
    });



});


// Route::get('test', function () {
//     $data=DB::table('tbluser')->get();
//     	print_r($data);
// });
// Auth::routes();

// Route::middleware(['auth'])->group(function () {
//     Route::get('/approval', 'HomeController@approval')->name('approval');

//     Route::middleware(['approved'])->group(function () {
//         Route::get('/home', 'HomeController@index')->name('home');
//     });
//     Route::middleware(['admin'])->group(function () {
//         Route::get('/users', 'UserController@index')->name('admin.users.index');
//         Route::get('/users/{user_id}/approve', 'UserController@approve')->name('admin.users.approve');
//     });
// });
