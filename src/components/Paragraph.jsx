import React from "react";

export default class Paragraph extends React.Component
{
    render()
    {
        return (
            <div className="col-8">
                <h1>{this.props.title}</h1>
                {/* lorem */}
                {this.props.children}
            </div>
        );
    }
}