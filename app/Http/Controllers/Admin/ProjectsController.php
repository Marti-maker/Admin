<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProjectsRequest;
use App\Models\Projects;
use App\Traits\AdminPanel;
use App\Traits\StatusablePanel;
use App\Repositories\Repository;

class ProjectsController extends Controller
{
    use AdminPanel, StatusablePanel;

    private Repository $repository;

    public function __construct(Projects $project)
    {
        $this->repository = new Repository($project);
    }
    public function index()
    {
        $entities=$this->repository->index();
        return $this->returnListView('projects.index',compact('entities'));
    }

    public function create(Projects $entity)
    {
        return $this->returnFormView('projects.form',$entity);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
