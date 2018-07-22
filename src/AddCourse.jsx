import React, {Component} from 'react';
import {FormGroup, FormControl, ControlLabel, Form, Button} from 'react-bootstrap';
import axios from 'axios';
import {browserHistory} from 'react-router';
import {Link} from 'react-router-dom';

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
        const newCourse = {
            title: this.state.title,
            description: this.state.description,
            hours: this.state.hours,
            price: this.state.price
        };
        axios.post('http://localhost:3001/courses', newCourse)
            .then(res=>{
                        this.props.history.push('/');
            });
    }

    render(){
        return (
            <form className="add-course">
                <FormGroup>
                    <ControlLabel>Title</ControlLabel>
                    <FormControl type="text" onChange={this.handleTitleChange.bind(this)}/>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Description</ControlLabel>
                    <FormControl componentClass="textarea" onChange={this.handleDescriptionChange.bind(this)} />
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Price</ControlLabel>
                    <FormControl type="text" onChange={this.handlePriceChange.bind(this)} />
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Hours</ControlLabel>
                    <FormControl type="text" onChange={this.handleHoursChange.bind(this)}/>
                </FormGroup>
                <Button onClick={this.handleSubmit.bind(this)}> Add </Button>
            </form>
        )
    }
}

export default AddCourse;