@php
    $reusableComponentsPath = 'admin.sections.reusable_components';
    $hasSettings = true;
    $formData['id'] = 'section_form';
@endphp
<div id="section-wrapper" class="container-fluid">
    {!! Form::open($formData) !!}
    {!! Form::hidden('parent_id', optional($entity)->parent_id) !!}
    {!! Form::hidden('type', optional($entity)->type, ['id'=> 'section-type']) !!}

    <div class="row">
        <div class="col-lg-12">
            @php
                $hasDescription = false;

                if(in_array('title', $typeFields) || in_array('subtitle', $typeFields) || in_array('description', $typeFields) || in_array('links', $typeFields) || in_array('subtitle', $typeFields)) {
                    $hasDescription = true;
                }
            @endphp
            @if($hasDescription)
                <div role="tabpanel">
                    <ul id="language-tabs" class="nav nav-tabs" role="tablist">
                        @foreach($languages as $key=>$language)
                            <li role="presentation" @if($key == 0) class="active" @endif>
                                <a href="#section-{{$language->code}}" aria-controls="home" role="tab" data-toggle="tab">{{$language->name}}</a>
                            </li>
                        @endforeach
                    </ul>
                </div>
            @endif
            @if ($hasDescription)
                <div class="tab-content">

                    @foreach($languages as $key=>$language)
                        <div role="tabpanel" class="tab-pane @if(!$hasDescription) hide @endif @if($key == 0) active @endif " id="section-{{$language->code}}">
                            <div class="section-item" style="width: 100%">
                                <div class="panel panel-default">
                                    <div class="panel-heading"><i class="glyphicon glyphicon-option-vertical"></i> {{admin_trans('sections.additional_panel')}} ({{ $language->name }})</div>
                                    <div class="panel-body">
                                        <div class="col-lg-6 @if(!(in_array('title', $typeFields) || in_array('subtitle', $typeFields) || in_array('links', $typeFields) || in_array('subtitle', $typeFields))) hide @endif">
                                            <div class="form-group @if(!in_array('title', $typeFields)) hide @endif">
                                                {!! Form::label($language->locale.'[title]', admin_trans('sections.title') . '(' . $language->name . ')') !!}
                                                {!! Form::text($language->locale.'[title]',  $entity->translate($language->locale)->title ?? '', ['placeholder' => admin_trans('sections.title'), 'class' => 'form-control']) !!}
                                            </div>
                                            <div class="form-group @if(!in_array('subtitle', $typeFields)) hide @endif">
                                                {!! Form::label($language->locale.'[subtitle]', admin_trans('sections.subtitle') . '(' . $language->name . ')') !!}
                                                {!! Form::text($language->locale.'[subtitle]',  $entity->translate($language->locale)->subtitle ?? '', ['placeholder' => admin_trans('sections.subtitle'), 'class' => 'form-control']) !!}
                                            </div>
                                            <div class="form-group @if((!in_array('link_title', $typeFields)) || (!in_array('links', $typeFields))) hide @endif">
                                                {!! Form::label($language->locale.'[link_title]', admin_trans('sections.link_title') . '(' . $language->name . ')') !!}
                                                {!! Form::text($language->locale.'[link_title]',  $entity->translate($language->locale)->link_title ?? '', ['placeholder' => admin_trans('sections.link_title'), 'class' => 'form-control']) !!}
                                            </div>

                                            <div class="form-group @if(!in_array('links', $typeFields)) hide @endif">
                                                {!! Form::label($language->locale.'[link_href]', admin_trans('sections.link_href') . '(' . $language->name . ')') !!}
                                                {!! Form::text($language->locale.'[link_href]',  $entity->translate($language->locale)->link_href ?? '', ['placeholder' => admin_trans('sections.link_href'), 'class' => 'form-control']) !!}
                                            </div>
                                            <div class="form-group @if(!in_array('custom_email', $typeFields)) hide @endif">
                                                {!! Form::label($language->locale.'[custom_email]', admin_trans('sections.custom_email') . '(' . $language->name . ')') !!}
                                                {!! Form::text($language->locale.'[custom_email]',  $entity->translate($language->locale)->custom_email ?? '', ['placeholder' => admin_trans('sections.custom_email'), 'class' => 'form-control']) !!}
                                            </div>

                                        </div>
                                        <div class="col-lg-6">
                                            @php
                                                if(in_array('description', $typeFields) && in_array('second_description', $typeFields)) {
                                                    $height = '109px';
                                                } else {
                                                    $height = '256px';
                                                }
                                            @endphp
                                            <div class="@if(!(in_array('description', $typeFields) || in_array('editor', $typeFields))) hide @endif">
                                                @php
                                                    $editorId = 'editor-' . time() . $language->id;
                                                @endphp
                                                <div class="form-group">
                                                    {!! Form::label($language->locale.'[description]', admin_trans('sections.section_description') . '(' . $language->name . ')') !!}
                                                    {!! Form::textarea($language->locale.'[description]',  $entity->translate($language->locale)->description ?? '', ['placeholder' => admin_trans('sections.section_description'), 'class' => 'form-control ', 'id' => $editorId, 'style' => 'height: ' . $height]) !!}
                                                </div>
                                                <script>
                                                    {{--MOD.tinyInit('#{{ $editorId }}')--}}
                                                </script>
                                            </div>

                                            <div class="@if(!in_array('second_description', $typeFields)) hide @endif">
                                                @php
                                                    $secondDescriptionClass = isset($editorId) ? $editorId . '2' : 'editor-' . time() . $language->id . '2'
                                                @endphp
                                                <div class="form-group">
                                                    {!! Form::label($language->locale.'[second_description]', admin_trans('sections.second_description') . '(' . $language->name . ')') !!}
                                                    {!! Form::textarea($language->locale.'[second_description]',  $entity->translate($language->locale)->second_description ?? '', ['placeholder' => admin_trans('sections.second_description'), 'class' => 'form-control', 'id' => $secondDescriptionClass, 'style' => 'height: ' . $height]) !!}
                                                </div>
                                                <script>
                                                    {{--MOD.tinyInit('#{{ $secondDescriptionClass }}')--}}
                                                </script>
                                            </div>
                                            <div class='@if (!in_array('video_link', $typeFields)) hide @endif'>
                                                <div class="form-group">
                                                    {!! Form::label($language->locale.'[video_link]', admin_trans('sections.video_link') . '(' . $language->name . ')') !!}
                                                    {!! Form::text($language->locale.'[video_link]', $entity->translate($language->locale)->video_link ?? '', ['class' => 'form-control', 'placeholder' => admin_trans('sections.video_link')]) !!}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <section class="section-base-data">
                                @if(in_array('module_items', $typeFields))
                                    <div id="section-module-items" class="section-item" @if(!$hasSettings) style="width: 50%" @endif>
                                        <div class="panel panel-default">
                                            <div class="panel-heading"><span class="glyphicon glyphicon-list"></span> {{ $moduleItems['label'] }}</div>
                                            <div class="panel-body" style=" height:230px; overflow:scroll;">
                                                @foreach($moduleItems['list'] as $id=>$entityName)
                                                    <div class="checkbox">
                                                        <label @if(in_array($id, optional($entity)->selected_module_items)) class="btn-success" @endif>
                                                            <input name="module-items[{{ $id }}]" type="checkbox" value="{{ $id }}" @if(in_array($id, optional($entity)->selected_module_items)) checked="checked" @endif> {{ $entityName }}
                                                        </label>
                                                    </div>
                                                @endforeach
                                            </div>
                                        </div>
                                    </div>
                                    <script>
                                        MOD.checkbox($('#section-module-items input[type="checkbox"]'))
                                    </script>
                                @endif

                                @if (in_array('cover_image', $typeFields))
                                    <div class="section-item @if(!(in_array('cover_image', $typeFields) || in_array('colour', $typeFields))) hide @endif">
                                        <div class="panel panel-default">
                                            <div role="tabpanel">
                                                <ul id="section-tabs" class="nav nav-tabs" role="tablist">
                                                    @if(in_array('cover_image', $typeFields))
                                                        <li role="presentation" @if(optional($entity)->cover_image || !optional($entity)->color) class="active" @endif>
                                                            <a href="#section-cover-tab" aria-controls="home" role="tab" data-toggle="tab"><i class="glyphicon glyphicon-picture"></i> {{ admin_trans('sections.cover_image') }}</a>
                                                        </li>
                                                    @endif
                                                    @if(in_array('colour', $typeFields))
                                                        <li role="presentation" @if((!in_array('cover_image', $typeFields)) || (optional($entity)->color && !optional($entity)->cover_image)) class="active" @endif>
                                                            <a href="#section-color-tab" aria-controls="home" role="tab" data-toggle="tab"><i class="glyphicon glyphicon-pencil"></i> {{ admin_trans('sections.color') }}</a>
                                                        </li>
                                                    @endif
                                                </ul>
                                            </div>
                                            <div class="tab-content">
                                                <div role="tabpanel" class="tab-pane @if(!in_array('cover_image', $typeFields)) hide @endif @if(optional($entity)->cover_image || !optional($entity)->color) active @endif" id="section-cover-tab">
                                                    <div class="panel-body" style="height: 251px;">
                                                        <div id="covre_preview" class="section-flex">
                                                            {!! Form::hidden($language->locale.'[cover_image]', isset(optional($entity)->cover_image) ? $entity->translate($language->locale)->cover_image ?? '' : null, ['id'=> 'cover_image_'.$language->id]) !!}
                                                            @if(optional($entity->translate($language->locale))->cover_image)
                                                                <img class="img-responsive" style="max-width: 215px; max-height: 90px; margin: auto" id="cover_image_{{$language->id}}-cont" src="{{ $entity->translate($language->locale)->cover_image ?? '' }}" >
                                                            @elseif(isset(optional($entity)->cover) && optional($entity)->cover)
                                                                <img class="img-responsive" style="max-width: 215px; max-height: 90px; margin: auto" id="cover_image_{{$language->id}}-cont" src="{{ optional($entity)->cover }}" >
                                                            @else
                                                                <img class="img-responsive" style="max-width: 215px; max-height: 90px; margin: auto" id="cover_image_{{$language->id}}-cont" src="{{ asset('assets/admin/images/no_image.jpg') }}" >
                                                            @endif
                                                        </div>
                                                        @if(!empty($imageDimensions))
                                                            <div class="image-dimension">{{ $imageDimensions['width'] }}x{{ $imageDimensions['height'] }}</div>
                                                        @endif
                                                        <div class="img-btn-wrapper">
                                                            <div class="img-action-btn">
                                                                <a class="btn btn-success fancybox-upload-img" id="cover_image-popup" href="/kipo_admin/filemanager/dialog.php?akey=634d1f4a2c7712845f03c7a0c645d261&type=1&amp;field_id=cover_image_{{$language->id}}" role="button" title="{{ admin_trans('sections.upload') }}"><i class="glyphicon glyphicon-plus"></i></a>
                                                                <a class=" btn btn-danger " onclick="removeImage(this)" data-id="cover_image_{{$language->id}}" role="button" title="{{admin_trans('sections.delete')}}"><i class="glyphicon glyphicon-trash"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div role="tabpanel" class="tab-pane @if(!in_array('colour', $typeFields)) hide @endif @if((!in_array('cover_image', $typeFields)) || (optional($entity)->color && !optional($entity)->cover_image)) active @endif" id="section-color-tab">
                                                    <div class="panel-body" style="height: 251px;">
                                                        <div class="section-flex">
                                                            {!! Form::text('color',  optional($entity)->color, ['class' => 'form-control kipo-colour-picker', 'style' => 'display: inline-block; width: 170px; vertical-align: top']) !!}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                @endif


                            </section>
                        </div>
                    @endforeach
                    <section class="section-base-data">
                        @php
                            $sectionItemClass = '';
                            if(!(in_array('columns', $typeFields) || in_array('cover_position', $typeFields) || in_array('link_type', $typeFields) || in_array('link_position', $typeFields) || in_array('title_position', $typeFields) || in_array('link_colour', $typeFields) || in_array('module', $typeFields))) {
                                $hasSettings = false;
                                $sectionItemClass = 'hide';
                            }
                        @endphp

                        <div class="section-item {{ $sectionItemClass }} " id="section-settings-cont" style="width: 50% ">
                            <div class="panel panel-default">
                                <div class="panel-heading"><i class="glyphicon glyphicon-cog"></i> {{ admin_trans('sections.settings') }}</div>
                                <div class="panel-body">
                                    <div class="col-lg-12">
                                        <div class='col-lg-6 @if(!in_array('columns', $typeFields)) hide @endif'>
                                            <div class="form-group">
                                                {!! Form::label('columns', admin_trans('sections.section_columns')) !!}
                                                {!! Form::select('columns', config('columns.list'),optional($entity)->columns, ['class' => 'form-control']) !!}
                                            </div>
                                        </div>
                                        <div class='col-lg-6 @if(!in_array('link_type', $typeFields)) hide @endif'>
                                            <div class="form-group">
                                                @php
                                                    $link = config('section_link');
                                                @endphp
                                                {!! Form::label('link_type', admin_trans('sections.link_type')) !!}
                                                {!! Form::select('link_type', $link['type.options'],optional($entity)->link_type, ['class' => 'form-control']) !!}
                                            </div>
                                        </div>
                                        <div class='col-lg-6 @if(!in_array('link_position', $typeFields)) hide @endif'>
                                            <div class="form-group">
                                                {!! Form::label('link_position', admin_trans('sections.link_position')) !!}
                                                {!! Form::select('link_position', $link['position.options'],optional($entity)->link_position, ['class' => 'form-control']) !!}
                                            </div>
                                        </div>
                                        <div class="col-lg-6 @if(!in_array('link_colour', $typeFields)) @endif">
                                            {!! Form::label('link_color', admin_trans('sections.link_color')) !!}
                                            <div class='form-group'>
                                                {!! Form::text('link_color',  optional($entity)->link_color, ['class' => 'form-control kipo-link-colour-picker', 'style' => 'display: inline-block; width: 80%; vertical-align: top']) !!}
                                            </div>
                                        </div>

                                        <script>
                                            $('.kipo-link-colour-picker').paletteColorPicker({
                                                colors: [
                                                    "teal",
                                                    "#fff"],
                                                timeout: 1000
                                            });
                                        </script>
                                        <div class="col-lg-6 @if(!in_array('title_position', $typeFields)) hide @endif">
                                            <div class='form-group'>
                                                @php
                                                    $title_positions = [];

                                                    foreach (\App\Models\Section::TITLE_POSITION as $title_key=>$title_position) {
                                                        $title_positions[$title_key] = admin_trans($title_position['constant']);
                                                    }

                                                @endphp
                                                {!! Form::label('title_position', admin_trans('sections.title_position')) !!}
                                                {!! Form::select('title_position', $title_positions, optional($entity)->title_position, ['class' => 'form-control']) !!}
                                            </div>
                                        </div>
                                        @if(in_array('module', $typeFields) && in_array('links', $typeFields))
                                            @include($reusableComponentsPath . '.module', ['class' => 'col-lg-6'])
                                        @endif
                                        <div class="col-lg-6 @if(!in_array('block_position', $typeFields)) hide @endif">
                                            <div class='form-group'>
                                                @php
                                                    $block_positions = [];

                                                    foreach (\App\Models\Section::BLOCK_POSITION as $block_key=>$block_position) {
                                                        $block_positions[$block_key] = admin_trans($block_position['constant']);
                                                    }

                                                @endphp
                                                {!! Form::label('block_position', admin_trans('sections.block_position')) !!}
                                                {!! Form::select('block_position', $block_positions, optional($entity)->block_position, ['class' => 'form-control']) !!}
                                            </div>
                                        </div>
                                        <div class="col-lg-6 @if(!in_array('cover_position', $typeFields)) hide @endif">
                                            <div class='form-group'>
                                                @if(isset(\App\Models\Section::COVER_POSITION[optional($entity)->type]))
                                                    @php
                                                        $cover_positions = [];

                                                        foreach (\App\Models\Section::COVER_POSITION[optional($entity)->type] as $block_key=>$cover_position) {
                                                            $cover_positions[$block_key] = admin_trans($cover_position['constant']);
                                                        }

                                                    @endphp
                                                    {!! Form::label('cover_position', admin_trans('sections.cover_position')) !!}
                                                    {!! Form::select('cover_position', $cover_positions, optional($entity)->cover_position, ['class' => 'form-control']) !!}
                                                @else
                                                    {!! Form::hidden('cover_position', optional($entity)->cover_position) !!}
                                                @endif
                                            </div>
                                        </div>
                                        <div class="col-lg-6 @if(!in_array('cover_type', $typeFields)) hide @endif">
                                            <div class='form-group'>
                                                @if(isset(\App\Models\Section::COVER_TYPE[optional($entity)->type]))
                                                    @php
                                                        $cover_types = [];

                                                        foreach (\App\Models\Section::COVER_TYPE[optional($entity)->type] as $block_key=>$cover_type) {
                                                            $cover_types[$block_key] = admin_trans($cover_type['constant']);
                                                        }

                                                    @endphp
                                                    {!! Form::label('cover_type', admin_trans('sections.cover_type')) !!}
                                                    {!! Form::select('cover_type', $cover_types, optional($entity)->cover_type, ['class' => 'form-control']) !!}
                                                @else
                                                    {!! Form::hidden('cover_type', optional($entity)->cover_type) !!}
                                                @endif
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <script>
                            var settingsWrapper = $('#section-settings-cont');
                            var sectionModuleSelector = $('#section-module-items');
                            var settingsItems = settingsWrapper.find('.col-lg-6');

                            if(sectionModuleSelector.length > 0 && settingsItems.length <= 4 && settingsItems.length > 1) {
                                settingsWrapper.width('300px');
                                settingsItems.attr('style', 'width: 100%');
                                sectionModuleSelector.width('290px')
                            }
                        </script>
                        @if (in_array('cover', $typeFields) && !in_array('cover_image', $typeFields) && in_array('colour', $typeFields))
                            <div class="section-item @if(!(in_array('cover', $typeFields) || in_array('colour', $typeFields))) hide @endif">
                                <div class="panel panel-default">
                                    <div role="tabpanel">
                                        <ul id="section-tabs" class="nav nav-tabs" role="tablist">
                                            @if(in_array('cover', $typeFields))
                                                <li role="presentation" @if(optional($entity)->cover || !optional($entity)->color) class="active" @endif>
                                                    <a href="#section-cover-tab" aria-controls="home" role="tab" data-toggle="tab"><i class="glyphicon glyphicon-picture"></i> {{ admin_trans('cover') }}</a>
                                                </li>
                                            @endif
                                            @if(in_array('colour', $typeFields))
                                                <li role="presentation" @if((!in_array('cover', $typeFields)) || (optional($entity)->color && !optional($entity)->cover)) class="active" @endif>
                                                    <a href="#section-color-tab" aria-controls="home" role="tab" data-toggle="tab"><i class="glyphicon glyphicon-pencil"></i> {{ admin_trans('sections.color') }}</a>
                                                </li>
                                            @endif
                                        </ul>
                                    </div>
                                    <div class="tab-content">
                                        <div role="tabpanel" class="tab-pane @if(!in_array('cover', $typeFields)) hide @endif @if(optional($entity)->cover || !optional($entity)->color) active @endif" id="section-cover-tab">
                                            <div class="panel-body" style="height: 251px;">
                                                <div id="covre_preview" class="section-flex">
                                                    {!! Form::hidden('section-cover', isset(optional($entity)->cover) ? optional($entity)->cover : null, ['id'=> 'section-cover']) !!}
                                                    @if(isset(optional($entity)->cover) && optional($entity)->cover)
                                                        <img class="img-responsive" style="max-width: 215px; max-height: 90px; margin: auto" id="section-cover-cont" src="{{ optional($entity)->cover }}" >
                                                    @else
                                                        <img class="img-responsive" style="max-width: 215px; max-height: 90px; margin: auto" id="section-cover-cont" src="{{ asset('assets/admin/images/no_image.jpg') }}" >
                                                    @endif
                                                </div>
                                                @if(!empty($imageDimensions))
                                                    <div class="image-dimension">{{ $imageDimensions['width'] }}x{{ $imageDimensions['height'] }}</div>
                                                @endif
                                                <div class="img-btn-wrapper">
                                                    <div class="img-action-btn">
                                                        <a class="btn btn-success fancybox-upload-img" id="section-cover-popup" href="/kipo_admin/filemanager/dialog.php?akey=634d1f4a2c7712845f03c7a0c645d261&type=1&amp;field_id=section-cover" role="button" title="{{ admin_trans('sections.upload') }}"><i class="glyphicon glyphicon-plus"></i></a>
                                                        <a class=" btn btn-danger " onclick="removeImage(this)" data-id="section-cover" role="button" title="{{admin_trans('sections.delete')}}"><i class="glyphicon glyphicon-trash"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div role="tabpanel" class="tab-pane @if(!in_array('colour', $typeFields)) hide @endif @if((!in_array('cover', $typeFields)) || (optional($entity)->color && !optional($entity)->cover)) active @endif" id="section-color-tab">
                                            <div class="panel-body" style="height: 251px;">
                                                <div class="section-flex">
                                                    {!! Form::text('color',  optional($entity)->color, ['class' => 'form-control kipo-colour-picker', 'style' => 'display: inline-block; width: 170px; vertical-align: top']) !!}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            @if(in_array('section_type', $typeFields))
                                <div class="section-item" style="margin-right: 0; width: 319px">
                                    <div class="panel panel-default">
                                        <div class="panel-heading"><span class="glyphicon glyphicon-list"></span> {{ admin_trans('section_types') }}</div>
                                        <div class="panel-body" style="height: 251px;">
                                            <div id="covre_preview" class="section-flex">
                                                @php
                                                    $types = config('section_type.list');
                                                @endphp
                                                @if(isset(optional($entity)->type))
                                                    <img style="max-width: 215px; max-height: 225px; margin: auto" id="section-type-img" src="{{ asset('assets/admin/images/section_types') }}/{{ $types[optional($entity)->type] }}" >
                                                @endif
                                            </div>
                                            <div class="img-btn-wrapper">
                                                <div class="img-action-btn" style="width: 40px;">
                                                    <a class="btn btn-success" role="button" onclick="selectType()" title="{{ admin_trans('sections.edit') }}"><i class="glyphicon glyphicon-edit"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                    @endif
                    @endif
                </div>
                </section>
        </div>
        @else
            <section class="section-base-data">
                @php
                    if(!(in_array('columns', $typeFields) || in_array('cover_position', $typeFields) || in_array('link_type', $typeFields) || in_array('link_position', $typeFields) || in_array('title_position', $typeFields) || in_array('link_colour', $typeFields) || in_array('module', $typeFields))) {
                        $hasSettings = false;
                    }
                @endphp
                <div class="section-item ">
                    <div class="panel panel-default">
                        <div class="panel-heading"><i class="glyphicon glyphicon-cog"></i> {{ admin_trans('sections.settings') }}</div>
                        <div class="panel-body">
                            <div class="col-lg-12">

                                <div class='col-lg-6 @if(!in_array('columns', $typeFields)) hide @endif'>
                                    <div class="form-group">
                                        {!! Form::label('columns', admin_trans('sections.section_columns')) !!}
                                        {!! Form::select('columns', config('columns.list'),optional($entity)->columns, ['class' => 'form-control']) !!}
                                    </div>
                                </div>
                                <div class='col-lg-6 @if(!in_array('link_type', $typeFields)) hide @endif'>
                                    <div class="form-group">
                                        @php
                                            $link = config('section_link');
                                        @endphp
                                        {!! Form::label('link_type', admin_trans('sections.link_type')) !!}
                                        {!! Form::select('link_type', $link['type.options'],optional($entity)->link_type, ['class' => 'form-control']) !!}
                                    </div>
                                </div>
                                <div class='col-lg-6 @if(!in_array('link_position', $typeFields)) hide @endif'>
                                    <div class="form-group">
                                        {!! Form::label('link_position', admin_trans('sections.link_position')) !!}
                                        {!! Form::select('link_position', $link['position.options'],optional($entity)->link_position, ['class' => 'form-control']) !!}
                                    </div>
                                </div>
                                <div class="col-lg-6 @if(!in_array('link_colour', $typeFields)) @endif">
                                    {!! Form::label('link_color', admin_trans('sections.link_color')) !!}
                                    <div class='form-group'>
                                        {!! Form::text('link_color',  optional($entity)->link_color, ['class' => 'form-control kipo-link-colour-picker', 'style' => 'display: inline-block; width: 80%; vertical-align: top']) !!}
                                    </div>
                                </div>

                                <script>
                                    $('.kipo-link-colour-picker').paletteColorPicker({
                                        colors: [
                                            "teal",
                                            "#fff"],
                                        timeout: 1000
                                    });
                                </script>
                                <div class="col-lg-6 @if(!in_array('title_position', $typeFields)) hide @endif">
                                    <div class='form-group'>
                                        @php
                                            $title_positions = [];

                                            foreach (\App\Models\Section::TITLE_POSITION as $title_key=>$title_position) {
                                                $title_positions[$title_key] = admin_trans($title_position['constant']);
                                            }

                                        @endphp
                                        {!! Form::label('title_position', admin_trans('sections.title_position')) !!}
                                        {!! Form::select('title_position', $title_positions, optional($entity)->title_position, ['class' => 'form-control']) !!}
                                    </div>
                                </div>
                                @if(in_array('module', $typeFields) && in_array('links', $typeFields))
                                    @include($reusableComponentsPath . '.module', ['class' => 'col-lg-6'])
                                @endif
                                <div class="col-lg-6 @if(!in_array('block_position', $typeFields)) hide @endif">
                                    <div class='form-group'>
                                        @php
                                            $block_positions = [];

                                            foreach (\App\Models\Section::BLOCK_POSITION as $block_key=>$block_position) {
                                                $block_positions[$block_key] = admin_trans($block_position['constant']);
                                            }

                                        @endphp
                                        {!! Form::label('block_position', admin_trans('sections.block_position')) !!}
                                        {!! Form::select('block_position', $block_positions, optional($entity)->block_position, ['class' => 'form-control']) !!}
                                    </div>
                                </div>
                                <div class="col-lg-6 @if(!in_array('cover_position', $typeFields)) hide @endif">
                                    <div class='form-group'>
                                        @if(isset(\App\Models\Section::COVER_POSITION[optional($entity)->type]))
                                            @php
                                                $cover_positions = [];

                                                foreach (\App\Models\Section::COVER_POSITION[optional($entity)->type] as $block_key=>$cover_position) {
                                                    $cover_positions[$block_key] = admin_trans($cover_position['constant']);
                                                }

                                            @endphp
                                            {!! Form::label('cover_position', admin_trans('sections.cover_position')) !!}
                                            {!! Form::select('cover_position', $cover_positions, optional($entity)->cover_position, ['class' => 'form-control']) !!}
                                        @else
                                            {!! Form::hidden('cover_position', optional($entity)->cover_position) !!}
                                        @endif
                                    </div>
                                </div>
                                <div class="col-lg-6 @if(!in_array('cover_type', $typeFields)) hide @endif">
                                    <div class='form-group'>
                                        @if(isset(\App\Models\Section::COVER_TYPE[optional($entity)->type]))
                                            @php
                                                $cover_types = [];

                                                foreach (\App\Models\Section::COVER_TYPE[optional($entity)->type] as $block_key=>$cover_type) {
                                                    $cover_types[$block_key] = admin_trans($cover_type['constant']);
                                                }

                                            @endphp
                                            {!! Form::label('cover_type', admin_trans('sections.cover_type')) !!}
                                            {!! Form::select('cover_type', $cover_types, optional($entity)->cover_type, ['class' => 'form-control']) !!}
                                        @else
                                            {!! Form::hidden('cover_type', optional($entity)->cover_type) !!}
                                        @endif
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <script>
                    var settingsWrapper = $('#section-settings-cont');
                    var sectionModuleSelector = $('#section-module-items');
                    var settingsItems = settingsWrapper.find('.col-lg-6');

                    if(sectionModuleSelector.length > 0 && settingsItems.length <= 4 && settingsItems.length > 1) {
                        settingsWrapper.width('300px');
                        settingsItems.attr('style', 'width: 100%');
                        sectionModuleSelector.width('290px')
                    }
                </script>
                @if(in_array('module_items', $typeFields))
                    <div id="section-module-items" class="section-item" @if(!$hasSettings) style="width: 50%" @endif>
                        <div class="panel panel-default">
                            <div class="panel-heading"><span class="glyphicon glyphicon-list"></span> {{ $moduleItems['label'] }}</div>
                            <div class="panel-body" style=" height:230px; overflow:scroll;">
                                @foreach($moduleItems['list'] as $id=>$entityName)
                                    <div class="checkbox">
                                        <label @if(in_array($id, optional($entity)->selected_module_items)) class="btn-success" @endif>
                                            <input name="module-items[{{ $id }}]" type="checkbox" value="{{ $id }}" @if(in_array($id, optional($entity)->selected_module_items)) checked="checked" @endif> {{ $entityName }}
                                        </label>
                                    </div>
                                @endforeach
                            </div>
                        </div>
                    </div>
                    <script>
                        MOD.checkbox($('#section-module-items input[type="checkbox"]'))
                    </script>
                @endif
                <div class="section-item @if(!(in_array('cover', $typeFields) || in_array('colour', $typeFields))) hide @endif">
                    <div class="panel panel-default">
                        <div role="tabpanel">
                            <ul id="section-tabs" class="nav nav-tabs" role="tablist">
                                @if(in_array('cover', $typeFields))
                                    <li role="presentation" @if(optional($entity)->cover || !optional($entity)->color) class="active" @endif>
                                        <a href="#section-cover-tab" aria-controls="home" role="tab" data-toggle="tab"><i class="glyphicon glyphicon-picture"></i> {{ admin_trans('cover') }}</a>
                                    </li>
                                @endif
                                @if(in_array('colour', $typeFields))
                                    <li role="presentation" @if((!in_array('cover', $typeFields)) || (optional($entity)->color && !optional($entity)->cover)) class="active" @endif>
                                        <a href="#section-color-tab" aria-controls="home" role="tab" data-toggle="tab"><i class="glyphicon glyphicon-pencil"></i> {{ admin_trans('sections.color') }}</a>
                                    </li>
                                @endif
                            </ul>
                        </div>
                        <div class="tab-content">
                            <div role="tabpanel" class="tab-pane @if(!in_array('cover', $typeFields)) hide @endif @if(optional($entity)->cover || !optional($entity)->color) active @endif" id="section-cover-tab">
                                <div class="panel-body" style="height: 251px;">
                                    <div id="covre_preview" class="section-flex">
                                        {!! Form::hidden('section-cover', isset(optional($entity)->cover) ? optional($entity)->cover : null, ['id'=> 'section-cover']) !!}
                                        @if(isset(optional($entity)->cover) && optional($entity)->cover)
                                            <img class="img-responsive" style="max-width: 215px; max-height: 90px; margin: auto" id="section-cover-cont" src="{{ optional($entity)->cover }}" >
                                        @else
                                            <img class="img-responsive" style="max-width: 215px; max-height: 90px; margin: auto" id="section-cover-cont" src="{{ asset('assets/admin/images/no_image.jpg') }}" >
                                        @endif
                                    </div>
                                    @if(!empty($imageDimensions))
                                        <div class="image-dimension">{{ $imageDimensions['width'] }}x{{ $imageDimensions['height'] }}</div>
                                    @endif
                                    <div class="img-btn-wrapper">
                                        <div class="img-action-btn">
                                            <a class="btn btn-success fancybox-upload-img" id="section-cover-popup" href="/kipo_admin/filemanager/dialog.php?akey=634d1f4a2c7712845f03c7a0c645d261&type=1&amp;field_id=section-cover" role="button" title="{{ admin_trans('sections.upload') }}"><i class="glyphicon glyphicon-plus"></i></a>
                                            <a class=" btn btn-danger " onclick="removeImage(this)" data-id="section-cover" role="button" title="{{admin_trans('sections.delete')}}"><i class="glyphicon glyphicon-trash"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" class="tab-pane @if(!in_array('colour', $typeFields)) hide @endif @if((!in_array('cover', $typeFields)) || (optional($entity)->color && !optional($entity)->cover)) active @endif" id="section-color-tab">
                                <div class="panel-body" style="height: 251px;">
                                    <div class="section-flex">
                                        {!! Form::text('color',  optional($entity)->color, ['class' => 'form-control kipo-colour-picker', 'style' => 'display: inline-block; width: 170px; vertical-align: top']) !!}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                @if(in_array('section_type', $typeFields))
                    <div class="section-item" style="margin-right: 0; width: 319px">
                        <div class="panel panel-default">
                            <div class="panel-heading"><span class="glyphicon glyphicon-list"></span> {{ admin_trans('section_types') }}</div>
                            <div class="panel-body" style="height: 251px;">
                                <div id="covre_preview" class="section-flex">
                                    @php
                                        $types = config('section_type.list');
                                    @endphp
                                    @if(isset(optional($entity)->type))
                                        <img style="max-width: 215px; max-height: 225px; margin: auto" id="section-type-img" src="/kipo_admin/images/section_types/{{ $types[optional($entity)->type] }}" >
                                    @endif
                                </div>
                                <div class="img-btn-wrapper">
                                    <div class="img-action-btn" style="width: 40px;">
                                        <a class="btn btn-success" role="button" onclick="selectType()" title="{{ admin_trans('sections.edit') }}"><i class="glyphicon glyphicon-edit"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                @endif
            </section>
        @endif

        <div class="errors"></div>
    </div>
    <div class="text-center"><button class="btn btn-success btn-sx" style="margin-top: 10px" onclick="saveSection({{ isset(optional($entity)->id) && optional($entity)->id > 0 ? 1 : 0 }})" type="button">{{ admin_trans('save_btn') }}</button></div>
</div>
</div>
{!!  Form::close() !!}
</div>
<script>
    initColourPicker();
</script>
