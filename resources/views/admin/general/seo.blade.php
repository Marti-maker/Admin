@php($edit = $entity->id > 0 ? 'edit' : '')
<div class="panel panel-default">
    <div class="panel-heading">
        {{admin_trans('seotool')}}
    </div>
    <div class="panel-body">
        <div class="seo-snippet-area">
            <div class="rc">
                <h3><a href="{{ URL::to('/') }}/{{locale_prefix($language->locale)}}{{ implode('/', $entity->getSlugTreeAttribute($language->locale)) }}" id="preview_title-{{ $language->id }}">{{ $entity->translate($language->locale)->title ?? '' }}</a></h3>
                <div class="desc-container">
                    <div class="preview-link">
                        {{ URL::to('/') }}/{{$language->locale == 'en' ? '' : $language->locale.'/'}}{{ $entity->isRelation('ancestors') ? implode('/', $entity->getSlugParentsAttribute($language->locale)) : '' }}/{!! Form::text($language->locale.'[slug]',  $entity->translate($language->locale)->slug ?? '', ['placeholder' => admin_trans('sefurl') . '(' . $language->name . ')', 'class' => 'inline-form-control ' . $edit, 'id' => 'sefurl-'.$language->id]) !!}
                    </div>
                    <span class="st" id="preview_description-{{ $language->id }}"></span>
                </div>
            </div>
        </div>
        <div class="form-group">
            {!! Form::label('meta_title-'.$language->id, admin_trans('meta_title') . '(' . $language->name . ')') !!}
            {!! Form::text($language->locale.'[meta_title]',  $entity->translate($language->locale)->meta_title ?? '', ['placeholder' => admin_trans('meta_title'), 'class' => 'form-control', 'id' => 'meta_title-'.$language->id]) !!}
        </div>

        <div class="form-group">
            {!! Form::label('meta_description-'.$language->id, admin_trans('meta_description') . '(' . $language->name . ')') !!}
            {!! Form::textarea($language->locale.'[meta_description]',  $entity->translate($language->locale)->meta_description ?? '', ['size' => '30x5','placeholder' => admin_trans('meta_description'), 'class' => 'form-control', 'id' => 'meta_description-'.$language->id]) !!}
        </div>

    </div>
</div>
