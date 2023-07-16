<?php

namespace App\Http\Controllers\Front;

use App\Models\News;
use App\Repositories\Repository;
use App\Traits\FrontPanel;

class NewsController
{
    use FrontPanel;

    private Repository $repository;

    public function __construct(News $news)
    {
        $this->repository = new Repository($news);
    }

    public function index()
    {
        return $this->returnView('news.render', new News());
    }

    public function show($slug)
    {
        $entity = $this->repository->findBySlug($slug);

        return $this->returnShowView('news.show', $entity);
    }
}
