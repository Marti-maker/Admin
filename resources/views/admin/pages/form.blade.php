@extends('admin.layouts.default')

@section('title') {{ $title }} @stop

@section('content')
    @php
        $modules = [0 => admin_trans('empty')];

        foreach ($entity->modules() as $key=>$module) {
            $modules[$key] = $module['name'];
        }

        $sectionTypes = [];

        foreach (config('section_type.list') as $key=>$sectionType) {
            if($key == 0) {
                continue;
            }

            $sectionTypes['type_' . $key] = $sectionType;
        }
    @endphp
    <div id="page-wrapper">
        <nav class="navbar navbar-default navbar-fixed">

            <div class="pull-right">
                @if($entity->id > 0)
                    <a class="btn btn-success" target="_blank" href="{{ route('pages.show', $entity->slug_tree) }}?preview=1" role="button"><i class="glyphicon glyphicon-eye-open"></i> {{ admin_trans('page.btn_preview') }}</a>
                @endif
                <a class="btn btn-success" href="#" onclick="unsaved = false; unload = false; $('#redirect').val('back'); $('#data_form').submit(); return false;" role="button">{{ admin_trans('save_btn') }}</a>
                <a class="btn btn-warning" href="#" onclick="unsaved = false; unload = false; $('#data_form').submit(); return false;" role="button">{{ admin_trans('save_close_btn') }}</a>
                <a class="btn btn-danger" href="{{ $listUrl }}" role="button">{{ admin_trans('close_btn') }}</a>
            </div>
        </nav>
        <script>
            var MOD = MOD || {};
            MOD.sectionIndex = {};
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
            {!! Form::hidden('page_id', $entity->id) !!}
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
                                    {!! Form::label('title'.$language->id,  admin_trans('page.title')  . '(' . $language->name . ')') !!}
                                    {!! Form::text($language->locale.'[title]',  $entity->translate($language->locale)->title ?? '', ['placeholder' =>  admin_trans('page.title') , 'class' => 'form-control', 'id' => 'title-'.$language->id]) !!}
                                </div>

                                {{--                                <div class="form-group">--}}
                                {{--                                    {!! Form::label('description['.$language-> id.']', admin_transpage.('description']).  '(' . $language->name . ')') !!}--}}
                                {{--                                    {!! Form::textarea('description['.$language->id.']',  $entity->description[$language->id], ['placeholder ' => admin_transpage.('description'],)' class' => 'form-control editor']) !!}--}}
                                {{--                                </div>--}}
                                {{--                                <div class="form-group">--}}
                                {{--                                    {!! Form::label('second_description['.$language-> id.']', admin_transpage.('second_description']).  '(' . $language->name . ')') !!}--}}
                                {{--                                    {!! Form::textarea('second_description['.$language->id.']',  $entity->second_description[$language->id], ['placeholder ' => admin_transpage.('second_description'],)' class' => 'form-control editor']) !!}--}}
                                {{--                                </div>--}}
                                @include('admin.general.seo')
                            </div>
                        @endforeach
                    </div>
                    <div id="links-cont" style="margin-top: 10px">
                        <div class="panel panel-default">
                            <div class="panel-heading"><span class="glyphicon glyphicon-list"></span> {{  admin_trans('page.sections')  }}</div>
                            <div class="panel-body">
                                <div class="row">
                                    <div class="col-lg-12 dd" id="nestable">
                                        <ol class="dd-list">
                                            {!! $sections !!}
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <a class="btn btn-warning" onclick="selectType()">{{  admin_trans('page.new_section_btn')  }}</a>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="panel panel-default">
                        <div class="panel-heading">{{ admin_trans('option_panel') }}</div>
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
                        </div>
                    </div>

                    @include('admin.general.cover')
                </div>
            </div>

            <div class="section-types" style="display: none">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <h1 class="text-center">
                                {{  admin_trans('page.section_types')  }}
                            </h1>
                            <div id="gallery" class="gallery"></div>
                        </div>
                    </div>
                </div>
            </div>
            {!!  Form::close() !!}
        </div>
    </div>
    <script>
        var imgTypePath = '{{ asset('assets/admin/images/section_types/')}}';
        var token = $('#data_form [name="_token"]').val();
        var edit = '{{ $edit }}';
        var sectionTypes = JSON.parse('{!! json_encode($sectionTypes)  !!}');

        if(!edit) {
            var unload = true;
        } else {
            var unload = false;
        }

        function initNestable() {
            var nestableList = $('.dd');
            nestableList.off();
            nestableList.removeData('nestable');
            nestableList.nestable({
                maxDepth: 2,
                expandBtnHTML: '<button data-action="expand"><span class="glyphicon glyphicon-triangle-right expand-btn"></span></button>',
                collapseBtnHTML: '<button data-action="expand"><span class="glyphicon glyphicon-triangle-down expand-btn"></span></button>'
            })
                .on('change', updateOutput);
        }

        initNestable();

        function updateOutput() {
            MOD.updateOutput('{{ $listUrl }}/sections');
        }

        var pageIdSelector = $('[name="page_id"]');

        $(document).ready(function() {
            MOD.checkbox();
        });

        if(!edit) {
            $(window).on('beforeunload', function(){
                if(unload) {
                    var pageId = pageIdSelector.val();

                    if(pageId > 0) {
                        unsaved = false;
                        pageIdSelector.val('');
                        MOD.forceDelete(pageId,'{{$listUrl}}');
                    }
                }
            });

        }

        function preprocessSection(type, parent) {
            var $sectionFormSelector = $('#section_form');
            if($sectionFormSelector.length > 0) {
                if($sectionFormSelector.find('#section-edit-input').val() > 0) {
                    var url = $('#section_form').attr('action') + '/edit';
                } else {
                    url = '{{ $listUrl . '/sections/create' }}';
                }

                url += '?' + $sectionFormSelector.serialize();

                $('#section-type').val(type);
                $.fancybox.close();
                openFancyBox(url, type)
            } else {
                url = '{{ $listUrl . '/sections/create' }}';

                if(parent) {
                    url += '?parent_id=' + parent;
                }

                openFancyBox(url, type)
            }
        }


        function openFancyBox(url, type) {
            var data = {type: type, tmp: 1, };

            $.get(url, data, function (response) {
                $.fancybox.close();
                $.fancybox.open(response, {touch : false});
                initUploadImage();
            });
        }

        function selectType() {
            $.fancybox.open($('.section-types'),
                {
                    touch : false,
                    afterClose: function() {
                        gallery.destroy();
                    }
                }
            );

            var fancyboxGallery = jQuery(".fancybox-content .gallery");

            for(var i in sectionTypes) {
                var sectionType = i.replace('type_', '');
                fancyboxGallery.append("<img src=\"/assets/admin/images/section_types/" + sectionTypes[i] + "?v1.0\" data-type-id=\"" + sectionType + "\" data-description=\"<button class='btn btn-success' onclick='event.stopPropagation(); preprocessSection(" + sectionType + ")' style='position: absolute; z-index: 9999999999999; bottom: 10px; left: calc(50% - 20px);' role='button'><span class='badge'>"+ sectionType +"</span>&nbsp;<i class='glyphicon glyphicon-plus'></i></button>\" alt=\"type-" + sectionType +"\" data-image=\"/assets/admin/images/section_types/" + sectionTypes[i] + "\">")
            }

            var gallery = fancyboxGallery.unitegallery({
                gallery_theme:"tiles",
                tiles_type:"justified",
                tile_border_color:"#F0F0F0",
                tile_outline_color:"#8B8B8B",
                tile_enable_shadow:true,
                tile_shadow_color:"#8B8B8B",
                tile_show_link_icon:true,
                lightbox_textpanel_title_color:"e5e5e5",
                theme_gallery_padding:20,
                tiles_justified_space_between:20,
                tiles_justified_row_height:150,
                tile_enable_textpanel: true,
                tile_textpanel_source: "description",
            });
        }

        function editSection(url) {
            $.get(url, {}, function (response) {
                $.fancybox.open(response, {touch : false});
                initUploadImage();
            });
        }

        function saveSection(edit) {
            sectionQuery(function (response) {
                var pageId = pageIdSelector.val();

                if(pageId == 0) {
                    pageIdSelector.val(response.pageId);
                    $('[name="_method"]').val('put');
                    $('#data_form').attr('action', $('#data_form').attr('action') + '/' + response.pageId)
                }

                if(!edit) {
                    if(response.parentId > 0) {
                        var sectionSelector = $('[data-id="' + response.parentId + '"]');
                        var sectionOlSector = sectionSelector.find('ol.dd-list:eq(0)');
                        if(sectionOlSector.length == 0) {
                            response.html = '<ol class="dd-list">' + response.html + '</ol>';
                            sectionSelector.append(response.html);
                        } else {
                            sectionOlSector.append(response.html);
                        }
                    } else {
                        $('#nestable > .dd-list').append(response.html);
                    }
                } else {
                    $('[data-id="' + response.id + '"]').replaceWith($(response.html));
                }

                $.fancybox.close()
            })
        }

        function sectionQuery(success) {
            var editorInputs = $('textarea[id*="editor-"]');

            if(editorInputs.length > 0) {
                editorInputs.each(function () {
                    var editor = $(this);
                    var editorInstance = tinyMCE.get($(editor).attr('id'));

                    if(editorInstance) {
                        var editorHtml = editorInstance.getContent();

                        $(editor).val(editorHtml);
                    }
                })
            }

            var form = $('#section_form');
            var token = form.find('[name="_token"]').val();
            var errors = form.find('.errors');
            var formData = new FormData($(form)[0]);

            formData.append('page_id', pageIdSelector.val());
            errors.html('');

            $.ajax({
                url: form.attr('action'),
                headers: {
                    'X-CSRF-TOKEN': token
                },
                type: 'POST',
                data: formData,
                processData: false,
                contentType: false,
                success: function(response) {
                    success(response)
                    initNestable();
                }, error: function(jqXHR, textStatus, errorThrown) {
                    console.log('error')
                    if (jqXHR.status == 422) {
                        var response = JSON.parse(jqXHR.responseText);

                        for (var i in response) {
                            var index = i.split('.');
                            console.log('#' + index[0] + '-' + index[1] + '')

                            if (index.length == 1) {
                                form.find('#' + i).css('border', '1px solid red');
                            } else {
                                console.log('#' + index[0] + '[' + index[1] + ']')
                                form.find('#' + index[0] + '\\[' + index[1] + '\\]').css('border', '1px solid red');
                            }
                            errors.append(response[i] + '<br>');
                        }
                    }

                }
            });
        }

    </script>
@stop
@section('resources')
    <link rel="stylesheet" href="{{ asset('assets/admin/lib/unitegallery/dist/css/unite-gallery.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/admin/lib/jquery-palette-color-picker/src/palette-color-picker.css') }}">


    <script src="{{ asset('assets/admin/lib/jquery.nestable.js') }}"></script>
    <script src="{{ asset('assets/admin/lib/unitegallery/dist/js/unitegallery.min.js') }}"></script>
    <script src="{{ asset('assets/admin/lib/unitegallery/dist/themes/tiles/ug-theme-tiles.js') }}"></script>
    <script src="{{ asset('assets/admin/lib/jquery-palette-color-picker/src/palette-color-picker.js') }}"></script>
@stop
