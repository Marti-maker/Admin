@extends('admin.layouts.default')

@section('title')
    {{ $title }}
@stop
@section('content')
    <div id="page-wrapper">
        <nav class="navbar navbar-default navbar-fixed">

            <div class="pull-right">
                <a class="btn btn-success" href="#"
                   onclick="unsaved = false; unload = false; $('#redirect').val('back'); $('#data_form').submit(); return false;"
                   role="button">{{ admin_trans('save_btn') }}</a>
                <a class="btn btn-warning" href="#"
                   onclick="unsaved = false; unload = false; $('#data_form').submit(); return false;"
                   role="button">{{ admin_trans('save_close_btn') }}</a>
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
            {!! Form::open(array_merge($formData, ['files' => true])) !!}
            {!! Form::hidden('redirect', '', ['id'=>'redirect']) !!}
            @method($formData['method'])
            <div class="row">
                <div class="col-lg-9">
                    <div role="tabpanel">
                        <ul id="language-tabs" class="nav nav-tabs" role="tablist">
                            @foreach($languages as $key=>$language)
                                <li role="presentation" @if($key == 0) class="active" @endif>
                                    <a href="#{{$language->code}}" aria-controls="home" role="tab"
                                       data-toggle="tab">{{$language->name}}</a>
                                </li>
                            @endforeach
                        </ul>
                    </div>

                    <div class="tab-content">
                        @foreach($languages as $key=>$language)
                            <div role="tabpanel" class="tab-pane @if($key == 0) active @endif "
                                 id="{{$language->code}}">
                                <div class="form-group">
                                    {!! Form::label('title'.$language->id,  admin_trans('news.title')  . '(' . $language->name . ')') !!}
                                    {!! Form::text($language->locale.'[title]',  $entity->translate($language->locale)->title ?? '', ['placeholder' =>  admin_trans('news.title') , 'class' => 'form-control', 'id' => 'title-'.$language->id]) !!}
                                </div>
                                <div class="form-group">
                                    {!! Form::label('description-'.$language->id, admin_trans('news.description').  '(' . $language->name . ')') !!}
                                    {!! Form::textarea($language->locale.'[description]',  $entity->translate($language->locale)->description ?? '', ['placeholder ' => admin_trans('news.description'), ' class' => 'form-control', 'id' => 'description-'.$language->id]) !!}
                                </div>
                                @include('admin.general.seo')
                            </div>
                        @endforeach
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class='panel panel-default'>
                        @if(isset($categories) && count($categories) > 0)
                            <div id="container" class="panel-heading">
                                {{ admin_trans('products.categories') }}
                                <select name="categories[]" class="category-select">
                                    @foreach($categories as $key => $value)
                                        <option value="{{ $key }}">{{ $value }}</option>
                                    @endforeach
                                </select>
                                <button id="add-select-btn" type="button" onclick="addNewSelect()">Add Select</button>
                            </div>
                        @endif
                    </div>
                    <div class="form-group">
                        <label for="cover">Cover</label>
                        {!! Form::file('cover', ['class' => 'form-control', 'accept' => 'image/*']) !!}
                    </div>
                    {!! Form::submit('Upload Photo', ['class' => 'btn btn-primary']) !!}


                </div>
            </div>
            {!!  Form::close() !!}
        </div>
    </div>
    <script>
        $(document).ready(function () {
            MOD.checkbox();

            $('#datetimepicker').datetimepicker({
                //'format' : 'yyyy-mm-dd hh:ii',
                'defaultDate': new Date(),
                'format': 'YYYY-MM-DD'
            });
        });
    </script>
    <script>
        var selectedOptions = [];

        function addNewSelect() {
            var container = document.getElementById('container');
            var select = container.querySelector('.category-select');
            var selectedOption = select.options[select.selectedIndex];

            if (selectedOption) {
                selectedOptions.push(selectedOption.value);

                var allSelects = document.querySelectorAll('.category-select');
                for (var i = 0; i < allSelects.length; i++) {
                    var options = allSelects[i].options;
                    for (var j = 0; j < options.length; j++) {
                        if (selectedOptions.includes(options[j].value)) {
                            options[j].disabled = true;
                        }
                    }
                }
                let newSelect = document.createElement('select');
                newSelect.className = 'category-select';
                newSelect.name = 'categories[]';
                newSelect.innerHTML = select.innerHTML;
                container.appendChild(newSelect);
            }
        }
    </script>

@stop
