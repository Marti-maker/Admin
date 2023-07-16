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
        Schema::create('categories_translations', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->unsignedBigInteger('categories_id');
            $table->text('title');
            $table->string('slug');
            $table->string("meta_title")->nullable();
            $table->string("meta_description")->nullable();
            $table->string('locale')->nullable()->index();
            $table->unique(['slug','locale','categories_id']);

            $table->foreign('categories_id')
                                    ->references('id')
                                    ->on('categories')
                                    ->onDelete('cascade');
            $table->foreign('locale')
                        ->references('locale')
                        ->on('languages')
                        ->onDelete('set null');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('categories_translations');
    }
};
