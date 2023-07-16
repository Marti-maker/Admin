<!DOCTYPE html>
<html lang="en">
    <head>
        <title>{{ $title }}</title>
    </head>
    <body>
        Languages
        @foreach($languages as $language)
            @php
                $routeName = sprintf('%s.show', request_module())
            @endphp
            <div>
                <a href="{{ front_route($routeName, $entity->getSlugTreeAttribute($language->locale), $language->locale) }}">{{ $language->name }}</a>
            </div>
        @endforeach
        @if(isset($breadcrumbs))
            <h2>Breadcrumbs</h2>
            @foreach($breadcrumbs as $breadcrumb)
                <a href="{{ $breadcrumb['href'] }}">{{ $breadcrumb['name'] }}</a>
            @endforeach
        @endif
        @yield('content')
    </body>
</html>
