<?php

namespace App\Models;


use App\Traits\Sluggable;
use App\Traits\Statusable;
use Astrotomic\Translatable\Translatable;
use Illuminate\Database\Eloquent\Model;

class Categories extends Model
{
    use Translatable, Sluggable, Statusable;

    public array $translatedAttributes = [
        "title",
        "slug",
        "meta_title",
        "meta_description"
    ];
    protected $guarded = [
        '_token',
    ];

}
