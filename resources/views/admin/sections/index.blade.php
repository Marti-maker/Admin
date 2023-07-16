@php
  $types = config('section_type.list');
  $url = admin_route('sections.index');
@endphp
@foreach($entities as $entity)
    <li class="dd-item cf " data-parent-id="{{ isset($parentId) ? $parentId : 0 }}" data-id="{{ $entity->id }}">
        <div class="dd-content cf">
            <div class="list-header" style="width: 60%">
                <div class="dd-handle pull-left">
                    <span class="glyphicon glyphicon-option-vertical"></span>

                </div>
                @if ($entity->parent_id === 0)
                <span class="badge" style="color: #fff; background-color: #17a2b8;">{{ $entity->type }}</span>
                &nbsp;
                @endif
                <a href="javascript:void(0)" onclick="editSection('{{ $url }}/{{ $entity->id }}/edit')">

                    @if($entity->cover)
                        <img src="{{ $entity->cover }}">
                    @elseif($entity->cover_image)
                        <img src="{{ $entity->cover_image }}">
                    @endif
                    <div class="">{{ str_limit($entity->title, 40) }}</div> {{ ($entity->title && $entity->description ? ' | ' : '') . str_limit($entity->description, 40) }}
                </a>
            </div>
            <div class="list-btn-group cf" style="width: 40%">
                <div class="list-btn">
                    <a class="glyphicon glyphicon-trash"  onclick="MOD.delete('{{$entity->id}}','{{ $url }}'); " role="button" title="{{admin_trans('delete')}}"></a>
                </div>
                <div class="list-btn">
                    <a class="glyphicon glyphicon-edit" onclick="editSection('{{ $url }}/{{ $entity->id }}/edit')" role="button" title="{{ admin_trans('edit') }}"></a>
                </div>
                @if($entity->parent_id == 0)
                    <div class="list-btn">
                        <a class="glyphicon glyphicon-plus" @if(!in_array($entity->type, config('section_type.types_with_sub_elements'))) style="opacity: 0" @endif onclick="preprocessSection(0, '{{ $entity->id }}')" role="button" title="{{ admin_trans('subelements') }}"></a>
                    </div>
                    <div class="list-btn">
                        <img src="{{ asset('assets/admin/images/section_types')}}/{{ $types[$entity->type] }}" style="height: 45px; max-width: 130px">
                    </div>
                @endif
            </div>
        </div>
        @if(!$entity->children->isEmpty())
            <ol class="dd-list">
                @include('admin.sections.index', ['entities' => $entity->children->all(), 'parentId' => $entity->parent_id])
            </ol>
        @endif
    </li>
@endforeach
