import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Username",
        location: "Default",
        email: "example@gmail.com",
      },
    };
    // console.log(props);
  }

  async componentDidMount() {
    //Api call
    const data = await fetch("https://api.github.com/users/Tushar-Sahu7");
    const json = await data.json();

    this.setState({ userInfo: json });
    console.log(json);
  }

  render() {
    const { name, location, email, avatar_url } = this.state.userInfo;
    return (
      <div className="res-container">
        <div className="about-card">
          <img src={avatar_url} alt="" />
          <h1>{name}</h1>
          <h4>
            <strong>Location:</strong> {location}
          </h4>
          <h4>
            <strong>Email:</strong> {email}
          </h4>
        </div>
      </div>
    );
  }
}

export default UserClass;
