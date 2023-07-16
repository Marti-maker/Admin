<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\PageRequest;
use App\Models\Page;
use App\Repositories\Repository;
use App\Traits\AdminPanel;
use App\Traits\SortablePanel;
use App\Traits\StatusablePanel;

class PageController extends Controller
{
    use AdminPanel, StatusablePanel, SortablePanel;

    private Repository $repository;

    public function __construct(Page $page)
    {
        $this->repository = new Repository($page);
    }

    public function index()
    {
        $entities = $this->repository->listTree();

        return $this->returnListView('pages.index', compact('entities'));
    }

    public function create(Page $entity)
    {
        return $this->returnFormView('pages.form', $entity, ['sections' => '']);
    }

    public function store(PageRequest $request)
    {
        $entity = $this->repository->create($request->all());

        return $this->redirectBack($request, $entity);
    }

    public function edit($id)
    {
        $entity = $this->repository->find($id, ['translations']);
        $sections = app(SectionController::class)->index($entity->id);

        return $this->returnFormView('pages.form', $entity, compact('sections'));
    }

    public function update(PageRequest $request, $id)
    {
        $page = $this->repository->update($id, $request->all());

        return $this->redirectBack($request, $page);
    }

    public function module(): string
    {
        return 'pages';
    }
}
