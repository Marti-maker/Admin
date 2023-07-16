<?php

use App\Models\Language;
use Illuminate\Database\Eloquent\Collection;

if (!function_exists ("admin_trans")) {
    function admin_trans($key) {
        return __("admin_constant.".$key);
    }
}

if (!function_exists ("front_trans")) {
    function front_trans($key) {
        return __("front_constant.".$key);
    }
}

if (!function_exists ("admin_route")) {
    function admin_route($name, $parameters = [], $absolute = true): string {
        $parameters['query-params'] = request('query-params', request()->getQueryString());

        return route($name, $parameters, $absolute);
    }
}

if (!function_exists ("front_route")) {
    function front_route($name, $parameters = [], $locale = null, $absolute = true): string
    {
        if($locale == null) {
            $locale = locale();
        }

        if($locale == default_locale()) {
            $locale = '';
        }

        return route("$locale.$name", $parameters, $absolute);
    }
}

if (!function_exists ("thirty_days_in_seconds")) {
    function thirty_days_in_seconds(): int {
        return 60 * 60 * 24 * 30;
    }
}

if (!function_exists ("request_module")) {
    function request_module(): string {
        $routeName = request()->route()->getName();

        foreach (locales() as $locale) {
            $search = "$locale.";
            if(str_starts_with($routeName, $search)) {
                $routeName = str_replace($search, '', $routeName);
            }
        }

        $routeName = ltrim($routeName, '.');

        return explode(".", $routeName)[0];
    }
}

if (!function_exists ("languages")) {
    function languages(): Collection {
        try {
            return \cache(
                "languages",
                Language::active()
                    ->defaultOrder()
                    ->get(),
                thirty_days_in_seconds()
            );
        } catch (\Throwable $exception) {
            return new Collection();
        }
    }
}

if (!function_exists ("locales")) {
    function locales(): array {
        return config("translatable.locales");
    }
}

if (!function_exists ("str_limit")) {
    function str_limit($string, $limit): string {
        return \Illuminate\Support\Str::limit($string, $limit) ?? '';
    }
}

if (!function_exists ("locale_prefix")) {
    function locale_prefix($locale = null): string {
        if(!$locale) {
            $locale = locale();
        }

        return $locale == default_locale() ? '' : $locale.'/';
    }
}

if (!function_exists ("locale")) {
    function locale(): string {
        return config('app.locale');
    }
}

if (!function_exists ("default_locale")) {
    function default_locale(): string {
        return config('app.default_locale');
    }
}


