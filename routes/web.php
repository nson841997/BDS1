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
        Route::get('edit','backend\UserController@getEditUser');
        Route::post('edit/{idUser}','backend\UserController@postEditUser');
        Route::get('edit/{idUser}','backend\UserController@getEditUser');
        Route::get('del/{idUser}','backend\UserController@getdelUser');
    });


});

// test db
Route::get('test', function () {
    $data=DB::table('tbluser')->get();
    	print_r($data);
});