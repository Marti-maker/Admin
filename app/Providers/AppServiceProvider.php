<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {

    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        $languages = languages();

        if($languages->isNotEmpty()) {
           $locales = $languages->pluck('locale')->toArray();
        } else {
            $locales = [];
        }

        config()->set('translatable.locales', $locales);
    }
}
