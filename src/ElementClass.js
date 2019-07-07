class TextSimple{
    constructor(value){
        this.style = {
            value :value,
            font :'Robote',
            fontSize: 14 ,
            textAlign :'center',
            fontWeight : 500,
            color : '#000000',
            fontStyle : 'normal',
            textDecoration : 'none',
        };
        this.position = {
            x :150,
            y : 100,
            angle:0,
            w:300,
            h:200
        }
    }
    getStyle(){
        
    }
}

class TextParagraph{
    constructor(){
        this.style = {
            fontFamily : 'Roboto',
            // fontSize : 14, /** (number)px */
            // textAlign: 'left', /** left , center, right , justify */
            // color : '#000000', /** */
            // backgroundColor  : 'none', /**  */
            // fontWeight :500, /** 500,600,700,800,900 */
            // fontStyle : 'normal', /*italic ,normal */ 
            // textDecoration : 'none', /* none, overline,line-through,underline,... */
            letterSpacing : 10, /** (number) px */
            wordSpacing :5 , /** (number) px */
            lineHeight : 20 , /** (number) px */
            alignBlock : 'none'
            // textIndent : 0, /** (number) px */
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

    getStyle(){
        return {
            fontFamily : 'Roboto',
            fontSize : 14+ 'px', /** (number)px */
            textAlign: 'left', /** left , center, right , justify */
            color : '#000000', /** */
            backgroundColor  : 'none', /**  */
            fontWeight :500, /** 500,600,700,800,900 */
            fontStyle : 'normal', /*italic ,normal */ 
            textDecoration : 'none', /* none, overline,line-through,underline,... */
            letterSpacing : 2 +'px', /** (number) px */
            wordSpacing : 20 +'px', /** (number) px */
            lineHeight : 20 +'px', /** (number) px */
            textIndent : 0 +'px', 
        }
    } 
    


   
}



class Button {
    constructor(value){
        this.text = new TextSimple('this is a button');
        this.backgroundColor = '#ffffff';
        this.border = {
            width : 0,
            color : '#000000'
        };
        this.borderRadius = {
            width : 0
        };
        this.shadow = {
            angle : 0,
            distance : 0,
            size : 0,
            blur :  4,
            color : '#cccccc',
            opacity : 1
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
            
        }
    }
}

class Section {
    constructor(){
        this.style = {
            backgroundColor : 'linear-gradient(to bottom,rgba(255, 255, 255, 0.96) 0%,rgba(238, 238, 238, 0.96) 100%)',
            boxShadow: '0 2px 5px 0 rgba(22, 45, 61, 0.58)',
            margin : '20px 0 10px 0',
            backgroundImage : {
                url : './assets/logo.png',
                position : 'center',
                size : 'cover',
                repeat : 'no-repeat'
            },
            stretched :'container',
            height : 500
        }
       
        this.layout = [
            {
                index: 1,
                size : 6,
                bg: '#ccc'
            },
            {
                index : 2,
                size : 6,
                bg: 'none'
            }
        ];
        
    }
    getStyle(){
        return {
            backgroundColor : this.style.backgroundColor,
            height : this.style.height + 'px',
            boxShadow : this.style.boxShadow,
            margin : this.style.margin
        }
    }
}


export default {TextSimple,TextParagraph,Button,Section,Image}
