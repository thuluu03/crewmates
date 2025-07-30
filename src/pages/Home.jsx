import Navbar from "../components/navbar/navbar";
import "./style.css";

const Home = () => {
  return (
    <div className="page-container">
      <Navbar></Navbar>
      <div className="content">
        <h1>HOME</h1>
        <p>Build and store Amongus crewmates!</p>
        <img className="banner-img" src="https://images.seeklogo.com/logo-png/39/2/among-us-logo-png_seeklogo-396390.png"></img>
      </div>
    </div>
  );
};

export default Home;
