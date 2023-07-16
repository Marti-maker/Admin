<?php

namespace App\Providers;

use App\View\Composers\DomainComposer;
use App\View\Composers\LanguageComposer;
use App\View\Composers\RequestComposer;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class ViewServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
//        dd(auth()->user());
        View::share('loggedInUser', auth()->user());
        View::share('locale', locale());
        View::composer('*', LanguageComposer::class);
        View::composer('admin.*', DomainComposer::class);
        View::composer('admin.*', RequestComposer::class);
    }
}
