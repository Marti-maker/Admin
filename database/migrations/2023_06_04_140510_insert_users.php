<?php

use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Hash;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        $admin = User::create(['name' => 'Kipo Dev', 'email' => 'dev@kipo.bg', 'password' => Hash::make('12345678')]);
        $admin->assignRole('Admin');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
