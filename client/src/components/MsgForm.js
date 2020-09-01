import React from 'react';
import {Form, Container, Button} from 'react-bootstrap'


function MsgForm (props) {
    return (
        <Container className='w-50 mt-3'>
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="John" onChange={props.msgUserHandler} value={props.msg.msgUser}/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput2">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control type="text" placeholder="What's poppin?" onChange={props.msgHandler} value={props.msg.content}/>
                </Form.Group>
                <Button 
                    type='submit' 
                    variant='success' 
                    onClick={props.msgSubmitted}
                >Submit</Button>
            </Form>
        </Container>
    )
} 

export default MsgForm;