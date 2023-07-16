<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProjectsRequest;
use App\Models\Categories;
use App\Models\CategoriesTranslation;
use App\Models\ProjectCategories;
use App\Models\Projects;
use App\Models\ProjectsTranslation;
use App\Traits\AdminPanel;
use App\Traits\StatusablePanel;
use App\Repositories\Repository;

class ProjectsController extends Controller
{
    use AdminPanel, StatusablePanel;

    private Repository $repository;

    public function __construct(Projects $project)
    {
        $this->repository = new Repository($project);
    }

    public function index()
    {
        $entities = $this->repository->index();
        return $this->returnListView('projects.index', compact('entities'));
    }

    public function create(Projects $entity)
    {
        $categoriesModel = Categories::all();
        $categories = [];
        foreach ($categoriesModel as $model) {
            $detail = CategoriesTranslation::where('categories_id', $model->id)->first();
            $categories[$model->id] = $detail->title;
        }

        return $this->returnFormView('projects.form', $entity, compact('categories'));
    }

    public function store(ProjectsRequest $request)
    {

        $file = $request->file('cover');

        if ($file) {
            $originalFileName = $file->getClientOriginalName();

            $destinationPath = 'public/uploads/';
            $newFileName = time() . '_' . $originalFileName;
            $file->move($destinationPath, $newFileName);

        }
        if (isset($newFileName)) {
            $entity = $this->repository->create($request->all(), $newFileName);
        } else {
            $entity = $this->repository->create($request->all());
        }
        $categories = $request->categories;
        if ($categories) {
            foreach ($categories as $category) {
                $projectCategory = new ProjectCategories();
                $projectCategory->project_id = $entity->id;
                $projectCategory->category_id = $category;
                $projectCategory->save();
            }
        }
        return $this->redirectBack($request, $entity);
    }

    public function edit($id)
    {
        $entity = $this->repository->find($id, ['translations']);
        $sections = app(SectionController::class)->index($entity->id);

        return $this->returnFormView('projects.form', $entity, compact('sections'));
    }

    public function update(ProjectsRequest $request, string $id)
    {
        $page = $this->repository->update($id, $request->all());

        return $this->redirectBack($request, $page);
    }

    public function project_slug($slug)
    {
        $project = ProjectsTranslation::where('slug', $slug)->first();



        if ($project) {
            $cover=Projects::where('id',$project->projects_id)->first();

            if ($cover){
                $img=$cover->cover;

            return view('slug.project', compact('project','img'));
            }
            else{
                $img='';
                return view('slug.project', compact('project','img'));
            }
        } else {
            return view('slug.not-found');
        }

    }

    public function category_projects_slug($slug)
    {
        $category = CategoriesTranslation::where('slug', $slug)->first();
        $arr = [];
        if ($category) {
            $productsCat = ProjectCategories::where('category_id', $category->id)->get();
            if ($productsCat) {
                foreach ($productsCat as $cat) {
                    $project = ProjectsTranslation::where('projects_id', $cat->project_id)->get();
                    foreach ($project as $pr) {
                        $arr[] = $pr;
                    }
                }
                return view('slug.category-projects', compact('arr'));
            } else {
                return view('slug.no-matches');
            }
        } else {
            return view('slug.no-matches');
        }


    }

}
