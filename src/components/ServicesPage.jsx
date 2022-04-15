import React from "react";
import Paragraph from "./Paragraph";

export default class ServicesPage extends React.Component
{
    render()
    {
        return (
            <div>
                <h1>Services Page</h1>
                <Paragraph title="Pet and service">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores autem, impedit officiis nisi vitae error atque alias fuga animi asperiores vel provident quas reiciendis architecto quos similique minus, nesciunt debitis?
                </Paragraph>
                <Paragraph title="About the service">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores autem, impedit officiis nisi vitae error atque alias fuga animi asperiores vel provident quas reiciendis architecto quos similique minus, nesciunt debitis?
                </Paragraph>
                {this.props.children}
            </div>
        );
    }
}