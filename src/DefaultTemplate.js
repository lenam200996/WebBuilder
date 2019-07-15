var Template = {
    'themed_text':[
        {
            name:  'themed_text_heading_1' ,
            type : 'text',  
            position:{"x":337,"y":69,"angle":0,"w":720,"h":88},
            style :  {"fontFamily":"Roboto","letterSpacing":0,"wordSpacing":0,"lineHeight":14,"alignBlock":"none","top":"104px","left":"78px","width":"518px","height":"49px","rotation":0},
            value : "<h1><span style=\"font-size: 56pt;\">Add heading 1</span></h1>",
            preview: "<h1><span style=\"font-family:Roboto;font-size: 28pt;\">Add heading 1</span></h1>"
        },
        {
            name : 'themed_text_heading_2',
            type : 'text',
            position:{"x":337,"y":69,"angle":0,"w":720,"h":88},  
            style :  {"fontFamily":"Roboto","letterSpacing":0,"wordSpacing":0,"lineHeight":14,"alignBlock":"none","top":"104px","left":"78px","width":"518px","height":"49px","rotation":0},
            value : "<h1><span style=\" font-size: 24pt;\">Add heading 2</span></h1>",
            preview : "<h1><span style=\" font-family:Roboto;font-size: 12pt;\">Add heading 2</span></h1>",
        },
        {
            name: 'themed_text_heading_3',
            type : 'text',  
            position:{"x":337,"y":69,"angle":0,"w":720,"h":88},
            style :  {"fontFamily":"Roboto","letterSpacing":0,"wordSpacing":0,"lineHeight":14,"alignBlock":"none","top":"104px","left":"78px","width":"518px","height":"49px","rotation":0},
            value : "<h1><span style=\"font-size: 60pt;\">Add heading 3</span></h1>",
            preview : "<h1><span style=\"font-family:Roboto;font-size: 30pt;\">Add heading 3</span></h1>"
        },
        {
            name: 'themed_text_heading_4',
            type : 'text',  
            position:{"x":337,"y":69,"angle":0,"w":720,"h":88},
            style :  {"fontFamily":"Roboto","letterSpacing":0,"wordSpacing":0,"lineHeight":14,"alignBlock":"none","top":"104px","left":"78px","width":"518px","height":"49px","rotation":0},
            value : "<h1><span style=\" font-size: 30pt;\">Add heading 4</span></h1>",
            preview : "<h1><span style=\"font-family:Roboto;font-size: 15pt;\">Add heading 4</span></h1>",
        },
        {
            name: 'themed_paragraph_1',
            type : 'text',
            position: {"x":344.5,"y":174,"angle":0,"w":521,"h":68},
            style: {"fontFamily":"Roboto","letterSpacing":10,"wordSpacing":5,"lineHeight":20,"alignBlock":"none","top":"140px","left":"84px","width":"521px","height":"68px","rotation":0},
            value: "<p><span style=\"font-size: 14pt; \">I'm a paragraph. Click here to add your own text and edit me. It's easy.</span></p>",
            preview: "<p><span style=\"font-family:Roboto;font-size: 14pt;\">I'm a paragraph. Click here to add your own text and edit me. It's easy.</span></p>",

        },
        {
            name: 'themed_paragraph_2',
            type : 'text',
            position: {"x":344.5,"y":250,"angle":0,"w":521,"h":100},
            style: {"fontFamily":"Roboto","letterSpacing":10,"wordSpacing":5,"lineHeight":20,"alignBlock":"none","top":"140px","left":"84px","width":"521px","height":"68px","rotation":0},
            value: "<p><span style=\"font-size: 12pt; \">I'm a paragraph. Click here to add your own text and edit me. It's easy.</span></p>",
            preview: "<p><span style=\"font-family:Roboto;font-size: 12pt; \">I'm a paragraph. Click here to add your own text and edit me. It's easy.</span></p>",

        }
    ],
    'title_text':[
        {
            name : 'big_title',
            type : 'text',
            position: {"x":322,"y":185,"angle":0,"w":400,"h":50},
            style : {"fontFamily":"Roboto","letterSpacing":10,"wordSpacing":5,"lineHeight":20,"alignBlock":"none","top":"160px","left":"122px","width":"400px","height":"50px","rotation":0},
            value:"<p style=\"text-align: center;\"><span style=\" font-size: 30pt;\">BIG TITLE</span></p>",
            preview : "<p style=\"text-align: center;\"><span style=\" font-family:Roboto;font-size:15pt;\">BIG TITLE</span></p>",
        },
        {
            name : 'all_caps_title',
            type:'text',
            position: {"x":337,"y":173,"angle":0,"w":400,"h":50},
            style : {"fontFamily":"Open Sans","letterSpacing":3,"wordSpacing":3,"lineHeight":20,"alignBlock":"none","top":"148px","left":"137px","width":"400px","height":"50px","rotation":0},
            value: "<p style=\"text-align: center;\"><strong><span style=\"font-size: 18pt;\">ALL CAPS TITLE</span></strong></p>",
            preview : "<p style=\"text-align: center;\"><strong><span style=\"font-family:Open Sans;font-size: 18pt;\">ALL CAPS TITLE</span></strong></p>"
        }

    ],
    'template_strip':[
            {
                name : 'about_us_1',
                type : 'strip',
                elements : [
                    {
                        position: { x :200,y : 320,angle:0, w:400,h:500},
                        type : 'section',
                        layout : [{row:1,"index":1,"size":50,"bg":require('./assets/template.jpg')},{row:1,"index":2,"size":50,"bg":"#4bd1a0"}],
                        style : {"backgroundColor":"linear-gradient(to bottom,rgba(255, 255, 255, 0.96) 0%,rgba(238, 238, 238, 0.96) 100%)","boxShadow":"0 2px 5px 0 rgba(22, 45, 61, 0.58)","margin":"auto","backgroundImage":{"url":"./assets/logo.png","position":"center","size":"cover","repeat":"no-repeat"},"stretched":"container-fluid","height":550},
                        row :[{index:1,size:100}]

                    },
                    {
                        type : 'text',
                        position:{"x":398,"y":160,"angle":0,"w":720,"h":88},
                        style : {"fontFamily":"Roboto","letterSpacing":12,"wordSpacing":16,"lineHeight":14,"alignBlock":"center","top":"116px","left":"38px","width":"720px","height":"88px","rotation":0},
                        value : "<h1 style=\"text-align: center;\"><strong><span style=\"font-size: 46pt;\"><span style=\"color: #ffffff;\">ABOUT</span> <span style=\"color: #000000;\">US</span></span></strong></h1>",
                        column : 2,
                        row:1
                    },
                    {
                        type : 'text',
                        position: {"x":258,"y":310.5,"angle":0,"w":416,"h":123},
                        style : {"fontFamily":"Roboto","letterSpacing":0,"wordSpacing":0,"lineHeight":32,"alignBlock":"center","top":"249px","left":"50px","width":"416px","height":"123px","rotation":0},
                        value :"<p><span style=\"font-size: 14pt;\">I&rsquo;m a paragraph. Click here then click Text to add some text of your own or to change the font. Tell your visitors a bit about your services.</span></p>",
                        column : 2,
                        row:1
                    },
                    {
                        type : 'btn',
                        position: {"x":313,"y":434,"angle":0,"w":200,"h":50},
                        style :{"fontFamily":"Roboto","backgroundColor":"#4bd1a0","border":{"width":5,"type":"solid","color":"#000000"},"borderRadius":0,"shadow":{"angle":0,"distance":0,"size":0,"blur":4,"color":"#cccccc","opacity":1},"color":"#000000","textTransform":"none","alignBlock":"center","text":"LEARN MORE","top":"409px","left":"213px","width":"200px","height":"50px","rotation":0},
                        column : 2,
                        row:1
                    }
                ]
            },
            {
                name : 'about_us_2',
                type:'strip',
                elements:[
                    {
                        position: { x :200,y : 320,angle:0, w:400,h:500},
                        type:'section',
                        layout:[{row:1,"index":1,"size":60,"bg":require('./assets/template.jpg')},{row:1,"index":2,"size":40,"bg":"#ffef98"}],
                        style:{"backgroundColor":"linear-gradient(to bottom,rgba(255, 255, 255, 0.96) 0%,rgba(238, 238, 238, 0.96) 100%)","boxShadow":"0 2px 5px 0 rgba(22, 45, 61, 0.58)","margin":"auto","backgroundImage":{"url":"./assets/logo.png","position":"center","size":"cover","repeat":"no-repeat"},"stretched":"container-fluid","height":500},
                        row:[{index:1,size:100}]
                    },
                    {
                        type:'text',
                        position:{"x":121,"y":102.5,"angle":-20.05609473657543,"w":507.8096187561825,"h":62.69699409944779},
                        style:{"fontFamily":"Roboto Mono","letterSpacing":0,"wordSpacing":0,"lineHeight":14,"alignBlock":"left","top":"71.1515029502761px","left":"-132.90480937809124px","width":"507.8096187561825px","height":"62.69699409944779px","rotation":-20.05609473657543},
                        value:"<h1 style=\"text-align: left; padding-left: 40px;\"><span style=\"font-size: 42px;\"><strong><em>Add Your Title</em></strong></span></h1>",
                        column:2,
                        row:1
                    },
                    {
                        type:'text',
                        position:{"x":141,"y":173,"angle":0,"w":376,"h":32},
                        style:{"fontFamily":"Roboto","letterSpacing":0,"wordSpacing":0,"lineHeight":20,"alignBlock":"left","top":"157px","left":"-47px","width":"376px","height":"32px","rotation":0},
                        value:"<p><strong><span style=\"font-size: 14pt;\">This is a great place to add a tagline.</span></strong></p>",
                        column:2,
                        row:1
                    },
                    {
                        type:'text',
                        position:{"x":153,"y":311,"angle":0,"w":396,"h":204},
                        style:{"fontFamily":"Open Sans","letterSpacing":0,"wordSpacing":0,"lineHeight":25,"alignBlock":"left","top":"209px","left":"-45px","width":"396px","height":"204px","rotation":0},
                        value:"<p class=\"font_8\" style=\"text-align: left; padding-left: 40px;\">Tell customers more about you. Add a few words and a stunning pic to grab their attention and get them to click.</p>\n<p class=\"font_8\" style=\"text-align: left; padding-left: 40px;\">This space is ideal for writing a detailed description of your business and&nbsp;the types of services that you provide. Talk about your team and your&nbsp;areas of expertise.&nbsp;</p>",
                        column:2,
                        row:1
                    }
                ]
            },
            {
                name : 'about_us_3',
                type: 'strip',
                elements:[
                    {
                        position: { x :200,y : 320,angle:0, w:400,h:500},
                        type: 'section',
                        layout:[{row:1,"index":1,"size":25,"bg":require('./assets/template.jpg')},{row:1,"index":2,"size":50,"bg":"#fcf8ed"},{row:1,"index":3,"size":25,"bg":require('./assets/template.jpg')}],
                        style:{"backgroundColor":"linear-gradient(to bottom,rgba(255, 255, 255, 0.96) 0%,rgba(238, 238, 238, 0.96) 100%)","boxShadow":"0 2px 5px 0 rgba(22, 45, 61, 0.58)","margin":"auto","backgroundImage":{"url":"./assets/logo.png","position":"center","size":"cover","repeat":"no-repeat"},"stretched":"container-fluid","height":500},
                        row:[{index:1,size:100}]
                    },
                    {
                        type:'text',
                        position:{"x":316,"y":88.5,"angle":0,"w":464,"h":57},
                        style:{"fontFamily":"Literata","letterSpacing":0,"wordSpacing":0,"lineHeight":14,"alignBlock":"center","top":"60px","left":"84px","width":"464px","height":"57px","rotation":0},
                        value:"<h1 style=\"text-align: center;\"><span style=\"font-size: 42px; color: #bc9b00;\">ABOUT US</span></h1>",
                        column:2,
                        row:1
                    },
                    {
                        
                        type:'text',
                        position:{"x":137.5,"y":164.5,"angle":0,"w":471,"h":41},
                        style:{"fontFamily":"Oswald","letterSpacing":2,"wordSpacing":2,"lineHeight":20,"alignBlock":"center","top":"144px","left":"-98px","width":"471px","height":"41px","rotation":0},
                        value:"<p style=\"text-align: center;\"><span class=\"color_14\" style=\"font-size: 14pt;\">THIS IS A GREAT PLACE FOR YOUR&nbsp;TAGLINE.</span></p>",
                        column:2,
                        row:1
                    },
                    {
                        
                        type:'text',
                        position:{"x":327,"y":279,"angle":0,"w":438,"h":174},
                        style:{"fontFamily":"Open Sans","letterSpacing":0,"wordSpacing":3,"lineHeight":28,"alignBlock":"center","top":"192px","left":"108px","width":"438px","height":"174px","rotation":0},
                        value:"<p style=\"text-align: center;\"><span style=\"font-size: 14pt;\">Tell your visitors your story. Add catchy text to describe what you do, and what you have to offer. The right words can inspire and intrigue your audience, so they&rsquo;re ready to take action on your site. To start telling your story, double click or click Edit Text.</span></p>",
                        column:2,
                        row:1
                    },
                    {
                        type : 'btn',
                        position: {"x":320,"y":412,"angle":0,"w":200,"h":50},
                        style :{"fontFamily":"Literata","backgroundColor":"#fcf8ed","border":{"width":0,"type":"solid","color":"#000000"},"borderRadius":0,"shadow":{"angle":0,"distance":0,"size":0,"blur":4,"color":"#cccccc","opacity":1},"color":"#bc9b5d","textTransform":"none","alignBlock":"center","text":"Book a place ","top":"387px","left":"220px","width":"200px","height":"50px","rotation":0},
                        column : 2,
                        row:1
                    }
                ]
            },
            {
                name : 'about_us_4',
                type: 'strip',
                elements:[
                    {
                        position: { x :200,y : 320,angle:0, w:400,h:500},
                        type: 'section',
                        layout:[{row:1,"index":1,"size":40,"bg":"#00305b"},{row:1,"index":2,"size":60,"bg":require('./assets/template.jpg')}],
                        style:{"backgroundColor":"linear-gradient(to bottom,rgba(255, 255, 255, 0.96) 0%,rgba(238, 238, 238, 0.96) 100%)","boxShadow":"0 2px 5px 0 rgba(22, 45, 61, 0.58)","margin":"auto","backgroundImage":{"url":"./assets/logo.png","position":"center","size":"cover","repeat":"no-repeat"},"stretched":"container-fluid","height":500},
                        row:[{index:1,size:100}]
                    },
                    {
                        type : 'image',
                        position:{"x":251.71999999999997,"y":92.54,"angle":0,"w":73.43999999999991,"h":55.08000000000001},
                        style:{"keepProportion":"true","alignBlock":"center","border":{"width":0,"color":"#000000","type":"solid"},"borderRadius":"0","shadow":{"angle":0,"distance":0,"size":0,"blur":4,"color":"#cccccc","opacity":1},"top":"65px","left":"215px","width":"73.43999999999991px","height":"55.08000000000001px","rotation":0},
                        url:require('./assets/logo.png'),
                        column:1,
                        row:1
                    },
                    {
                        type: 'text',
                        position:{"x":258.5,"y":207,"angle":0,"w":505,"h":90},
                        style:{"fontFamily":"Open Sans","letterSpacing":0,"wordSpacing":0,"lineHeight":14,"alignBlock":"center","top":"162px","left":"6px","width":"505px","height":"90px","rotation":0},
                        value:"<h1><span style=\"font-size: 60pt; color: #ffffff;\"><strong>OUR</strong> FIRM</span></h1>",
                        column:1,
                        row:1
                    },
                    {
                        type: 'text',
                        position:{"x":226,"y":294,"angle":0,"w":404,"h":56},
                        style:{"fontFamily":"Open Sans","letterSpacing":0,"wordSpacing":0,"lineHeight":29,"alignBlock":"center","top":"266px","left":"24px","width":"404px","height":"56px","rotation":0},
                        value:"<p style=\"text-align: center;\"><span style=\"color: #ffffff; font-size: 14pt;\">I'm a paragraph. Click here to add your own text and edit me. It's easy.</span></p>",
                        column:1,
                        row:1
                    }
                ]
            },
            {
                name: 'Meet the team',
                type:'strip',
                elements:[
                    {
                        position: { x :200,y : 320,angle:0, w:400,h:500},
                        type:'section',
                        layout: [{row:1,index:1,size:100,bg:'none'},{row:2,"index":1,"size":33,"bg":"none"},{row:2,"index":2,"size":33,"bg":"#ffffff"},{row:2,"index":3,"size":33,"bg":"#ffffff"}],
                        style: {"backgroundColor":"linear-gradient(to bottom,rgba(255, 255, 255, 0.96) 0%,rgba(238, 238, 238, 0.96) 100%)","boxShadow":"0 2px 5px 0 rgba(22, 45, 61, 0.58)","margin":"auto","backgroundImage":{"url":"./assets/logo.png","position":"center","size":"cover","repeat":"no-repeat"},"stretched":"container","height":550},
                        row:[{index:1,size:20},{index:2,size:80}]
                    },
                    {
                        type :'text',
                        position:{"x":330,"y":44,"angle":0,"w":672,"h":48},
                        style:{"fontFamily":"Roboto Mono","letterSpacing":0,"wordSpacing":0,"lineHeight":14,"alignBlock":"center","top":"20px","left":"-6px","width":"672px","height":"48px","rotation":0},
                        value:"<h1><span style=\"font-size: 30pt;\">Meet The Team</span></h1>",
                        column:1 ,
                        row:1
                    },
                    {
                        type : 'lineHorizontal',
                        position:{"x":157.5,"y":84,"angle":0,"w":77,"h":10},
                        style:{"size":"3","backgroundColor":"#2c3e50","alignBlock":"center","top":"79px","left":"119px","rotation":0,"width":"77px","height":"10px"},
                        column : 1,
                        row:1
                    },
                    {
                        type : 'image',
                        position:{"x":101.09082217918088,"y":128.74924149418575,"angle":0,"w":206.18164435836175,"h":195.49848298837145},
                        style:{"keepProportion":"true","alignBlock":"center","border":{"width":"0","color":"#000000","type":"solid"},"borderRadius":50,"shadow":{"angle":0,"distance":0,"size":0,"blur":4,"color":"#cccccc","opacity":1},"top":"31.00000000000003px","left":"-2px","width":"206.18164435836175px","height":"195.49848298837145px","rotation":0},
                        url:require('./assets/template.jpg'),
                        column:1,
                        row:2
                    },
                    {
                        type : 'image',
                        position:{"x":101.09082217918088,"y":128.74924149418575,"angle":0,"w":206.18164435836175,"h":195.49848298837145},
                        style:{"keepProportion":"true","alignBlock":"center","border":{"width":"0","color":"#000000","type":"solid"},"borderRadius":50,"shadow":{"angle":0,"distance":0,"size":0,"blur":4,"color":"#cccccc","opacity":1},"top":"31.00000000000003px","left":"-2px","width":"206.18164435836175px","height":"195.49848298837145px","rotation":0},
                        url:require('./assets/template.jpg'),
                        column:2,
                        row:2
                    },
                    {
                        type : 'image',
                        position:{"x":101.09082217918088,"y":128.74924149418575,"angle":0,"w":206.18164435836175,"h":195.49848298837145},
                        style:{"keepProportion":"true","alignBlock":"center","border":{"width":"0","color":"#000000","type":"solid"},"borderRadius":50,"shadow":{"angle":0,"distance":0,"size":0,"blur":4,"color":"#cccccc","opacity":1},"top":"31.00000000000003px","left":"-2px","width":"206.18164435836175px","height":"195.49848298837145px","rotation":0},
                        url:require('./assets/template.jpg'),
                        column:3,
                        row:2
                    },
                    {
                        type :'text',
                        position:{"x":170,"y":256.5,"angle":0,"w":360,"h":27},
                        style:{"fontFamily":"Oswald","letterSpacing":0,"wordSpacing":0,"lineHeight":21,"alignBlock":"center","top":"243px","left":"-10px","width":"360px","height":"27px","rotation":0},
                        value:"<p style=\"text-align: center;\"><span style=\"color: #003e50; font-size: 14pt;\"><em>Jon&nbsp;Doe</em></span></p>",
                        column:1 ,
                        row:2
                    },
                    {
                        type :'text',
                        position:{"x":170,"y":256.5,"angle":0,"w":360,"h":27},
                        style:{"fontFamily":"Oswald","letterSpacing":0,"wordSpacing":0,"lineHeight":21,"alignBlock":"center","top":"243px","left":"-10px","width":"360px","height":"27px","rotation":0},
                        value:"<p style=\"text-align: center;\"><span style=\"color: #003e50; font-size: 14pt;\"><em>Jon&nbsp;Doe</em></span></p>",
                        column:2 ,
                        row:2
                    },
                    {
                        type :'text',
                        position:{"x":170,"y":256.5,"angle":0,"w":360,"h":27},
                        style:{"fontFamily":"Oswald","letterSpacing":0,"wordSpacing":0,"lineHeight":21,"alignBlock":"center","top":"243px","left":"-10px","width":"360px","height":"27px","rotation":0},
                        value:"<p style=\"text-align: center;\"><span style=\"color: #003e50; font-size: 14pt;\"><em>Jon&nbsp;Doe</em></span></p>",
                        column:3 ,
                        row:2
                    },
                    {
                        type : 'image',
                        position:{"x":168.18919628054496,"y":300.67418727023716,"angle":0,"w":37.098392561089874,"h":33.34837454047431},
                        style:{"keepProportion":"true","alignBlock":"center","border":{"width":"0","color":"#000000","type":"solid"},"borderRadius":"0","shadow":{"angle":0,"distance":0,"size":0,"blur":4,"color":"#cccccc","opacity":1},"top":"284px","left":"149.64000000000001px","width":"37.098392561089874px","height":"33.34837454047431px","rotation":0},
                        url:require('./assets/in.png'),
                        column:1,
                        row:2
                    },
                    {
                        type : 'image',
                        position:{"x":168.18919628054496,"y":300.67418727023716,"angle":0,"w":37.098392561089874,"h":33.34837454047431},
                        style:{"keepProportion":"true","alignBlock":"center","border":{"width":"0","color":"#000000","type":"solid"},"borderRadius":"0","shadow":{"angle":0,"distance":0,"size":0,"blur":4,"color":"#cccccc","opacity":1},"top":"284px","left":"149.64000000000001px","width":"37.098392561089874px","height":"33.34837454047431px","rotation":0},
                        url:require('./assets/in.png'),
                        column:2,
                        row:2
                    },
                    {
                        type : 'image',
                        position:{"x":168.18919628054496,"y":300.67418727023716,"angle":0,"w":37.098392561089874,"h":33.34837454047431},
                        style:{"keepProportion":"true","alignBlock":"center","border":{"width":"0","color":"#000000","type":"solid"},"borderRadius":"0","shadow":{"angle":0,"distance":0,"size":0,"blur":4,"color":"#cccccc","opacity":1},"top":"284px","left":"149.64000000000001px","width":"37.098392561089874px","height":"33.34837454047431px","rotation":0},
                        url:require('./assets/in.png'),
                        column:3,
                        row:2
                    },
                    {
                        type :'text',
                        position:{"x":233.5,"y":378.5,"angle":0,"w":417,"h":71},
                        style:{"fontFamily":"Oswald","letterSpacing":0,"wordSpacing":0,"lineHeight":20,"alignBlock":"center","top":"343px","left":"25px","width":"417px","height":"71px","rotation":0},
                        value:"<p><span style=\"font-size: 12pt; \">I'm a paragraph. Click here to add your own text and edit me. It's easy.</span></p>",
                        column:1,
                        row:2
                    },
                    {
                        type :'text',
                        position:{"x":233.5,"y":378.5,"angle":0,"w":417,"h":71},
                        style:{"fontFamily":"Oswald","letterSpacing":0,"wordSpacing":0,"lineHeight":20,"alignBlock":"center","top":"343px","left":"25px","width":"417px","height":"71px","rotation":0},
                        value:"<p><span style=\"font-size: 12pt; \">I'm a paragraph. Click here to add your own text and edit me. It's easy.</span></p>",
                        column:2,
                        row:2
                    },
                    {
                        type :'text',
                        position:{"x":233.5,"y":378.5,"angle":0,"w":417,"h":71},
                        style:{"fontFamily":"Oswald","letterSpacing":0,"wordSpacing":0,"lineHeight":20,"alignBlock":"center","top":"343px","left":"25px","width":"417px","height":"71px","rotation":0},
                        value:"<p><span style=\"font-size: 12pt; \">I'm a paragraph. Click here to add your own text and edit me. It's easy.</span></p>",
                        column:3,
                        row:2
                    }
                ]
            }

        ],
        'template_contact':[
            {
                name : 'contact 1',
                type : 'contact',
                elements: [
                    {
                        position: { x :200,y : 320,angle:0, w:400,h:500},
                        type : 'section',
                        layout : [{"index":1,"size":100,"bg":"none"}],
                        style: {"backgroundColor":"linear-gradient(to bottom,rgba(255, 255, 255, 0.96) 0%,rgba(238, 238, 238, 0.96) 100%)","boxShadow":"0 2px 5px 0 rgba(22, 45, 61, 0.58)","margin":"auto","backgroundImage":{"url":"./assets/logo.png","position":"center","size":"cover","repeat":"no-repeat"},"stretched":"container-fluid","height":600},
                    },
                    {
                        type: 'text',
                        position:{"x":345,"y":69,"angle":0,"w":720,"h":88},
                        style:{"fontFamily":"Oswald","letterSpacing":0,"wordSpacing":0,"lineHeight":14,"alignBlock":"center","top":"25px","left":"-15px","width":"720px","height":"88px","rotation":0},
                        value:"<h1 style=\"text-align: center;\"><span style=\"font-size: 56pt; color: #22ce88;\">CONTACT US</span></h1>",
                        column:1,
                    },
                    {
                        type:'field',
                        position:{"x":442.5,"y":184.5,"angle":0,"w":575,"h":51},
                        style:{"type":"text","placeholder":"First name","required":false,"backgroundColor":"#ffffff","alignBlock":"center","top":"159px","left":"155px","width":"575px","height":"51px","rotation":0,"border":{"width":"4","type":"solid","color":"#22ce88"},"borderRadius":"10"},
                        column : 1,
                    },
                    {
                        type:'field',
                        position:{"x":690.5,"y":239.5,"angle":0,"w":577,"h":55},
                        style:{"type":"text","placeholder":"Last name","required":false,"backgroundColor":"#ffffff","alignBlock":"center","top":"212px","left":"402px","width":"575px","height":"56px","rotation":0,"border":{"width":"4","type":"solid","color":"#22ce88"},"borderRadius":"10"},
                        column : 1,
                    },
                    {
                        type:'field',
                        position:{"x":798,"y":297,"angle":0,"w":576,"h":56},
                        style:{"type":"text","placeholder":"Phone","required":false,"backgroundColor":"#ffffff","alignBlock":"center","top":"269px","left":"510px","width":"575px","height":"56px","rotation":0,"border":{"width":"4","type":"solid","color":"#22ce88"},"borderRadius":"10"},
                        column : 1,
                    },
                    {
                        type:'field',
                        position:{"x":729.5,"y":355,"angle":0,"w":577,"h":56},
                        style:{"type":"text","placeholder":"Email","required":false,"backgroundColor":"#ffffff","alignBlock":"center","top":"327px","left":"441px","width":"575px","height":"56px","rotation":0,"border":{"width":"4","type":"solid","color":"#22ce88"},"borderRadius":"10"},
                        column : 1,
                    },
                    {
                        type:'field',
                        position:{"x":776.5,"y":441.5,"angle":0,"w":577,"h":111},
                        style:{"type":"text","placeholder":"Messenger","required":false,"backgroundColor":"#ffffff","alignBlock":"center","top":"386px","left":"488px","width":"575px","height":"111px","rotation":0,"border":{"width":"4","type":"solid","color":"#22ce88"},"borderRadius":"10"},
                        column : 1,
                    },
                    {
                        type : 'btn',
                        position: {"x":679,"y":543,"angle":0,"w":200,"h":50},
                        style :{"fontFamily":"Roboto Slab","backgroundColor":"#22ce88","border":{"width":"0","type":"solid","color":"#22ce88"},"borderRadius":"19","shadow":{"angle":0,"distance":0,"size":0,"blur":4,"color":"#cccccc","opacity":1},"color":"#ffffff","textTransform":"uppercase","alignBlock":"center","text":"Submit","top":"518px","left":"579px","width":"200px","height":"50px","rotation":0},
                        column : 1,
                    }


                ]
            }
        ]
    
}

export default {Template}