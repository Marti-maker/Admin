<?php

namespace App\View\Composers;

use Illuminate\View\View;

class RequestComposer
{
    /**
     * Bind data to the view.
     */
    public function compose(View $view): void
    {
        $view->with('module', $this->module());
        $view->with('moduleListUrl', $this->getModuleListUrl());
    }

    public function module(): string
    {
        return request()->route()->controller->module();
    }

    private function getModuleListUrl(): string
    {
        return route(sprintf("%s.index", $this->module()));
    }
}
