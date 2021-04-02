import React, { Component} from 'react';
import {Container, Row, Col} from "reactstrap"

let marked = require("marked");

marked.setOptions({
    breaks: true
})

export default class Body extends React.Component {


    constructor(props) {
        super(props) 
        this.state = {
            markdown: `
# Helllooo! This is my Markdown Previewer.  
## Just code and see the magic.  
It is a fantastic simple markdown previewer. You can check my other projects [here](https://codepen.io/Sam2oo2).  
It has some cool \`<div></div>\` tags in it.  

        <div>
            <h1>
                Hello wolrd and I Love You.
            </h1>
        </div>

1. This is the first list item.  
2. And the second one.  
3. The third one.  
4. Finally the last one.   

It is a crazy fun stuff.  
>Isn't it?  

Happy Coding.<br>
![Smile Victory](https://www.google.com/imgres?imgurl=http%3A%2F%2Fwww.i2picture.com%2Fpictures%2Femojis%2Fe%2F7%2F6%2F9%2Fe76901eec61bd9ef2decd98fde1e4cd8_384.png&imgrefurl=http%3A%2F%2Fwww.i2picture.com%2Fstickers%2Fsmileys%2Fhappy-victory-hand-emoji-sticker-e76901eec61bd9ef2decd98fde1e4cd8&tbnid=sb7UuTgMeesl4M&vet=12ahUKEwi6gK_9kt3vAhVEhUsFHb0fBlAQMygGegUIARDSAQ..i&docid=PT_LBRQrfBSfBM&w=384&h=384&q=smile%20victory%20emojis&ved=2ahUKEwi6gK_9kt3vAhVEhUsFHb0fBlAQMygGegUIARDSAQ)  

**ENJOY**  

`
,
}
    }

    updateMarkdown(markdown) {
        this.setState({markdown});
    }


    render() {
        return (
            <Container className="container" fluid={true}>
                <Row>
                    <Col className="display_window" lg={4}>
                        <div className="toolbar first">
                            <i class="fas fa-edit"></i>
                            <h5>Editor</h5>
                        </div>
                        <textarea 
                            id="editor" 
                            name="editor" 
                            value={this.state.markdown}
                            onChange={(e) => {
                                this.updateMarkdown(e.target.value);
                            }}
                            >
                            </textarea>
                    </Col>
                    <Col className="display_window" lg={8}>
                        <div className="toolbar second">
                            <i class="fas fa-eye"></i>
                            <h5>Previewer</h5>
                        </div>
                        <div 
                            class="previewer_area" 
                            id="preview"
                            dangerouslySetInnerHTML={{
                            __html: marked(this.state.markdown),
                            }}
                        ></div>
                        {/* <iframe /> */}
                    </Col>
                </Row>
            </Container>
        )
    }    
}