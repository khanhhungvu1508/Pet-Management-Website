import { Component } from "react";

class ScheduleVisit extends Component {
  render() {
    const newLocal = "";
    return (
      <div>
        <h1 className={newLocal}>Schedule a visit</h1>
        <p>Lorem ipsum dolor sit amet, dolor consectetur adipiscing elit.</p>
        <form action="">
          <input type="text" placeholder="Name" /> <br />
          <input type="number" placeholder="Phone" /> <br />
          <input type="email" placeholder="Email" /> <br />
          <input type="date" placeholder="Date" /> <br />
          <input type="time" placeholder="Time" /> <br />
          <button>Summit</button>
        </form>
      </div>
    );
  }
}

export default ScheduleVisit;
