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
Route::get('/Pollines/listado', 'PublicController@PolinesListado');
Route::get('/Cortezas/listado', 'PublicController@CortezasListado');
Route::get('/Maderas/listado', 'PublicController@MaderasListado');
Route::get('/Astillas/listado', 'PublicController@AstillasListado');
Route::get('/Pollines/{id}','PublicController@ProductoDetalle');
Route::get('/Astillas/{id}','PublicController@ProductoDetalle');
Route::get('/Cortezas/{id}','PublicController@ProductoDetalle');
Route::get('/Catalogo/{id}','PublicController@ProductoDetalle');
Route::get('/Maderas/{id}','PublicController@ProductoDetalle');
Route::get('/Maderas','PublicController@Redirecciones');
Route::get('/Pollines','PublicController@Redirecciones');
Route::get('/Cortezas','PublicController@Redirecciones');
Route::get('/Astillas','PublicController@Redirecciones');
Route::get('/Servicios/Secado','PublicController@Redirecciones2');
Route::get('/Servicios/Cepillado','PublicController@Redirecciones2');
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
