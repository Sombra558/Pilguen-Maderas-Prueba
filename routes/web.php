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
Route::get('/Catalogo', 'PublicController@index');
Route::get('/Servicios', 'PublicController@servicios');
Route::get('/Acerca', 'PublicController@acerca');
Route::get('/Catalogo/listado', 'PublicController@ProductoListado');
Route::get('/Catalogo/{id}','PublicController@ProductoDetalle');
Route::group(['middleware' => 'admin'], function () {
    Route::get('/ControlAdmin', 'AdminController@index');
    Route::resource('/ControlAdmin/Producto','ProductoController');
    Route::resource('/ControlAdmin/Categoria','CategoriaController');
    Route::resource('/ControlAdmin/Tipo','TipoController');
    Route::get('/ControlAdmin/ProductosContador', 'ProductoController@ProductosContador');
    Route::get('/ControlAdmin/TiposContador', 'TipoController@tipoContador');
    Route::get('/ControlAdmin/CategoriasContador', 'CategoriaController@CategoriasContador');
});
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
