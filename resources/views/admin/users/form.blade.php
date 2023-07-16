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
                    <div class="tab-content">
                        <div role="tabpanel" class="tab-pane active">
                            <div class="form-group">
                                {!! Form::label('name',  admin_trans('users.name')) !!}
                                {!! Form::text('name',  $entity->name, ['placeholder' =>  admin_trans('users.name') , 'class' => 'form-control']) !!}
                            </div>
                            <div class="form-group">
                                {!! Form::label('email',  admin_trans('users.email')) !!}
                                {!! Form::text('email',  $entity->email, ['placeholder' =>  admin_trans('users.email') , 'class' => 'form-control']) !!}
                            </div>
                            <div class='form-group'>
                                {!! Form::label('password', admin_trans('users.password')) !!}
                                {!! Form::password('password', ['placeholder' => admin_trans('users.password'), 'class' => 'form-control']) !!}
                            </div>
                            <div class='form-group'>
                                {!! Form::label('password_confirmation',admin_trans('users.password_confirm')) !!}
                                {!! Form::password('password_confirmation', ['placeholder' => admin_trans('users.password_confirm'), 'class' => 'form-control']) !!}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="panel panel-default">
                        <div class="panel-heading">{{ admin_trans('option_panel') }}</div>
                        <div class="panel-body">
                            <div class='form-group'>
                                {!! Form::label('role_id',  admin_trans('users.role'))  !!}
                                {!! Form::select('role_id', $roles->pluck('name', 'id'), $entity->role_id, ['class' => 'form-control']) !!}
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
