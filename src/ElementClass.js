import Template from './template.json'
class Video{
    constructor(){
        this.style = {
            alignBlock : 'none',
            top: 0,
            left : 0,
            width: '300px',
            height :'200px',
            url :'https://www.youtube.com/embed/m2gHLijHTQU',
            autoPlay : false,
            loop: false
        }
        this.position = {
            x :150,
            y : 100,
            angle:0,
            w:300,
            h:200
        };
    }
    setTemplate(template){
            this.style ={
                alignBlock : template.style.alignBlock,
                top: template.style.top,
                left : template.style.left,
                width: template.style.width,
                height :template.style.height,
                url :template.style.url
            } 
            this.position = {
                x :template.position.x,
                y : template.position.y,
                angle:template.position.angle,
                w:template.position.w,
                h:template.position.h
            };
    }
}
class Field {
    constructor(){
        this.style = {
            type : 'text',
            placeholder : 'Enter your text',
            required : false,
            backgroundColor : '#cccccc',
            alignBlock:'none',
            top: 0,
            left : 0,
            width: '300px',
            height :'50px',
            rotation : 0,
            border : {
                width : 1,
                type : 'solid',
                color : '#000000'
            },
            borderRadius :0,
        }
        this.position = {
            x :150,
            y : 25,
            angle:0,
            w:300,
            h:50
        };
    }
    setTemplate(template){
            this.style = {
                type :template.style.type,
                placeholder : template.style.placeholder,
                required : template.style.required,
                backgroundColor : template.style.backgroundColor,
                alignBlock:template.style.alignBlock,
                top: template.style.top,
                left : template.style.left,
                width: template.style.width,
                height :template.style.height,
                rotation : template.style.rotation,
                border : {
                    width : template.style.border.width,
                    type : template.style.border.type,
                    color : template.style.border.color
                },
                borderRadius :template.style.borderRadius,
            } 
            this.position = {
                x :template.position.x,
                y : template.position.y,
                angle:template.position.angle,
                w:template.position.w,
                h:template.position.h
            };
        
    }
}
class Box {
    constructor(){
        this.style = {
            top: 0,
            left : 0,
            width: '400px',
            height :'300px',
            rotation : 0,
            backgroundColor : '#cccccc',
            opacity : 1,
            alignBlock:'none',
            border : {
                width : 1,
                type : 'solid',
                color : '#000000'
            },
            borderRadius :0,
            shadow : {
                angle : 0,
                distance : 0,
                size : 0,
                blur :  4,
                color : '#cccccc',
                opacity : 1
            },
        }
        this.position = {
            x :200,
            y : 150,
            angle:0,
            w:400,
            h:300
        };
    }
    setTemplate(template){
            this.style = {
                top: template.style.top,
                left : template.style.left,
                width: template.style.width,
                height :template.style.height,
                rotation : template.style.rotation,
                backgroundColor : template.style.backgroundColor,
                opacity : template.style.opacity,
                alignBlock:template.style.alignBlock,
                border : {
                    width : template.style.border.width,
                    type : template.style.border.type,
                    color : template.style.border.color
                },
                borderRadius :template.borderRadius,
                shadow : {
                    angle : template.style.shadow.angle,
                    distance : template.style.shadow.distance,
                    size : template.style.shadow.size,
                    blur :  template.style.shadow.blur,
                    color : template.style.shadow.color,
                    opacity : template.style.shadow.opacity
                },
            }
            this.position= {
                x :template.position.x,
                y : template.position.y,
                angle:template.position.angle,
                w:template.position.w,
                h:template.position.h
            }
        
    }
}

class SlideShow {
    constructor(){
        this.slideItem = [
            {
                index : 1,
                backgroundColor : require('./assets/template.jpg'),
                text : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
            },
            {
                index : 2,
                backgroundColor : 'blue',
                text : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
            },
            {
                index : 3,
                backgroundColor : 'yellow',
                text : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
            }
        ]
    }
}

