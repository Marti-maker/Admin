<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Contracts\Auth\Guard;
use Illuminate\Http\RedirectResponse;
use \Config;
use \Request;
use \App;

class Localisation {

    /**
     * The Guard implementation.
     *
     * @var Guard
     */
    protected $auth;

    /**
     * Create a new filter instance.
     *
     * @param  Guard  $auth
     * @return void
     */
    public function __construct(Guard $auth)
    {
        $this->auth = $auth;
    }

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $locale = request()->segment(1);
        $languages = array();
        foreach(languages() as $language) {
            $languages[$language->id] = $language->code;
        }
        if (in_array($locale, $languages)) {
            App::setLocale($locale);
            Config::set('app.locale_prefix', $locale);
            Config::set('app.localeId', array_search($locale, $languages));
            Config::set('app.locale', $locale);

        }

        return $next($request);
    }

}
