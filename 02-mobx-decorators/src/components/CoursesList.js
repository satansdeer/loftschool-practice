import React from "react";
import { inject, observer } from "mobx-react";
import CoursesListItem from "./CourseListItem";

@inject('coursesStore', 'cartStore')
@observer
class CoursesList extends React.Component {

    componentWillMount() {
        this.props.coursesStore.fetchCourses();
    }

    render() {
        
        const { courses } = this.props.coursesStore;

        return (
            <div id="courses-list" className="container">
                
                <h3 id="heading" className="heading">Online Courses</h3>

                { courses.map(course => <CoursesListItem course={course} key={course.id} addItemToCart={this.addToCart} />) }
            
            </div> 
        );
    }

    addToCart = (course) => {
        this.props.cartStore.addToCart(course);
    }
}

export default CoursesList;