<?php

namespace App\Traits;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;

trait AdminPanel
{
    /**
     * @param $id
     * @return int
     */
    public function destroy($id)
    {
        $this->repository->delete($id);

        return $id;
    }

    /**
     * @param string $view
     * @param array $viewData
     * @return View
     */
    public function returnView(string $view, array $viewData): View
    {
        $viewData["title"] = admin_trans(sprintf("headings.%s", $this->module()));

        return view("admin.$view", $viewData);
    }

    /**
     * @param $view
     * @param $viewData
     * @return View
     */
    public function returnListView($view, $viewData): View
    {
        $viewData["createUrl"] = route($this->createRouteName(), \request()->query->all());
        $viewData["url"] = $this->listUrl();

        return $this->returnView($view, $viewData);
    }

    /**
     * @param string $view
     * @param Model $entity
     * @return View
     */
    public function returnFormView(string $view, Model $entity, $viewData = []): View
    {
        $routeParams = [];

        if($entity->getKey() > 0) {
            $method = "put";
            $routeName = $this->updateRouteName();
            $routeParams = Arr::prepend($routeParams, $entity->getKey());
            $edit = "edit";
        } else {
            $routeName = $this->storeRouteName();
            $method = "post";
            $edit = "";
        }

        $listUrl = $this->listUrl();
        $url = route($routeName, $routeParams);
        $formData = ["id" => "data_form", "url" => $url, "method" => $method];

        return $this->returnView(
            $view,
            array_merge(
                compact(
                    "formData",
                    "entity",
                    "listUrl",
                    "edit"
                ),
                $viewData
            )
        );
    }

    /**
     * @param Request $request
     * @param Model $entity
     * @return RedirectResponse
     */
    public function redirectBack(Request $request, Model $entity): RedirectResponse
    {
        $redirectTo = $request->get("redirect");
        $module = $this->module();

        session()->flash("success", admin_trans("message_saved"));

        if($redirectTo == "back") {
            return redirect()->to(admin_route($this->editRouteName(), [$entity->getKey()]));
        } else {
            return redirect()->to($this->listUrl());
        }
    }

    /**
     * @return string
     * @throws \Psr\Container\ContainerExceptionInterface
     * @throws \Psr\Container\NotFoundExceptionInterface
     */
    public function listUrl(): string
    {
        $params = [];

        parse_str(\request()->get("query-params"), $params);

        return route($this->indexRouteName(), $params);
    }

    /**
     * @return string
     */
    public function indexRouteName(): string
    {
        return sprintf("%s.index", $this->module());
    }

    /**
     * @return string
     */
    public function createRouteName(): string
    {
        return sprintf("%s.create", $this->module());
    }

    /**
     * @return string
     */
    public function editRouteName(): string
    {
        return sprintf("%s.edit", $this->module());
    }

    /**
     * @return string
     */
    public function storeRouteName(): string
    {
        return sprintf("%s.store", $this->module());
    }

    /**
     * @return string
     */
    public function updateRouteName(): string
    {
        return sprintf("%s.update", $this->module());
    }

    public function module(): string
    {
        return request_module();
    }
}
