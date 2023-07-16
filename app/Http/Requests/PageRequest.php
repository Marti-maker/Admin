<?php

namespace App\Http\Requests;

use Astrotomic\Translatable\Validation\RuleFactory;
use Illuminate\Foundation\Http\FormRequest;

class PageRequest extends FormRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        $pageId = $this->route()->parameter('page');

        $rules = [
            '%title%' => ['required', 'min:3','max:255'],
            '%slug%' => ['required', 'min:3','max:255'],
            'status' => ['in:0,1'],
            'type' => ['in:0,1'],
        ];

        if($pageId > 0) {
            $rules['%slug%'][] = 'unique:page_translations,slug,'.$pageId.',page_id';
        } else {
            $rules['%slug%'][] = 'unique:page_translations,slug';
        }

        return RuleFactory::make($rules);
    }
}
