@extends('admin.layouts.default')
@section('title')
    {{$title}}
@stop

@section('content')
    <div class="container-fluid">

        <nav class="navbar navbar-default navbar-fixed">
            <a href="{{ $createUrl }}" class="btn btn-success">{{ admin_trans('btn_create') }}</a>
        </nav>

        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">
                    {{$title}} <small></small>
                </h1>

            </div>
        </div>

        @if($errors->any() )
            <div class="row">
                <div class="col-lg-12">
                    <div class="alert alert-info alert-dismissable">
                        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                        <div>{{$errors->first()}}</div>
                    </div>
                </div>
            </div>
            <!-- /.row -->
        @endif

        <div class="row">
            <div class="col-lg-12 dd" id="nestable">
                {!! Form::hidden('_token', csrf_token()) !!}
                <ol class="dd-list">
                    @foreach ($entities as $key=>$entity)
                        <li class="dd-item cf" data-id="{{$entity->id}}">
                            <div class="dd-content static cf">
                                <div class="list-header" style="width: 50%;">

                                    <div class="">
                                        <a href="{{ admin_route('projects.edit', [$entity->id]) }}">
                                            <div class="">{{ $entity->title }}</div>
                                        </a>
                                    </div>

                                </div>
                                <div class="list-btn-group cf" style="width: 50%;">
                                    <div class="list-btn">
                                        <a class="glyphicon glyphicon-trash"
                                           onclick="MOD.delete('{{$entity->id}}','{{ $url }}');" role="button"
                                           title="{{ admin_trans('delete') }}"></a>
                                    </div>
                                    <div class="list-btn">
                                        <a class="glyphicon glyphicon-edit"
                                           href="{{ admin_route('projects.edit', [$entity->id]) }}" role="button"
                                           title="{{ admin_trans('edit') }}"></a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    @endforeach
                </ol>
            </div>
        </div>
        <!-- /.row -->
        <script>
            var token = $('[name="_token"]').val();
        </script>

@endsection
