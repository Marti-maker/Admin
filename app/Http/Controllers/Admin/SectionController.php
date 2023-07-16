<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\SectionRequest;
use App\Models\Section;
use App\Repositories\Repository;
use App\Repositories\SectionRepository;
use App\Traits\AdminPanel;
use App\Traits\SortablePanel;
use Illuminate\Http\Request;
use Illuminate\View\View;

class SectionController extends Controller
{
    use AdminPanel, SortablePanel;

    private SectionRepository $repository;

    public function __construct(Section $model)
    {
        $this->repository = new SectionRepository($model);
    }

    public function index($pageId): View
    {
        $entities = $this->repository->listTree(['children'], ['page_id' => $pageId]);

        return $this->returnListView('sections.index', compact('entities'));
    }

    public function create(Request $request, Section $entity): View
    {
        $entity->fill($request->all());
        $entity->parent_id = $request->get('parent_id');

        return $this->returnSectionFormView($entity);
    }

    public function store(SectionRequest $request)
    {
        $entity = $this->repository->create($request->all());

        return $this->returnSectionView($entity);
    }

    public function edit($id): View
    {
        $entity = $this->repository->find($id, ['translations']);

        return $this->returnSectionFormView($entity);
    }

    public function update(SectionRequest $request, $id)
    {
        $entity = $this->repository->update($id, $request->all());

        return $this->returnSectionView($entity);
    }

    private function returnSectionFormView($entity)
    {
        $type = \request()->get('type', $entity->type);
        $fieldTypes = config('section_type.fields');

        return $this->returnFormView('sections.form', $entity)->with(['typeFields' => $fieldTypes[$type]]);
    }

    private function returnSectionView($entity): array
    {
        $id = $entity->id;
        $pageId = $entity->page_id;
        $parentId = $entity->parent_id;

        $html = $this->returnListView("sections.index", [
            'entities' => [$entity]
        ])->render();

        return compact('html', 'pageId', 'parentId', 'id');
    }
}
