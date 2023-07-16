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
        Schema::create('sections', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("page_id");
            $table->tinyInteger("type");
            $table->string('links')->nullable();
            $table->string('cover')->nullable();
            $table->string('colour')->nullable();
            $table->string('columns')->nullable();
            $table->string('section_type')->nullable();
            $table->string('link_position')->nullable();
            $table->tinyInteger('link_type')->default(1);
            $table->nestedSet();
            $table->timestamps();

            $table->foreign('page_id')
                ->references('id')
                ->on('pages')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sections');
    }
};
