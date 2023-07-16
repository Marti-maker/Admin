@extends('admin.layouts.default')

@section('title') {{ $title }} @stop
@section('content')
    <div id="page-wrapper">
        <nav class="navbar navbar-default navbar-fixed">

            <div class="pull-right">
                <a class="btn btn-success" href="#" onclick="unsaved = false; unload = false; $('#redirect').val('back'); $('#data_form').submit(); return false;" role="button">{{ admin_trans('save_btn') }}</a>
                <a class="btn btn-warning" href="#" onclick="unsaved = false; unload = false; $('#data_form').submit(); return false;" role="button">{{ admin_trans('save_close_btn') }}</a>
                <a class="btn btn-danger" href="{{ $listUrl }}" role="button">{{ admin_trans('close_btn') }}</a>
            </div>
        </nav>
        <script>
            var MOD = MOD || {};
        </script>
        <div class="container-fluid">
            <!-- Page Heading -->
            <div class="row fixed-nav-height">

            </div>

            @if ($errors->any() && !$errors->has('msg'))
                <div class='bg-danger alert'>

                    @foreach ($errors->all() as $error)
                        {{ $error }} <br>
                    @endforeach
                </div>
            @endif
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
            <h1><i class='fa fa-globe'></i> {{ $title }}</h1>
            {!! Form::open($formData) !!}
            {!! Form::hidden('redirect', '', ['id'=>'redirect']) !!}
            @method($formData['method'])
            <div class="row">
                <div class="col-lg-9">
                    <div role="tabpanel">
                        <ul id="language-tabs" class="nav nav-tabs" role="tablist">
                            @foreach($languages as $key=>$language)
                                <li role="presentation" @if($key == 0) class="active" @endif>
                                    <a href="#{{$language->code}}" aria-controls="home" role="tab" data-toggle="tab">{{$language->name}}</a>
                                </li>
                            @endforeach
                        </ul>
                    </div>

                    <div class="tab-content">
                        @foreach($languages as $key=>$language)
                            <div role="tabpanel" class="tab-pane @if($key == 0) active @endif " id="{{$language->code}}">
                                <div class="form-group">
                                    {!! Form::label('title'.$language->id,  admin_trans('categories.title')  . '(' . $language->name . ')') !!}
                                    {!! Form::text($language->locale.'[title]',  $entity->translate($language->locale)->title ?? '', ['placeholder' =>  admin_trans('categories.title') , 'class' => 'form-control', 'id' => 'title-'.$language->id]) !!}
                                </div>
                                @include('admin.general.seo')
                            </div>
                        @endforeach
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="panel panel-default">
                        <div class="panel-heading">{{ admin_trans('option_panel') }}</div>
                        <div class="panel-body">
                            <div class='form-group'>
                                {!! Form::label('status',  admin_trans('categories.status'))  !!}
                                {!! Form::select('status',array('0'=> admin_trans('disable') ,'1'=> admin_trans('enable')  ),$entity->status, ['class' => 'form-control']) !!}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {!!  Form::close() !!}
        </div>
    </div>
    <script>
        $(document).ready(function() {
            MOD.checkbox();

            $('#datetimepicker').datetimepicker({
                //'format' : 'yyyy-mm-dd hh:ii',
                'defaultDate' : new Date(),
                'format': 'YYYY-MM-DD'
            });
        });
    </script>
@stop

