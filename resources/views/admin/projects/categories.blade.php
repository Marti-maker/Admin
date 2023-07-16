@extends('admin.layouts.default')

@section('content')
    <div class="panel-heading">{{ admin_trans('option_panel') }}</div>
    @if(isset($categories)||$categories->count()>0)
        <div class="panel-body">
            <div class='form-group'>
                {!! Form::label('status',  admin_trans('page.status'))  !!}
                {!! Form::select('status',array('0'=> admin_trans('disable') ,'1'=> admin_trans('enable')  ),$entity->status, ['class' => 'form-control']) !!}
            </div>
            <div class='form-group'>
                {!! Form::label('type',  admin_trans('page.type'))  !!}
                {!! Form::select('type',array('0'=> admin_trans('page.base_type') ,'1'=> admin_trans('page.home')  ),$entity->type, ['class' => 'form-control']) !!}
            </div>
            <div class='form-group'>
                {!! Form::label('module_id',  admin_trans('page.module'))  !!}
                {!! Form::select('module_id', $modules, $entity->module_id, ['class' => 'form-control']) !!}
            </div>
            @endif
        </div>
        @endsection
