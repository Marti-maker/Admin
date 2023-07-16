<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Repositories\UserRepository;
use App\Traits\AdminPanel;
use App\Http\Requests\UserRequest;
use Illuminate\Contracts\View\View;
use Illuminate\Database\Eloquent\Model;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    use AdminPanel {
        returnFormView as traitReturnFormView;
    }

    private UserRepository $repository;

    public function __construct(User $user)
    {
        $this->repository = new UserRepository($user);
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $entities = $this->repository->index();

        return $this->returnListView('users.index', compact('entities'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(User $entity)
    {
        return $this->returnFormView('users.form', $entity);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(UserRequest $request)
    {
        $entity = $this->repository->create($request->all());

        return $this->redirectBack($request, $entity);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        /** @var User $entity */
        $entity = $this->repository->find($id);

        return $this->returnFormView('users.form', $entity);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UserRequest $request, string $id)
    {
        $entity = $this->repository->update($id, $request->all());

        return $this->redirectBack($request, $entity);
    }

    public function returnFormView(string $view, Model $entity, $viewData = []): View
    {
        $viewData['roles'] = $this->repository->roles();

        return $this->traitReturnFormView($view, $entity, $viewData);
    }
}
