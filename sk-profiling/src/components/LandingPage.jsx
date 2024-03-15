import "../css/style.css";
import image from "../pictures/group.png";
import image1 from "../pictures/skfed.png";

export default function LandingPage() {
  return (
    <div className="bg ">
      <div className="pictures">
        <div className="button-container">
          <button className="loginBtn">Login</button>
          <button className="youthCouncil">Youth Council</button>
          <button className="home">Home</button>
        </div>
        <img src={image} alt="Your Image" className="grouppic" />
        <img src={image1} alt="Your Image" className="sk" />
        <div className="skfedtext">SK Federation - Cebu City</div>
      </div>
    </div>
  );
}
