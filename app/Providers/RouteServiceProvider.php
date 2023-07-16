<?php

namespace App\Providers;

use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Route;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * The path to your application's "home" route.
     *
     * Typically, users are redirected here after authentication.
     *
     * @var string
     */
    public const HOME = '/home';


    /**
     * Define your route model bindings, pattern filters, and other route configuration.
     */
    public function boot(): void
    {
        RateLimiter::for('api', function (Request $request) {
            return Limit::perMinute(60)->by($request->user()?->id ?: $request->ip());
        });

        $router = $this->app['router'];

        $router->macro('localization', function (\Closure $closure) {
            $defaultLocale = default_locale();
            $closure = $closure->bindTo($this);
            $languagesInfo = languages();

            if($languagesInfo->isNotEmpty()) {
                $languages = $languagesInfo->where('locale', '!=', $defaultLocale)->all();

                $languages[] = languages()->where('locale', $defaultLocale)->first();
            } else {
                $languages = [];
            }

            if (is_countable ($languages) && count ($languages)) {
                foreach ($languages as $language) {
                    $locale = $language->locale == $defaultLocale ? '' : $language['code'];

                    $this->as("$locale.")
                        ->prefix($locale)
                        ->middleware(['web', 'localization'])
                        ->group($closure);
                }
            }
        });

        $this->routes(function () {
            Route::middleware('api')
                ->prefix('api')
                ->group(base_path('routes/api.php'));

            Route::middleware('web')
                ->group(base_path('routes/web.php'));
        });
    }
}
