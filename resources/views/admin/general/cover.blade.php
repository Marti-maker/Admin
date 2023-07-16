@php
    $fieldImage = isset($fieldImage) ? $fieldImage : 'cover';
    $defaultImage = isset($defaultImage) ? $defaultImage : asset('assets/admin/images/no_image.jpg');
@endphp
<div class="panel panel-default">
    <div class="panel-heading"><span class="glyphicon glyphicon-picture"></span> {{ admin_trans("$fieldImage") }}</div>
    <div class="panel-body">
        <div id="covre_preview">
            {!! Form::hidden("$fieldImage", isset($entity->$fieldImage) ? $entity->$fieldImage : null, ['id'=> "$fieldImage"]) !!}
            @if(old("$fieldImage"))
                @php
                    $entity->$fieldImage = old("$fieldImage");
                @endphp
            @endif
            @if(isset($entity->$fieldImage) && $entity->$fieldImage)
                <img class="img-responsive" id="{{ $fieldImage }}-cont" src="{{$entity->$fieldImage}}">
            @else
                <img class="img-responsive" id="{{ $fieldImage }}-cont" src="{{ $defaultImage }}">
            @endif

            <div class="divider"></div>
            @if(!empty($imageDimensions))
                <div class="image-dimension">{{ $imageDimensions['width'] }}x{{ $imageDimensions['height'] }}</div>
            @endif
            <div class="img-btn-wrapper">
                <div class="img-action-btn">
                    <a class="btn btn-success fancybox-upload-img"
                       href="/kipo_fm_/dialog.php?akey=634d1f4a2c7712845f03c7a0c645d261&type=1&amp;field_id={{ $fieldImage }}"
                       role="button" title="{{ admin_trans('upload') }}"><i class="glyphicon glyphicon-plus"></i></a>
                    <a class=" btn btn-danger" onclick="removeImage(this)" data-id="{{ $fieldImage }}" role="button"
                       title="{{admin_trans('delete')}}"><i class="glyphicon glyphicon-trash"></i></a>
                </div>
            </div>
        </div>
    </div>
</div>
<script>
    $(document).ready(function () {
        $('.fancybox-upload-img').click(function (e) {
            e.preventDefault();
            var fieldId = $(this).data('id');
            $('#' + fieldId + '-input').click();
        });

        $('input[type="file"]').change(function () {
            var fieldId = $(this).attr('id').replace('-input', '');
            var file = this.files[0];
            var reader = new FileReader();
            reader.onload = function (e) {
                var imageData = e.target.result;
                updateImage(fieldId, imageData);
            };
            reader.readAsDataURL(file);
        });

        function updateImage(field, imageData) {
            var image = document.getElementById(field + '-cont');
            image.src = imageData;
            var hiddenInput = document.getElementById(field);
            hiddenInput.value = imageData;
        }

        function removeImage(field) {
            var image = document.getElementById(field + '-cont');
            image.src = "{{ $defaultImage }}";
            var hiddenInput = document.getElementById(field);
            hiddenInput.value = null;
            var input = document.getElementById(field + '-input');
            input.value = '';
        }
    });
</script>

