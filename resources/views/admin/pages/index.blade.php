@extends('admin.layouts.default')

@section('title') {{$title}} @stop

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

        @if(session()->has('success'))
            <div class="row">
                <div class="col-lg-12">
                    <div class="alert alert-info alert-dismissable">
                        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                        <div>{{session('success')}}</div>
                    </div>
                </div>
            </div>
        @endif

        <div class="row">
            <div class="col-lg-12 dd" id="nestable">
                {!! Form::hidden('_token', csrf_token()) !!}
                @include('admin.pages.render')
            </div>
        </div>
        <!-- /.row -->
        <script src="{{ asset('assets/admin/lib/jquery.nestable.js') }}"></script>
        <script>
            var token = $('[name="_token"]').val();


            $('.dd').nestable({
                maxDepth: 3,
                expandBtnHTML: '<button data-action="expand"><span class="glyphicon glyphicon-triangle-right expand-btn"></span></button>',
                collapseBtnHTML: '<button data-action="expand"><span class="glyphicon glyphicon-triangle-down expand-btn"></span></button>'
            }).on('change', updateOutput);

            function updateOutput() {
                MOD.updateOutput('{{ $url }}');
            }

        </script>


    </div>

@stop
