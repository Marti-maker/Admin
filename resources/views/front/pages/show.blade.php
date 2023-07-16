@extends('front.layouts.default')
@section('content')
    <h1>{{ $entity->title }}</h1>
    <h2>Sections:</h2>
    @foreach($sections as $sectionIndex=>$section)
        @if($section->type > 0)
            @include('front.section_types.type-' . $section->type)
        @endif
    @endforeach
    {!! $moduleHtml !!}
@endsection
