<?php

namespace App\Traits;

use Illuminate\Contracts\View\View;
use Illuminate\Database\Eloquent\Model;

trait FrontPanel
{
    use Breadcrumbable;

    public function returnView($view, Model $entity, $viewData = []): View
    {
        $title = $entity->pageTitle();

        return view(
            "front.$view",
            array_merge(
                compact(
                    'entity',
                    'title',
                ),
                $viewData
            )
        );
    }

    public function returnShowView($view, Model $entity, $viewData = []): View
    {
        $viewData['breadcrumbs'] = $this->breadcrumbs($entity);

        return $this->returnView($view, $entity, $viewData);
    }
}
