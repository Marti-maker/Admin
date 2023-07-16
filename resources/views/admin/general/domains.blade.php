<div class="panel panel-default">
    <div class="panel-heading"><span class="glyphicon glyphicon-list"></span> {{ admin_trans('domains') }}</div>
    <div class="panel-body" style=" height:230px; overflow:scroll;">
        @foreach($domains as $domain)
            @php
                $id = $domain->id
            @endphp
            <div class="checkbox">
                <label @if(in_array($id, $entity->selected_domains)) class="btn-success" @endif>
                    <input name="domains[{{ $id }}]" type="checkbox" value="{{ $id }}" @if(in_array($id, $entity->selected_domains)) checked="checked" @endif> {{ $domain->domain }}
                </label>
            </div>
        @endforeach
    </div>
</div>
