<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('products','ProductsController@index');

Route::post('products','ProductsController@store')->middleware('auth');

Route::get('products/{id}','ProductsController@show');

Route::put('products/{id}','ProductsController@update');

Route::delete('products/{id}','ProductsController@delete');

Route::get('colors', 'ColorsController@index');

Route::get('images', 'ImagesController@index');

Route::get('fundas', 'FundasController@index');

Route::get('colorcase/{id_case}/{id_color}', 'ColorCasesController@show');