<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        $languages = [
            [
                "name" => "English",
                "code" => "en",
                "locale" => "en",
                "status" => 1,
            ],
            [
                "name" => "Български",
                "code" => "bg",
                "locale" => "bg",
                "status" => 1,
            ]
        ];

        foreach ($languages as $language) {
            \App\Models\Language::create($language);
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
