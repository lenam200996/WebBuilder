import Static from './static-data.json'
var Default = {
    "TEXT" : [ 
                {
                    ref : 'alignBlock',
                    item :Static.static_option_select.align_block
                },
                {
                ref: "lineHeight"
                },
                {
                ref: "fontFamily",
                item :Static.static_option_select.font_family
                },
                {
                ref: "letterSpacing"
                },
                {
                ref: "wordSpacing"
                },
                {
                    ref:'shadow'
                }
            ],
        'Column' : [
            {
                ref : 'Columnbackground'
            },
            {
                ref :'backgroundPosition',
                item: Static.static_option_select.background_position
            },
            {
                ref : 'backgroundSize',
                item: Static.static_option_select.background_size
            }

        ],
        'IMAGE':[
            {
                ref : 'alignBlock',
                item :Static.static_option_select.align_block
            },
            {
                ref : 'imgUrl'
            },
            {
                ref : 'borderWidth'
            },
            {
                ref : 'borderType',
                item: Static.static_option_select.border_type
            },
            {
                ref : 'borderColor'
            },
            {
                ref : 'borderRadius'
            },
            {
                ref : 'keepProportion'
            },
            {
                ref:'shadow'
            }
        ],
        'SECTION':[
            {
                ref : 'height'
            },
            {
                ref: 'stretched'
            },
           {
               ref:'rowManager'
           }
            
        ],
        'BUTTON':[
            {
                ref : 'alignBlock',
                item :Static.static_option_select.align_block
            }, 
            {
                ref : 'borderWidth'
            },
            {
                ref : 'borderType',
                item: Static.static_option_select.border_type
            },
            {
                ref : 'borderColor'
            },
            {
                ref : 'borderRadius'
            },
            {
                ref : 'color'
            },
            {
                ref: "fontFamily",
                item :Static.static_option_select.font_family
            },
            {
                ref : 'textValue'
            },
            {
                ref : 'textTransform',
                item : Static.static_option_select.text_transform
            },
            {
                ref : 'backgroundColor'
            },
            {
                ref:'textAlign',
                item : Static.static_option_select.text_align
            },
            {
                ref:'paddingLeft'
            },
            {
                ref:'paddingRight'
            },
            {
                ref:'fontSize'
            },
            {
                ref:'fontWeight'
            },
            {
                ref:'fontStyle',
                item : Static.static_option_select.font_style
            },
            {
                ref:'backgroundColorHover'
            },
            {
                ref:'colorHover'
            },
            {
                ref:'borderColorHover'
            },
            {
                ref:'shadow'
            }
        ],
        'LINE':[
            {
                ref : 'alignBlock',
                item : Static.static_option_select.align_block
            },
            {
                ref : 'backgroundColor'
            },
            {
                ref :'sizeLine'
            },
            {

                ref:'shadow'
            }
            
        ],
        'FIELD':[
            {
                ref : 'alignBlock',
                item : Static.static_option_select.align_block
            },
            {
                ref : 'backgroundColor'
            },
            {
                ref : 'borderWidth'
            },
            {
                ref : 'borderType',
                item: Static.static_option_select.border_type
            },
            {
                ref : 'borderColor'
            },
            {
                ref : 'borderRadius'
            },
            {
                ref:'required'
            },
            {
                ref:'textAlign',
                item :  Static.static_option_select.text_align
            },
            {
                ref:'paddingLeft'
            },
            {
                ref:'paddingRight'
            },
            {
                ref:'borderPosition'
            },
            {
                ref: "fontFamily",
                item :Static.static_option_select.font_family
            },
            {
                ref:'fontStyle',
                item : Static.static_option_select.font_style
            },
            {
                ref : 'color'
            },
            {
                ref:'fontSize'
            },
            {
                ref:'fontWeight'
            },
            {
                ref:'placeholder'
            },
            {
                ref:'shadow'
            }

        ],
        'VIDEO':[
            {
                ref : 'alignBlock',
                item :Static.static_option_select.align_block
            },
            {
                ref: 'videoUrl'
            },
            {
                ref : 'autoPlay'
            },
            {
                ref : 'loop'
            },
            {
                ref:'shadow'
            }
        ],
        'BOX':[
            {
                ref : 'alignBlock',
                item : Static.static_option_select.align_block
            },
            {
                ref : 'backgroundColor'
            },
            {
                ref : 'borderWidth'
            },
            {

                ref : 'borderType',
                item:Static.static_option_select.border_type
            },
            {
                ref : 'borderColor'
            },
            {
                ref : 'borderRadius'
            },
            {
                ref :'opacity'
            },
            {
                ref:'shadow'
            }
            
        ],
        'ROW':[
            {
                ref : 'sectionColumnManagement'
            },
            {
                ref:'sectionGrid'
            }
        ],
        'SLIDE':[
            {
                ref: 'itemSlideManager'
            }
        ]
        
        
}

export default { Default}