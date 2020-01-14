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

Route::get('/', 'BlogController@index')->name('welcome');
Route::get('/blog/categories/{category}', 'BlogController@category')->name('blog.category');
Route::get('/blog/tags/{tag}', 'BlogController@tag')->name('blog.tag');
Route::get('/blog/{post}', 'BlogController@show')->name('blog.show');

Auth::routes();

Route::middleware(['auth'])->group(function () {
    Route::get('/home', 'HomeController@index')->name('home');

    Route::resource('categories',  'CategoriesController');
    Route::resource('tags', 'TagsController');

    Route::resource('posts', 'PostsController');
    Route::get('trashed-posts', 'PostsController@trashed')->name('posts.trashed');
    Route::put('posts/{post}/restore', 'PostsController@restore')->name('posts.restore');

    Route::get('users/profile', 'UsersController@edit')->name('users.edit');
    Route::put('users/profile', 'UsersController@update')->name('users.update');
});


Route::middleware(['auth', 'admin'])->group(function () {
    Route::get('users', 'UsersController@index')->name('users.index');
    Route::patch("users/{user}/make-admin", 'UsersController@makeAdmin')->name('users.make-admin');
});
