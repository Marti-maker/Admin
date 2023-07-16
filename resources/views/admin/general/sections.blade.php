@foreach($sections as $key=>$sectionData)
    <div class="section-wrapper">
        <div class="divider"></div>
        <div id="section}-{{$key}}">
            <div role="tabpanel">
                <ul id="sections-language-tabs-{{ $key }}" class="nav nav-tabs" role="tablist">
                    @foreach($languages as $langKey=>$language)
                        <li role="presentation" @if($langKey == 0) class="active" @endif>
                            <a href="#sections-{{ $key }}-{{$language->language_code}}" aria-controls="home" role="tab" data-toggle="tab">{{$language->language_name}}</a>
                        </li>
                    @endforeach
                </ul>
            </div>

            <div class="tab-content">
                @foreach($languages as $langKey=>$language)

                    @php
                        $section = isset($sectionData[$language->language_id]) ? $sectionData[$language->language_id] : []
                    @endphp
                    <div role="tabpanel" class="tab-pane @if($langKey == 0) active @endif " id="sections-{{ $key }}-{{$language->language_code}}">
                        {!! Form::label('sections['.$language->language_id.']['.$key.']', $label['section'] . '(' . $language->language_name . ')' ) !!}
                        <a onclick="MOD.deleteSection($(this).closest('.section-wrapper'));">{{ $label['delete_section_btn'] }}</a>
                        <div id="section-{{ $key }}-{{ $language->language_id }}">
                            <div class="section-item" style="width: 100%">
                                <div class="panel panel-default">
                                    <div class="panel-heading"><i class="glyphicon glyphicon-option-vertical"></i> {{$label['additional_panel']}} ({{ $language->language_name }})</div>
                                    <div class="panel-body">
                                        <div class="col-lg-6">
                                            <div class="form-group">
                                                <label for="title-{{ $key }}-{{ $language->language_id }}">{{ $label['title'] }} ({{ $language->language_name }})</label>
                                                <input type="text" class=" form-control" id="title-{{ $key }}-{{ $language->language_id }}" value="{{ isset($section['title']) ? $section['title'] : '' }}" name="sections[{{ $key }}][{{ $language->language_id }}][title]"  placeholder="{{ $label['title'] }}" />
                                            </div>
                                            <div class="form-group">
                                                <label for="section-link-title-{{ $key }}-{{ $language->language_id }}">{{ $label['link_title'] }} ({{ $language->language_name }})</label>
                                                <input type="text" class=" form-control" id="section-link-title{{ $language->language_id }}-{{ $key }}" value="{{ isset($section['link']['title']) ? $section['link']['title'] : '' }}" name="sections[{{ $key }}][{{ $language->language_id }}][link][title]" placeholder="{{ $label['link_title'] }}"  />
                                            </div>
                                            <div class="form-group">
                                                <label for="section-link-href-{{ $key }}-{{ $language->language_id }}">{{ $label['link_href'] }} ({{ $language->language_name }})</label>
                                                <input type="text" class=" form-control" id="section-link-href{{ $language->language_id }}-{{ $key }}" value="{{ isset($section['link']['href']) ? $section['link']['href'] : '' }}" name="sections[{{ $key }}][{{ $language->language_id }}][link][href]" placeholder="{{ $label['link_href'] }}"  />
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="form-group">
                                                <label for="section-link-1-href-{{ $key }}-{{ $language->language_id }}">{{ $label['section_description'] }} ({{ $language->language_name }})</label>
                                                <textarea name="sections[{{ $key }}][{{ $language->language_id }}][description]" style="height: 185px" class="form-control" id="{{ 'section-editor-' . $language->language_id . '-' . $key }}">{{ isset($section['description']) ? $section['description'] : '' }}</textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                @endforeach
                <div class="section-item" style="width: 50%">
                    <div class="panel panel-default">
                        <div class="panel-heading"><i class="glyphicon glyphicon-cog"></i> {{ $label['settings'] }}</div>
                        <div class="panel-body">
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label for="columns-{{ $key }}">{{ $label['section_columns'] }} </label>
                                    <select class="form-control" id="columns-{{ $key }}" name="sections[{{ $key }}][columns]">
                                        @foreach(config('columns.list') as $columnKey=>$column)
                                            <option {{ isset($sectionData['columns']) && $sectionData['columns'] == $columnKey ? "selected" : ""  }} value="{{ $columnKey }}">{{ $column }}</option>
                                        @endforeach
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="button-type-{{ $key }}">{{ $label['button_type'] }} </label>
                                    <select class="form-control" id="button-type-{{ $key }}" name="sections[{{ $key }}][link][type]">
                                        @foreach($label['button_type_options'] as $btnType=>$btnTypeText)
                                            <option {{ isset($sectionData['link']['type']) && $sectionData['link']['type'] == $btnType ? "selected" : ""  }} value="{{ $btnType }}">{{ $btnTypeText }}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label for="columns-{{ $key }}">{{ $label['section_columns'] }} </label>
                                    <select class="form-control" id="columns-{{ $key }}" name="sections[{{ $key }}][columns]">
                                        @foreach(config('columns.list') as $columnKey=>$column)
                                            <option {{ isset($sectionData['columns']) && $sectionData['columns'] == $columnKey ? "selected" : ""  }} value="{{ $columnKey }}">{{ $column }}</option>
                                        @endforeach
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="button-type-{{ $key }}">{{ $label['button_type'] }} </label>
                                    <select class="form-control" id="button-type-{{ $key }}" name="sections[{{ $key }}][link][type]">
                                        @foreach($label['button_type_options'] as $btnType=>$btnTypeText)
                                            <option {{ isset($sectionData['link']['type']) && $sectionData['link']['type'] == $btnType ? "selected" : ""  }} value="{{ $btnType }}">{{ $btnTypeText }}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <label for="modules-{{ $key }}">{{ $label['modules'] }} </label>
                                    <select class="form-control" id="modules-'{{ $key }}'" name="sections[{{ $key }}][module]">
                                        <option value="-1">{{ $label['module_default_label'] }}</option>
                                        @foreach($modules as $moduleKey=>$module)
                                            <option {{ isset($sectionData['module']) && $sectionData['module'] == $moduleKey ? "selected" : ""  }} value="{{ $moduleKey }}">{{ $module['name'] }}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section-item">
                    <div class="panel panel-default">
                        <div class="panel-heading"><span class="glyphicon glyphicon-picture"></span> {{ $label['cover'] }}</div>
                        <div class="panel-body" style="height: 251px;">
                            <div id="covre_preview" style="margin-top: 15%;">
                                <input type="hidden" name="sections[{{ $key }}][cover]" value="{{ (isset($sectionData['cover']) && $sectionData['cover'] ? $sectionData['cover'] : '') }}" id="section-cover-{{  $key }}" />

                                @if(isset($sectionData['cover']) && $sectionData['cover'])
                                    <img class="img-responsive" style="height: 92px; margin: auto" id="section-cover-{{ $key }}-cont" src="{{ $sectionData['cover'] }}" >
                                @else
                                    <img class="img-responsive" style="height: 92px; margin: auto" id="section-cover-{{ $key }}-cont" src="/images/no_image.jpg" >
                                @endif

                                <div class="divider"></div>
                                <div class="img-btn-wrapper">
                                    <div class="img-action-btn">
                                        <a class="btn btn-success fancybox-upload-img" id="section-cover-{{ $key }}-popup" href="/kipo_admin/filemanager/dialog.php?akey=634d1f4a2c7712845f03c7a0c645d261&type=1&amp;field_id=section-cover-{{ $key }}" role="button" title="{{ $label['upload'] }}"><i class="glyphicon glyphicon-plus"></i></a>
                                        <a class=" btn btn-danger " onclick="removeImage(this)" data-id="section-cover-{{ $key }}" role="button" title="{{$label['delete']}}"><i class="glyphicon glyphicon-trash"></i></a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <input type="hidden" name="sections[{{ $key }}][type]" value="{{ (isset($sectionData['type']) && $sectionData['type'] ? $sectionData['type'] : '') }}" id="section-type-{{  $key }}" />
            </div>
        </div>
    </div>
@endforeach
