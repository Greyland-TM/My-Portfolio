import React from 'react';
import { Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

const card = (props) => {
    return(
        <Card shadow={5} style={{width: '512px', margin: 'auto', width: '25%'}}>
            <CardTitle style={{color: '#fff', height: '190px', background: props.url}}>{props.langues}</CardTitle>
            <CardText> {props.text} </CardText>
            <CardActions border>
                <Button Colored>GitHub</Button>
                <Button Colored>Codepen</Button>
                <Button Colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
            </CardMenu>
        </Card>
    )
}

export default card;