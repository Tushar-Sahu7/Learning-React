import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is a namaste react web series</h2>
      <UserClass
        name={"Tushar Sahu(class)"}
        location={"Jaunpur"}
        contact={"@tushar-sahu7"}
      />
    </div>
  );
};

export default About;
