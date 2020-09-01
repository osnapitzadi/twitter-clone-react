import React from 'react';
import {Jumbotron, Container, Button} from 'react-bootstrap';
import moment from 'moment'

function Msg (props){
    console.log(props.name);
    return(
        <Container
            key={props.id}>
            <Jumbotron>
                <div>{props.name}</div>
                <div>{props.content}</div>
                <div>{moment(props.postedDate).startOf('second').fromNow()}</div>
                    <Button variant="primary">Delete</Button>
            </Jumbotron>
        </Container>
    )
}

export default Msg;
