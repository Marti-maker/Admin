<?php

namespace App\Models;

use App\Http\Controllers\Front\NewsController;
use App\Traits\Sluggable;
use App\Traits\Statusable;
use Astrotomic\Translatable\Translatable;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Kalnoy\Nestedset\NodeTrait;

class Page extends Model
{
    use Translatable, Sluggable, Statusable, NodeTrait;

    public array $translatedAttributes = [
        "title",
        "slug",
        "description",
        "meta_title",
        "meta_description"
    ];

    protected $fillable = [
        'status',
        'type',
        'cover',
        'module_id'
    ];

    public function sections()
    {
        return $this->hasMany(Section::class);
    }

    public function scopeFindHomePage(Builder $query): Model
    {
        return $query->where('type', 1)->firstOrFail();
    }

    public function scopeFindByModuleId(Builder $query, $moduleId)
    {
        return $query->where('module_id', $moduleId)->firstOrNew();
    }

    public static function modules(): array
    {
        return [
            1 => [
                'name' => admin_trans('page.modules.news'),
                'controller' => NewsController::class,
                'method' => 'index'
            ],
        ];
    }
}
