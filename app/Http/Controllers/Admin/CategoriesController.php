<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\CategoriesRequest;
use App\Traits\StatusablePanel;
use App\Models\Categories;
use App\Repositories\Repository;
use App\Traits\AdminPanel;


class CategoriesController extends Controller
{

    use AdminPanel, StatusablePanel;

    private Repository $repository;

    public function __construct(Categories $categories)
    {
        $this->repository = new Repository($categories);
    }

    public function index()
    {
        $entities = $this->repository->index();
        return $this->returnListView('categories.index', compact('entities'));
    }

    public function create(Categories $entity)
    {
        return $this->returnFormView('categories.form', $entity);
    }

    public function store(CategoriesRequest $request)
    {

        $entity = $this->repository->create($request->all());
        return $this->redirectBack($request, $entity);
    }


    public function edit($id)
    {
        $entity = $this->repository->find($id, ['translations']);
        $sections = app(SectionController::class)->index($entity->id);

        return $this->returnFormView('categories.form', $entity, compact('sections'));
    }

    public function update(CategoriesRequest $request, string $id)
    {
        $page = $this->repository->update($id, $request->all());

        return $this->redirectBack($request, $page);
    }

}
