import React from "react";
import MainContent from "./MainContent";
import Footer from "./Footer";

class App extends React.Component {

    render() {
        return (
            <React.Fragment>
                <MainContent/>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default App;