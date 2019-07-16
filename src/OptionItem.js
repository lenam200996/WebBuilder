var Default = {
    "TEXT" : [
                
                {
                name: "Line Height",
                ref: "lineHeight"
                },
                {
                name: "Font Family",
                ref: "fontFamily"
                },
                {
                name: "Letter Spacing",
                ref: "letterSpacing"
                },
                {
                name: "Word Spacing",
                ref: "wordSpacing"
                },
                {
                    name: 'Align Block',
                    ref : 'alignBlock'
                }
            ],
        'Column' : [
            {
                name : "Background",
                ref : 'Columnbackground'
            },
            // {
            //     name : "background Image",
            //     ref :"backgroundImage"
            // }

        ],
        'IMAGE':[
            {
                name : 'Image',
                ref : 'imgUrl'
            },
            {
                name : 'Border Width',
                ref : 'borderWidth'
            },
            {
                name : 'Border Type',
                ref : 'borderType'
            },
            {
                name : 'Border Color',
                ref : 'borderColor'
            },
            {
                name : 'Border Radius',
                ref : 'borderRadius'
            },
            {
                name: 'Keep Proportion',
                ref : 'keepProportion'
            },
            {
                name: 'Align Block',
                ref : 'alignBlock'
            }
        ],
        'SECTION':[
            {
                name : 'Height',
                ref : 'height'
            },
            {
                name : 'Stretched',
                ref: 'stretched'
            },
           {
               name : '',
               ref:'rowManager'
           }
            
        ],
        'BUTTON':[
            {
                name: 'Align Block',
                ref : 'alignBlock'
            }, 
            {
                name : 'Border Width',
                ref : 'borderWidth'
            },
            {
                name : 'Border Type',
                ref : 'borderType'
            },
            {
                name : 'Border Color',
                ref : 'borderColor'
            },
            {
                name : 'Border Radius',
                ref : 'borderRadius'
            },
            {
                name : 'Text color',
                ref : 'color'
            },
            {
                name: "Font Family",
                ref: "fontFamily"
            },
            {
                name : 'Text',
                ref : 'textValue'
            },
            {
                name : 'Text Transform',
                ref : 'textTransform'
            },
            {
                name : 'Background Color',
                ref : 'backgroundColor'
            },
            {
                name: 'Text Align',
                ref:'textAlign'
            },
            {
                name : 'Padding Left',
                ref:'paddingLeft'
            },
            {
                name : 'Padding Right',
                ref:'paddingRight'
            },
            {
                name:'Font Size',
                ref:'fontSize'
            },
            {
                name:'Font Weight',
                ref:'fontWeight'
            },
            {
                name: 'Font Style',
                ref:'fontStyle'
            },
            {
                name : 'Fill Hover',
                ref:'backgroundColorHover'
            },
            {
                name : 'Color Hover',
                ref:'colorHover'
            },
            {
                name :'Border Color Hover',
                ref:'borderColorHover'
            }
        ],
        'LINE':[
            {
                name: 'Align Block',
                ref : 'alignBlock'
            },
            {
                name : 'Background Color',
                ref : 'backgroundColor'
            },
            {
                name: 'Size',
                ref :'sizeLine'
            },
            
        ],
        'FIELD':[
            {
                name: 'Align Block',
                ref : 'alignBlock'
            },
            {
                name : 'Background Color',
                ref : 'backgroundColor'
            },
            {
                name : 'Border Width',
                ref : 'borderWidth'
            },
            {
                name : 'Border Type',
                ref : 'borderType'
            },
            {
                name : 'Border Color',
                ref : 'borderColor'
            },
            {
                name : 'Border Radius',
                ref : 'borderRadius'
            },
            {
                name: 'Required',
                ref:'required'
            },
            {
                name: 'Text Align',
                ref:'textAlign'
            },
            {
                name : 'Padding Left',
                ref:'paddingLeft'
            },
            {
                name : 'Padding Right',
                ref:'paddingRight'
            },
            {
                name : 'Border',
                ref:'borderPosition'
            },
            {
                name: "Font Family", //new
                ref: "fontFamily"
            },
            {
                name: 'Font Style',
                ref:'fontStyle'
            },
            {
                name : 'Text color',
                ref : 'color'
            },
            {
                name:'Font Size',
                ref:'fontSize'
            },
            {
                name:'Font Weight',
                ref:'fontWeight'
            },
            {
                name :'Placeholder',
                ref:'placeholder'
            }

        ],
        'VIDEO':[
            {
                name: 'Align Block',
                ref : 'alignBlock'
            },
            {
                name : 'Video Url',
                ref: 'videoUrl'
            },
            {
                name: 'Auto Play',
                ref : 'autoPlay'
            },
            {
                name: 'Loop',
                ref : 'loop'
            }
        ],
        'BOX':[
            {
                name: 'Align Block',
                ref : 'alignBlock'
            },
            {
                name : 'Background Color',
                ref : 'backgroundColor'
            },
            {
                name : 'Border Width',
                ref : 'borderWidth'
            },
            {
                name : 'Border Type',
                ref : 'borderType'
            },
            {
                name : 'Border Color',
                ref : 'borderColor'
            },
            {
                name : 'Border Radius',
                ref : 'borderRadius'
            },
            {
                name: 'Opacity',
                ref :'opacity'
            }
            
        ],
        'ROW':[
            {
                name : '',
                ref : 'sectionColumnManagement'
            },
            {
                name :'',
                ref:'sectionGrid'
            }
        ]
        
        
}

export default { Default}