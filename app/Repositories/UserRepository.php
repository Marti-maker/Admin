<?php

namespace App\Repositories;

use App\Models\User;
use Illuminate\Support\Arr;
use Spatie\Permission\Models\Role;

class UserRepository extends Repository
{
    public function create(array $data)
    {
        $user = parent::create($data);
        $this->setUserRole($user, $data);

        return $user;
    }

    public function update(int $id, array $data)
    {
        if(!Arr::get($data, 'password')) {
            unset($data['password']);
        }

        $user = parent::update($id, $data);
        $this->setUserRole($user, $data);
        return $user;
    }

    public function roles()
    {
        return Role::all();
    }

    private function setUserRole(User $user, $data)
    {
        if($roleId = Arr::get($data, 'role_id')) {
            $role = Role::findById($roleId);
            $user->syncRoles($role);
        }
    }
}
