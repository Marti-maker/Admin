<?php

namespace App\Traits;

use Illuminate\Http\Request;

trait SortablePanel
{
    public function sort(Request $request)
    {
        $this->repository->sort($request->get('pleach'));
    }
}
