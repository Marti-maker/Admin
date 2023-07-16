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
        Schema::create('domain_translations', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("domain_id");
            $table->text('scripts')->nullable();
            $table->text('scripts_body')->nullable();
            $table->string('name')->nullable();
            $table->string('contacts')->nullable();
            $table->string('terms')->nullable();
            $table->string('contact_form_success')->nullable();
            $table->string('locale')->nullable()->index();
            $table->timestamps();

            $table->unique(['domain_id', 'locale']);

            $table->foreign('locale')
                ->references('locale')
                ->on('languages')
                ->onDelete('set null');

            $table->foreign('domain_id')
                ->references('id')
                ->on('domains')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('domain_translations');
    }
};
