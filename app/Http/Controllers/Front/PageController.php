<?php

namespace App\Http\Controllers\Front;

use App\Models\Page;
use App\Repositories\Repository;
use App\Traits\FrontPanel;
use Illuminate\Contracts\View\View;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Arr;

class PageController
{
    use FrontPanel;

    private Repository $repository;

    public function __construct(Page $page)
    {
        $this->repository = new Repository($page);
    }

    public function home()
    {
        $entity = Page::findHomePage();

        return $this->returnPageView($entity);
    }

    public function show(...$slugs)
    {
        $entity = $this->repository->findBySlug($slugs);

        return $this->returnPageView($entity);
    }

    public function returnPageView(Model $entity): View
    {
        $sections = $entity->sections->toTree();

        $moduleHtml = '';

        if($entity->module_id > 0) {
            $moduleInfo = Arr::where($entity->modules(), fn($module, $key) => $key == $entity->module_id)[$entity->module_id];
            $moduleHtml = call_user_func([app($moduleInfo['controller']), $moduleInfo['method']], [])->render();
        }

        return $this->returnShowView('pages.show', $entity, compact('sections', 'moduleHtml'));
    }
}
