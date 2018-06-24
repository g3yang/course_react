import React, {Component} from 'react';
import {FormGroup, FormControl, ControlLabel, Form, Button} from 'react-bootstrap';


class AddCourse extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    handleTitleChange(e){
        this.setState({
            title:e.target.value
        });
    }
    
    handleDescriptionChange(e){
        this.setState({
            description: e.target.value
        });
    }

    handlePriceChange(e){
        this.setState({
            price: parseFloat(e.target.value)
        });
    }

    handleHoursChange(e){
        this.setState({
            hours: parseInt(e.target.value)
        });
    }

    handleSubmit(){
        console.log('Submitting');
    }

    render(){
        return (
            <form className="add-course" onSubmit={this.handleSubmit.bind(this)}>
                <FormGroup>
                    <ControlLabel>Title</ControlLabel>
                    <FormControl type="text" onChange={this.handleTitleChange.bind(this)}/>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Description</ControlLabel>
                    <FormControl componentClass="textarea" />
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Price</ControlLabel>
                    <FormControl type="text" />
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Hours</ControlLabel>
                    <FormControl type="text" />
                </FormGroup>
                <Button type="submit"> Add </Button>
            </form>
        )
    }
}

export default AddCourse;