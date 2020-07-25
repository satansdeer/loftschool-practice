import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

class App extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Header/>
                <MainContent/>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default App;