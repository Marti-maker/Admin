<?php

namespace App\Traits;

use App\Models\Page;
use Illuminate\Support\Arr;

trait Breadcrumbable
{
    public function breadcrumbs($entity)
    {
        $breadcrumbs = [];

        $breadcrumbs[] = [
            'name' => front_trans('breadcrumbs.home'),
            'href' => front_route('pages.home')
        ];

        $module = Arr::where(Page::modules(), fn($module) => $module['controller'] == get_class($this));

        if(!empty($module)) {
            $moduleId = key($module);

            $page = Page::active()->findByModuleId($moduleId);

            if($page->getKey() > 0) {
                foreach ($page->ancestors as $ancestor) {
                    $breadcrumbs[] = [
                        'name' => $ancestor->title,
                        'href' => front_route('pages.show', $ancestor->slug_tree)
                    ];
                }

                $breadcrumbs[] = [
                    'name' => $page->title,
                    'href' => front_route('pages.show', $page->slug_tree)
                ];
            }
        }

        if($entity->breadcrumbLabel()) {
            $breadcrumbs[] = [
                'name' => $entity->breadcrumbLabel(),
                'href' => url()->current()
            ];
        }

        return $breadcrumbs;
    }
}
