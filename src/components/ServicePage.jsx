import "./style.css"
import React from "react"

export default class ServicePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        return (
            <div>
                {this.props.typeServices !== "" && 
                    <div id="servicepage">
                        This is service page with type of service is {this.props.typeServices}.
                    </div>}
            
                {this.props.typeServices === "" && 
                    <div id="servicepage">
                        This is service page with type of service is NULL.
                    </div>}
            </div>
            
        );
    }
};