<?php

namespace App\Repositories;

use Illuminate\Database\Eloquent\Model;

class Repository
{
    protected Model $model;

    public function __construct(Model $model)
    {
        $this->model = $model;
    }

    public function index(array $with = [], array $where = [], array $orderBy = [], int $paginate = 30) {
        return $this->model
            ->when(!empty($where), function ($q) use($where) {
                $q->where($where);
            })
            ->when(!empty($with), function ($q) use($with) {
                $q->with($with);
            })
            ->when(!empty($orderBy), function ($q) use ($orderBy) {
                foreach ($orderBy as $order) {
                    $q->orderBy($order[0], $order[1]);
                }
            })
            ->paginate($paginate);
    }

    public function listTree(array $with = [], array $where = [])
    {
        return $this->model
            ->when(!empty($where), function ($q) use($where) {
                $q->where($where);
            })
            ->when(!empty($with), function ($q) use($with) {
                $q->with($with);
            })
            ->defaultOrder()
            ->get()
            ->toTree();
    }

    public function findBySlug($slug, $with = [], $where = []): Model
    {
        return $this->model
            ->when(!empty($where), function ($q) use($where) {
                $q->where($where);
            })
            ->when(!empty($with), function ($q) use($with) {
                $q->with($with);
            })
            ->findBySlug($slug);
    }

    public function create(array $data,$file_name=null)
    {
        if ($file_name){
            $data['cover']=$file_name;
        }
            return $this->model->create($data);

    }

    public function find(int $id, $with = [], $where = [])
    {
        return $this->model
            ->when(!empty($where), function ($q) use($where) {
                $q->where($where);
            })
            ->when(!empty($with), function ($q) use($with) {
                $q->with($with);
            })->findOrFail($id);
    }

    public function update(int $id, array $data)
    {
        $entity = $this->find($id);
        $entity->fill($data);
        $entity->save();

        return $entity;
    }

    public function delete($id)
    {
        $this->model->destroy($id);
    }

    public function toggle(int $id, string $field, bool $value)
    {
        $this->model->whereId($id)->update([$field => $value]);
    }

    public function sort($data)
    {
        $this->model->rebuildTree($data);
    }
}
