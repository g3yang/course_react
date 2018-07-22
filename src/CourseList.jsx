import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class CourseList extends Component{

    constructor(props){
        super(props);
        this.state = {
            courses:[] 
        };
    }

    componentDidMount(){
       axios.get('http://localhost:3001/courses').then(res=>{
           const courses = res.data;
           this.setState({
               courses:courses
           });
       });
    }

    handleDelete(id){
        axios.delete(`http://localhost:3001/courses/${id}`).then(res=>{
           let courses = this.state.courses;
           const newCourses = courses.filter(c=>c._id !== id);
           this.setState({
               courses:newCourses
           });
        })
    }

    

    render(){
        return (
            <div className="course-list">
                <ul>
                {
                    this.state.courses.map(course=>(
                        <li className="list-group-item">
                            <span className="glyphicon glyphicon-ok icon" aria-hidden="true">
                            </span>
                            {course.title}
                            <button type="button" className="close" onClick={this.handleDelete.bind(this,course._id)}>&times;</button>
                        </li>
                    ))
                }        
                </ul>
                <Link to="/add">Add Course</Link>
            </div>
        );
    }
}

export default CourseList;