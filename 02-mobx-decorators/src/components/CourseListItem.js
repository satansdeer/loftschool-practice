import React from "react";
import PropTypes from "prop-types";
import { toJS } from "mobx";

class CoursesListItem extends React.Component {
    
    static propTypes = {
        course: PropTypes.object.isRequired,
        addItemToCart: PropTypes.func.isRequired
    };

    render() {
        const course = this.props.course;

        return (
            <div className="row">
                <div className="nine columns">
                    <div className="card">
                        <h4>{course.title}</h4>
                        <p>{course.author}</p>
                    </div>
                </div>
                <div className="one columns">
                    <p className="price">${course.price}</p>
                </div>
                <div className="two columns">
                    <a href="#" onClick={(e) => this.addToCart(e, course)} className="button-primary button input add-to-cart" data-id={course.id}>Buy</a>
                </div>
            </div>
        );
    }

    addToCart = (e, course) => {
        e.preventDefault();
        var courseObject = toJS(course);
        this.props.addItemToCart(courseObject);
    };
}

export default CoursesListItem;