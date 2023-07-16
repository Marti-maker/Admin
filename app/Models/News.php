<?php

namespace App\Models;

use App\Traits\Sluggable;
use App\Traits\Statusable;
use Astrotomic\Translatable\Translatable;
use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    use Translatable, Sluggable, Statusable;

    public array $translatedAttributes = [
        "title",
        "slug",
        "description",
        "meta_title",
        "meta_description"
    ];

    protected $fillable = [
        'status',
        'published_at',
        'cover',
    ];
}
