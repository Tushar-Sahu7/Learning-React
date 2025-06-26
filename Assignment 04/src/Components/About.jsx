import UserContext from "../Utils/userContext";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    return (
      <div>
        <h1>About Class Component</h1>
        <div>
          LoggedInUser{" "}
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <h2>This is Namaste React Web Series</h2>
        <UserClass
          name={"Tushar Sahu(class)"}
          location={"Jaunpur"}
          contact={"@tushar-sahu7"}
        />
      </div>
    );
  }
}

export default About;
