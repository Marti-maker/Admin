<?php

namespace App\Traits;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;

trait Sluggable
{
    /**
     * @return array
     */
    public function getSlugTreeAttribute($locale  = null): array
    {
        if(!$locale) {
            $locale = locale();
        }

        if($this->isRelation('ancestors')) {
            $result = [];

            foreach ($this->ancestors as $ancestor) {
                $result[] = $ancestor->translate($locale)->getAttribute($this->slugField());
            }

            $result[] = optional($this->translate($locale))->getAttribute($this->slugField());
        } else {
            $result = [optional($this->translate($locale))->getAttribute($this->slugField())];
        }

        return $result;
    }

    public function getSlugParentsAttribute($locale): array
    {
        $result = [];

        if(!$locale) {
            $locale = locale();
        }

        foreach ($this->ancestors as $ancestor) {
            $result[] = $ancestor->translate($locale)->getAttribute($this->slugField());
        }

        return $result;
    }

    /**
     * @param Builder $query
     * @param $slugs
     * @return Model
     */
    public static function scopeFindBySlug(Builder $query, $slugs): Model
    {
        if(!is_array($slugs)) {
            $slugs = [$slugs];
        }

        $slug = Arr::last($slugs);
        $entity = $query->active()->whereSlug($slug)->firstOrFail();

        if($slugs != $entity->slug_tree) {
            abort(404);
        }

        return $entity;
    }

    /**
     * @param Builder $query
     * @param $slug
     */
    public function scopeWhereSlug(Builder $query, $slug): void
    {
        if($this->isRelation('translation')) {
            $query->whereTranslation($this->slugField(), $slug);
        } else {
            $query->where($this->slugField(), $slug);
        }
    }

    /**
     * @return string
     */
    public function slugField(): string
    {
        return 'slug';
    }

    public function breadcrumbLabel()
    {
        return $this->title;
    }

    public function pageTitle()
    {
        return $this->title;
    }
}
