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
            keepProportion: "true",
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
       
        this.layout = [
            {
                index: 1,
                size : 40,
                bg: '#ccc'
            },
            {
                index : 2,
                size : 60,
                bg: 'none'
            },
            
        ];
        
    }
    
}


export default {TextParagraph,Button,Section,Image,LineHorizontal,LineVertical}
