<ol class="dd-list">
    @foreach ($entities as $key=>$item)
        <li class="dd-item cf" data-id="{{ $item->id }}">
            <div class="dd-content cf">
                <div class="list-header">
                    <div class="dd-handle pull-left">
                        <span class="glyphicon glyphicon-option-vertical"></span>
                    </div>
                    <a href="{{ admin_route('pages.edit', [$item->id]) }}">
                        @if($item->cover)
                            <img src="{{ $item->cover }}"/>
                        @else
                            <img src="{{asset('assets/admin/images/no_image.jpg')}}"/>
                        @endif
                        <div class="">{{ $item->title }}</div>
                    </a>
                </div>
                <div class="list-btn-group cf">
                    <div class="list-btn">
                        <a class="glyphicon glyphicon-trash"   onclick="MOD.delete('{{$item->id}}','{{ $url }}');" role="button" title="{{ admin_trans('delete') }}"></a>

                    </div>
                    <div class="list-btn">
                        <a class="glyphicon glyphicon-edit"  href="{{ admin_route('pages.edit', [$item->id]) }}" role="button" title="{{ admin_trans('edit') }}"></a>
                    </div>
                    <div class="list-btn">
                        <div data-id="{{$item->id}}" onclick="MOD.visible(this, '{{ $url }}')" class="btn-switch @if($item->status) active @endif" title="{{ admin_trans('publish') }}">
                            <div class="btn-toggle"></div>
                        </div>
                    </div>
                    <div class="list-btn">
                        {{ $item->domains }}
                    </div>
                </div>
            </div>
            @if(count($item->children) > 0)
                @include('admin.pages.render', array('entities' => $item->children->all()))
            @endif
        </li>

    @endforeach

</ol>
