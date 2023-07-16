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
        Schema::create('domains', function (Blueprint $table) {
            $table->id();
            $table->string('domain')->nullable();
            $table->string('header_link')->nullable();
            $table->boolean('is_base')->nullable();
            $table->string('colour')->nullable();
            $table->string('logo')->nullable();
            $table->string('footer_logo')->nullable();
            $table->string('favicon')->nullable();
            $table->tinyInteger('theme')->default(0);
            $table->string('facebook_page')->nullable();
            $table->string('linkedin_page')->nullable();
            $table->string('twitter_page')->nullable();
            $table->string('youtube_page')->nullable();
            $table->string('instagram_page')->nullable();
            $table->boolean('status')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('domains');
    }
};
