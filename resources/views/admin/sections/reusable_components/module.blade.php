
<div class='form-group col-lg-6'>
    {!! Form::label('module', $label['module']) !!}
    {!! Form::select('module', $modules, $item->module, ['class' => 'form-control']) !!}
</div>
