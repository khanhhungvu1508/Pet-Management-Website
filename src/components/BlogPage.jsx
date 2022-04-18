import "./style.css"
import React from "react"
import Home from './Pages/home/Home' ;
import Single from './Pages/home/single/Single';
import Single1 from './Pages/home/single/Single1';
import Single2 from './Pages/home/single/Single2';
import Single3 from './Pages/home/single/Single3';
import Single4 from './Pages/home/single/Single4';
import Single5 from './Pages/home/single/Single5';
import Write from './Pages/home/write/Write';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Outlet
} from "react-router-dom";
export default class BlogPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        return (
            <div id="blog">
                {this.props.typeBlogs !== "" && 
                    <div id="blogpage">
                        {this.props.typeBlogs}
                    </div>}

                {this.props.typeBlogs === "" && 
                    <div id="blogpage">
                        .
                    </div>}
                <Router>
                <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Write" element={<Write/>}/>
                <Route path="/Posts/Post" element={<Single/>}/>
                <Route path="/Posts/Post2" element={<Single2/>}/>
                <Route path="/Posts/Post3" element={<Single3/>}/>
                <Route path="/Posts/Post4" element={<Single4/>}/>
                <Route path="/Posts/Post5" element={<Single5/>}/>
                <Route path="/Posts/Post1" element={<Single1/>}/>
                </Routes>
                </Router>
            </div>
            
        );
    }
    
};