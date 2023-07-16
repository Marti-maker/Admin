<?php

namespace App\Http\Requests;

use Astrotomic\Translatable\Validation\RuleFactory;
use Illuminate\Foundation\Http\FormRequest;

class ProjectsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        $newsId = $this->route()->parameter('news');

        $rules = [
            '%title%' => ['required', 'min:3','max:255'],
            '%slug%' => ['required', 'min:3','max:255'],
            'status' => ['in:0,1'],
            '%description%'=>['required','min:5']
        ];

        if($newsId > 0) {
            $rules['%slug%'][] = 'unique:news_translations,slug,'.$newsId.',news_id';
        } else {
            $rules['%slug%'][] = 'unique:news_translations,slug';
        }

        return RuleFactory::make($rules);
    }
}
