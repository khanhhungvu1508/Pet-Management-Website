import "./style.css"
import React from "react"

export default class BlogPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        return (
            <div>
                {this.props.typeBlogs !== "" && 
                    <div id="blogpage">
                        This is blog page which type of blog is {this.props.typeBlogs}
                    </div>}

                {this.props.typeBlogs === "" && 
                    <div id="blogpage">
                        This is blog page which type of blog is NULL
                    </div>}
            </div>
        );
    }
};