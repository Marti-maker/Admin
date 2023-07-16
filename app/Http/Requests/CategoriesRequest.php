<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Astrotomic\Translatable\Validation\RuleFactory;

class CategoriesRequest extends FormRequest
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
        $categoryId = $this->route()->parameter('categories');

        $rules = [
            '%title%' => ['required', 'min:3','max:255'],
            '%slug%' => ['required', 'min:3','max:255'],
        ];

        if($categoryId > 0) {
            $rules['%slug%'][] = 'unique:categories_translations,slug,'.$categoryId.',category_id';
        } else {
            $rules['%slug%'][] = 'unique:categories_translations,slug';
        }

        return RuleFactory::make($rules);
    }
}
