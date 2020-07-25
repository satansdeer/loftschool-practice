import React from "react";
import Cart from "./Cart";
import CoursesList from "./CoursesList";

class MainContent extends React.Component {
    render() {
        return (
            <section className="about">
                <div className="container">
                    <div className="row bottom">
                        <div className="two-thirds column">

                            <CoursesList/>       
                        
                        </div>
                        <div className="one-third column">
                            
                            <Cart/>

                        </div>    
                    </div>
                </div>
            </section>
        );
    }
}

export default MainContent;
