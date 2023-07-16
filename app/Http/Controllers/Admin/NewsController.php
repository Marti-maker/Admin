<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\NewsRequest;
use App\Models\News;
use App\Repositories\Repository;
use App\Traits\AdminPanel;
use App\Traits\StatusablePanel;

class NewsController extends Controller
{
    use AdminPanel, StatusablePanel;

    private Repository $repository;

    public function __construct(News $news)
    {
        $this->repository = new Repository($news);
    }

    public function index()
    {
        $entities = $this->repository->index();

        return $this->returnListView('news.index', compact('entities'));
    }

    public function create(News $entity)
    {
        return $this->returnFormView('news.form', $entity);
    }

    public function store(NewsRequest $request)
    {
        $entity = $this->repository->create($request->all());

        return $this->redirectBack($request, $entity);
    }

    public function edit($id)
    {
        $entity = $this->repository->find($id, ['translations']);
        $sections = app(SectionController::class)->index($entity->id);

        return $this->returnFormView('news.form', $entity, compact('sections'));
    }

    public function update(NewsRequest $request, $id)
    {
        $page = $this->repository->update($id, $request->all());

        return $this->redirectBack($request, $page);
    }
}
