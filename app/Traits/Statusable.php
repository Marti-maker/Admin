<?php

namespace App\Traits;

use Illuminate\Database\Eloquent\Builder;

trait Statusable
{
    /**
     * @param Builder $query
     */
    public function scopeActive(Builder $query): void
    {
        $query->where('status', 1);
    }
}