class LineHorizontal {
    constructor(){
        this.style = {
            size: 6,
            backgroundColor : 'red',
            alignBlock : 'none',
            top: 0,
            left : 0,
            rotation : 0,
            width: '400px',
            height :'50px',

        },
        this.position = {
            x :200,
            y : 25,
            angle:0,
            w:400,
            h:50
        };
    }
    setTemplate(template){
            this.style= {
                size: template.style.size,
                backgroundColor : template.style.backgroundColor,
                alignBlock : template.style.alignBlock,
                top: template.style.top,
                left : template.style.left,
                rotation : template.style.rotation,
                width: template.style.width,
                height :template.style.height,
            } 
            this.position = {
                x :template.position.x,
                y : template.position.y,
                angle:template.position.angle,
                w:template.position.w,
                h:template.position.h
            };
        
    }
}

class LineVertical{
    constructor(){
        this.style = {
            size: 6,
            backgroundColor : 'red',
            alignBlock : 'none',
            top: 0,
            left : 0,
            rotation : 0,
            width: '30px',
            height :'300px',

        },
        this.position = {
            x :25,
            y : 200,
            angle:0,
            w:50,
            h:400
        };
    }
    setTemplate(template){

        this.style= {
            size: template.style.size,
            backgroundColor : template.style.backgroundColor,
            alignBlock : template.style.alignBlock,
            top: template.style.top,
            left : template.style.left,
            rotation : template.style.rotation,
            width: template.style.width,
            height :template.style.height,
        } 
        this.position = {
            x :template.position.x,
            y : template.position.y,
            angle:template.position.angle,
            w:template.position.w,
            h:template.position.h
        };
        
    }
}

class TextParagraph{
    constructor(){
        this.style = {
            fontFamily : 'Roboto',
            letterSpacing : 10, /** (number) px */
            wordSpacing :5 , /** (number) px */
            lineHeight : 20 , /** (number) px */
            alignBlock : 'none',
            top: 0,
            left : 0,
            width: '400px',
            height :'50px',
            rotation : 0
        };
        this.position = {
            x :200,
            y : 25,
            angle:0,
            w:400,
            h:50
        };
        this.value = "this is a text";
        this.link = '';
        this.heading = 'p';/** p, span, h1, h2, h3 ,h4 ,h5 ,h6  */
        
        
    }
    setTemplate(template){
        this.style= {
            fontFamily : template.style.fontFamily,
            letterSpacing : template.style.letterSpacing, /** (number) px */
            wordSpacing :template.style.wordSpacing, /** (number) px */
            lineHeight : template.style.lineHeight, /** (number) px */
            alignBlock : template.style.alignBlock,
            top: template.style.top,
            left : template.style.left,
            width: template.style.width,
            height :template.style.height,
            rotation : template.style.rotation
        } 
        this.position = {
            x :template.position.x,
            y : template.position.y,
            angle:template.position.angle,
            w:template.position.w,
            h:template.position.h
        };
        this.value=template.value
        this.link=template.link
        this.heading = template.heading
        
    }
   
}



class Button {
    constructor(){
        
        this.position = {
            x :100,
            y : 25,
            angle:0,
            w:200,
            h:50
        };
        this.style = {
            fontFamily : 'Roboto',
            backgroundColor : '#ffffff',
            border : {
                width : 0,
                type : 'solid',
                color : '#000000'
            },
            borderRadius :0,
            shadow : {
                angle : 0,
                distance : 0,
                size : 0,
                blur :  4,
                color : '#cccccc',
                opacity : 1
            },
            color: '#000000',
            textTransform : 'none',
            alignBlock : 'none',
            text :'Simple Button',
            top: 0,
            left : 0,
            width: '500px',
            height : '50px',
            rotation : 0
        }
        
    }
    setTemplate(template){

        this.style = {
            fontFamily : template.style.fontFamily,
            backgroundColor : template.style.backgroundColor,
            border : {
                width : template.style.border.width,
                type : template.style.border.type,
                color : template.style.border.color
            },
            borderRadius :template.style.borderRadius,
            shadow : {
                angle : template.style.shadow.angle,
                distance : template.style.shadow.distance,
                size : template.style.shadow.size,
                blur :  template.style.shadow.blur,
                color : template.style.shadow.color,
                opacity : template.style.shadow.opacity
            },
            color: template.style.color,
            textTransform : template.style.textTransform,
            alignBlock : template.style.alignBlock,
            text :template.style.text,
            top: template.style.top,
            left : template.style.left,
            width: template.style.width,
            height : template.style.height,
            rotation : template.style.rotation
        } 
        this.position = {
            x :template.position.x,
            y : template.position.y,
            angle:template.position.angle,
            w:template.position.w,
            h:template.position.h
        };
        
    }
}

