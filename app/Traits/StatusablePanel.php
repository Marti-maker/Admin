<?php

namespace App\Traits;

use Illuminate\Http\Request;

trait StatusablePanel
{
    public function status(Request $request)
    {
        $id = $request->get('id');
        $value = $request->get('active');

        $this->repository->toggle($id, 'status', $value);
    }
}
