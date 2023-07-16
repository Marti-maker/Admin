
<h1>Списък с проекти</h1>

@foreach($arr as $project)
    <h1>Project: {{$project->title}}</h1>

    <ul>
        <li>Slug: {{$project->slug}}</li>
        <li>Description: {{$project->description}}</li>
        @if($project->meta_title==null)
            <li>Meta title: No title provided</li>
        @else
            <li>Meta title: {{$project->meta_title}}</li>
        @endif
        @if($project->meta_description==null)
            <li>Meta description: No description provided</li>
        @else
            <li>Meta description{{$project->meta_description}}</li>
        @endif
        <li>Locale: {{$project->locale}}</li>
    </ul>
@endforeach


