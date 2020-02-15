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

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();
Route::get('users/{user}',  ['as' => 'users.edit', 'uses' => 'UserController@edit']);
Route::put('users/{user}/desactivar',  ['as' => 'users.desactivar', 'uses' => 'UserController@desactivar']);
Route::put('users/{user}/update',  ['as' => 'users.update', 'uses' => 'UserController@update']);
Route::delete('users/{user}/delete',  ['as' => 'users.delete', 'uses' => 'UserController@delete']);
Route::post('/logout','Auth\LoginController@logout')->name('logout');
Route::get('/home', 'HomeController@index')->name('home');
