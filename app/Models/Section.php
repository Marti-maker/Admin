<?php

namespace App\Models;

use Astrotomic\Translatable\Translatable;
use Illuminate\Database\Eloquent\Model;
use Kalnoy\Nestedset\NodeTrait;

class Section extends Model
{
    use Translatable, NodeTrait;

    public array $translatedAttributes = [
        'title',
        'subtitle',
        'link_title',
        'link_href',
        'custom_email',
        'description',
        'second_description',
        'video_link',
        'cover_image',
    ];

    protected $fillable = [
        'page_id',
        'type',
        'links',
        'cover',
        'colour',
        'columns',
        'section_type',
        'link_position',
        'link_type',
    ];

    const BLOCK_POSITION = [
        1 => [
            'constant' => 'block_top',
            'class' => ''
        ],
        2 => [
            'constant' => 'block_bottom',
            'class' => ''
        ],
        3 => [
            'constant' => 'block_normal',
            'class' => ''
        ]
    ];

    const COVER_TYPE = [
        16 => [
            0 => [
                'constant' => 'cover_type_icon',
            ],
            1 => [
                'constant' => 'cover_type_image',
            ]
        ]
    ];
    const COVER_POSITION = [
        16 => [
            1 => [
                'constant' => 'cover_left',
                'class' => ''
            ],
            2 => [
                'constant' => 'cover_top',
                'class' => ''
            ],
            3 => [
                'constant' => 'cover_right',
                'class' => ''
            ]
        ],
        1 => [
            1 => [
                'constant' => 'cover_left',
                'class' => ''
            ],
            3 => [
                'constant' => 'cover_right',
                'class' => ''
            ]
        ],
        18 => [
            1 => [
                'constant' => 'cover_left',
                'class' => ''
            ],
            3 => [
                'constant' => 'cover_right',
                'class' => ''
            ]
        ],
        13 => [
            1 => [
                'constant' => 'cover_right',
                'class' => ''
            ],
            3 => [
                'constant' => 'cover_left',
                'class' => ''
            ]
        ]
    ];

    const TITLE_POSITION = [
        [
            'constant' => 'title_left',
            'class' => ''
        ],
        [
            'constant' => 'title_center',
            'class' => 'u-center-text'
        ],
        [
            'constant' => 'title_right',
            'class' => 'right'
        ]
    ];
}
