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
        Schema::create('section_translations', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("section_id");
            $table->string('title')->nullable();
            $table->string('subtitle')->nullable();
            $table->string('link_title')->nullable();
            $table->string('link_href')->nullable();
            $table->string('custom_email')->nullable();
            $table->string('description')->nullable();
            $table->string('second_description')->nullable();
            $table->string('video_link')->nullable();
            $table->string('cover_image')->nullable();
            $table->string('locale')->nullable()->index();
            $table->timestamps();

            $table->unique(['section_id', 'locale']);

            $table->foreign('locale')
                ->references('locale')
                ->on('languages')
                ->onDelete('set null');

            $table->foreign('section_id')
                ->references('id')
                ->on('sections')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('section_translations');
    }
};
