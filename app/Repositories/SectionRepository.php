<?php

namespace App\Repositories;

use App\Models\Page;
use Illuminate\Support\Arr;

class SectionRepository extends Repository
{
    public function create(array $data, $file_name=null)
    {
        if(!Arr::get($data, 'page_id')) {
            $data['page_id'] = Page::create([])->id;
        }

        $section = parent::create($data);

        if ($parentId = Arr::get($data, 'parent_id')) {
            $parent = $this->find($parentId);

            $section->appendToNode($parent)->save();
        }

        return $section;
    }
}