class Image {
    constructor(){
        this.url = require('./assets/template.jpg') ;
        this.position = {
            x :200,
            y : 150,
            angle:0,
            w:400,
            h:300
        };
        this.style ={
            keepProportion: true,
            alignBlock : 'none',
            border : {
                width : 3,
                color: '#000000',
                type : 'solid'
            },
            borderRadius : 50,
            shadow : {
                angle : 0,
                distance : 0,
                size : 0,
                blur :  4,
                color : '#cccccc',
                opacity : 1
            },
            top: 0,
            left : 0,
            width: '400px',
            height : '300px',
            rotation : 0
            
        }
    }
    setTemplate(template){

            this.style = {
                keepProportion: template.style.keepProportion,
                alignBlock : template.style.alignBlock,
                border : {
                    width : template.style.border.width,
                    color: template.style.border.color,
                    type : template.style.border.type
                },
                borderRadius : template.style.borderRadius,
                shadow : {
                    angle : template.style.shadow.angle,
                    distance : template.style.shadow.distance,
                    size : template.style.shadow.size,
                    blur :  template.style.shadow.blur,
                    color : template.style.shadow.color,
                    opacity : template.style.shadow.opacity
                },
                top: template.style.top,
                left : template.style.left,
                width: template.style.width,
                height : template.style.height,
                rotation : template.style.rotation
            } 
            this.position = {
                x :template.position.x,
                y : template.position.y,
                angle:template.position.angle,
                w:template.position.w,
                h:template.position.h
            };
            this.url =template.url

    }
}

class Section {
    constructor(){
        this.style = {
            backgroundColor : 'linear-gradient(to bottom,rgba(255, 255, 255, 0.96) 0%,rgba(238, 238, 238, 0.96) 100%)',
            boxShadow: '0 2px 5px 0 rgba(22, 45, 61, 0.58)',
            margin : 'auto',
            backgroundImage : {
                url : './assets/logo.png',
                position : 'center',
                size : 'cover',
                repeat : 'no-repeat'
            },
            stretched :'container-fluid',
            height : 500
        }
        this.position = {
            x :200,
            y : 320,
            angle:0,
            w:400,
            h:500
        };
       
        this.layout = [
            {
                row : 1,
                index: 1,
                size : 100,
                bg: 'none'
            }
        ];
        this.row = [
            {
                index : 1,
                size: 100,
                bg : '#333333'
            }
        ]
        
    }

    setTemplate(template){
        this.style = {
            backgroundColor : template.style.backgroundColor,
            boxShadow: template.style.boxShadow,
            margin : template.style.margin,
            backgroundImage : {
                url : template.style.backgroundImage.url,
                position : template.style.backgroundImage.position,
                size : template.style.backgroundImage.size,
                repeat : template.style.backgroundImage.repeat
            },
            stretched :template.style.stretched,
            height : template.style.height
        } 
        this.layout = new Array()
        template.layout.forEach((item,index)=> {
            this.layout[index] = {
                index : item.index,
                size : item.size,
                row : item.row,
                bg : item.bg
            }

        })       
        this.row = new Array()
        template.row.forEach((item,index) => {
            this.row[index] = {
                index: item.index,
                size : item.size,
                bg :item.bg
            }
        })
        this.position = {
            x :template.position.x,
            y : template.position.y,
            angle:template.position.angle,
            w:template.position.w,
            h:template.position.h
        };
        
    }
    
}



export default {TextParagraph,Button,Section,Image,LineHorizontal,LineVertical,SlideShow,Box,Field,Video}
