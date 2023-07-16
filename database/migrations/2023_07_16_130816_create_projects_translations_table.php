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
        Schema::create('projects_translations', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->unsignedBigInteger('projects_id');
            $table->string('title');
            $table->text('description')->nullable();
            $table->string('meta_title')->nullable();
            $table->string("meta_description")->nullable();
            $table->string('slug');
            $table->string('locale')->nullable()->index();
            $table->unique(['projects_id','locale']);
            $table->unique(['slug','locale']);

            $table->foreign('locale')
                    ->references('locale')
                    ->on('languages')
                    ->onDelete('set null');

            $table->foreign('projects_id')
                ->references('id')
                ->on('projects')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects_translations');
    }
};
