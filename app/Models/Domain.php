<?php

namespace App\Models;

use App\Traits\Statusable;
use Astrotomic\Translatable\Translatable;
use Illuminate\Database\Eloquent\Model;

class Domain extends Model
{
    use Statusable, Translatable;

    public array $translatedAttributes = [
        'scripts',
        'scripts_body',
        'name',
        'contacts',
        'terms',
        'contact_form_success'
    ];

    protected $fillable = [
        'status',
        'domain',
        'header_link',
        'is_base',
        'colour',
        'logo',
        'footer_logo',
        'favicon',
        'theme',
        'facebook_page',
        'linkedin_page',
        'twitter_page',
        'youtube_page',
        'instagram_page',
    ];
}
