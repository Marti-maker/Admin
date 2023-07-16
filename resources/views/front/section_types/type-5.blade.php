<section class="card-prices">
    @if($section->title)
        <div class="row"><h2>{{ $section->title }}</h2></div>
    @endif
    @if(!$section->children->isEmpty())
        <h3>Subsections</h3>
        @foreach($section->children->all() as $subsection)
            <div>
                <h5>{{ $subsection->title }}</h5>
            </div>
        @endforeach
    @endif
</section>
