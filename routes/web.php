<?php

use App\Http\Controllers\Admin\PageController as AdminPageController;
use App\Http\Controllers\Admin\NewsController as AdminNewsController;
use App\Http\Controllers\Admin\SectionController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Front\PageController as FrontPageController;
use App\Http\Controllers\Front\NewsController as FrontNewsController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\ProjectsController as AdminProjectController;
use App\Http\Controllers\Admin\CategoriesController as AdminCategoryController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Auth::routes(['register' => false]);

Route::prefix('admin')->middleware(['role:Admin', 'auth'])->group(function () {
    Route::get('/', [AdminPageController::class, 'index']);

    Route::prefix('pages')->group(function () {
        Route::put('status', [AdminPageController::class, 'status']);
        Route::put('sort', [AdminPageController::class, 'sort']);

        Route::put('sections/sort', [SectionController::class, 'sort']);
        Route::resource('sections', SectionController::class);
    });

    Route::resource('pages', AdminPageController::class);

    Route::put('news/status', [AdminNewsController::class, 'status']);
    Route::resource('news', AdminNewsController::class);

    Route::resource('users', UserController::class);

    //
    Route::resource('projects',AdminProjectController::class);

    Route::resource('categories',AdminCategoryController::class);
});

Route::localization(function () {
    $this->get("/", [FrontPageController::class, 'home'])->name("pages.home");

    $this->get("news/{keyword}", [FrontNewsController::class, 'show'])->name("news.show");

    $this->get("{keyword?}/{keyword2?}/{keyword3?}/{keyword4?}/{keyword5?}/{keyword6?}/{keyword7?}", [FrontPageController::class, 'show'])->name("pages.show");
});
