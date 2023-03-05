<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Appointmentcontroller;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\PetsController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\CategoryUserController;
use App\Http\Controllers\CommentsController;
use App\Http\Controllers\ServiceController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//appointment Routes
Route::get('/appointment',[Appointmentcontroller::class,'index']);
Route::get('/appointment/{id}',[Appointmentcontroller::class,'show']);

Route::post('/appointment',[Appointmentcontroller::class,'store']);
Route::put('/appointment/{id}',[Appointmentcontroller::class,'update']);
Route::delete('/appointment/{id}',[Appointmentcontroller::class,'destroy']);


// User Routes
Route::get('/users',[UsersController::class,'index']);
Route::get('/users/{id}',[UsersController::class,'show']);

Route::post('/users',[UsersController::class,'store']);
Route::put('/users/{id}',[UsersController::class,'update']);
Route::delete('/users/{id}',[UsersController::class,'destroy']);

//Pets Routes
Route::get('/pets',[PetsController::class,'index']);
Route::get('/pets/{id}',[PetsController::class,'show']);

Route::post('/pets',[PetsController::class,'store']);
Route::put('/pets/{id}',[PetsController::class,'update']);
Route::delete('/pets/{id}',[PetsController::class,'destroy']);

//categories Routes
Route::get('/categories',[CategoriesController::class,'index']);
Route::get('/categories/{id}',[CategoriesController::class,'show']);

Route::post('/categories',[CategoriesController::class,'store']);
Route::put('/categories/{id}',[CategoriesController::class,'update']);
Route::delete('/categories/{id}',[CategoriesController::class,'destroy']);


Route::get('/category',[CategoryUserController::class,'index']);
Route::post('/category',[CategoryUserController::class,'store']);
Route::put('/category/{id}',[CategoryUserController::class,'update']);
Route::delete('/category/{id}',[CategoryUserController::class,'destroy']);

//COMMENTS ROUTES
Route::get('/comments',[CommentsController::class,'index']);
Route::get('/comments/{id}',[CommentsController::class,'show']);
Route::post('/comments',[CommentsController::class,'store']);
Route::put('/comments/{id}',[CommentsController::class,'update']);
Route::delete('/comments/{id}',[CommentsController::class,'destroy']);


//Services Routes
Route::get('/services',[ServiceController::class,'index']);
Route::get('/services/{id}',[ServiceController::class,'show']);

Route::post('/services',[ServiceController::class,'store']);
Route::put('/services/{id}',[ServiceController::class,'update']);
Route::delete('/services/{id}',[ServiceController::class,'destroy']);

?>