<?php

namespace App\Models;

use App\Traits\Statusable;
use Illuminate\Database\Eloquent\Model;
use Kalnoy\Nestedset\NodeTrait;

class Language extends Model
{
    use Statusable, NodeTrait;

    protected $fillable = [
        "name",
        "code",
        "locale",
        "status"
    ];
}
