import React from "react";
import Paragraph from "./Paragraph";
import Button from "./Button";
import ScheduleVisit from "./ScheduleVisit";
export default class ServicesPage extends React.Component {
  render() {
    return (
      <div className="container">
        <img
          src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          width={100}
          alt="cat"
        />
        <div className="row">
          <div className="col col-8">
            <h1>Services Page</h1>
            <Paragraph title="Pet and service">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
              autem, impedit officiis nisi vitae error atque alias fuga animi
              asperiores vel provident quas reiciendis architecto quos similique
              minus, nesciunt debitis?
            </Paragraph>
            <Button name="99 USD" />
            <Button name="1 hr" />
            <br />
            <Button name="About" />
            <Button name="What's included?" />
            <Button name="FAQs" />
            <Paragraph title="About the service">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
              autem, impedit officiis nisi vitae error atque alias fuga animi
              asperiores vel provident quas reiciendis architecto quos similique
              minus, nesciunt debitis?
            </Paragraph>
            <img
              src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              alt=""
              className="col "
            />
            {this.props.children}
          </div>
          <div className="col col-4">
            <ScheduleVisit></ScheduleVisit>
          </div>
        </div>
      </div>
    );
  }
}
