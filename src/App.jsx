import React, {Component} from 'react';
import {Route,Switch} from 'react-router-dom';
import CourseList from './CourseList.jsx';
import AddCourse from './AddCourse.jsx';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={CourseList}/>
        <Route path="/add" component={AddCourse}/>
      </Switch>
    );
  }
}
export default App;
