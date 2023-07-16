@if($img!='')
    <style>
        .background-image {
            background-image: url('/public/uploads/{{$img}}');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            height: 100vh;
            text-align: center;
        }

        ul.project-details {
            border: 1px solid black;
            background-color: white;
            padding: 10px;
            text-align: center;
            list-style-type: none;
        }

        h2 {
            background-color: white;
        }
    </style>

@endif

<div class="background-image">
    <ul class="project-details">
        <h1 class="h2">Project: {{$project->title}}</h1>
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
        <li>{{$project->locale}}</li>
    </ul>
</div>

