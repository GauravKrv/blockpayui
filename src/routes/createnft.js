import Navbar from "../components/navbar";
import "../css/createnft.css";
import "react-bootstrap";
import imgholder from "../icons/addimg.png";
import Footer from "../components/footer";
const CreatNFTs = () => {
  return (
    <div>
      <Navbar />
      <div id="container">
        <div id="create-parent">
          <div className="create-child heading">Create NFT</div>
          <div className="create-child content">
            Image, Video, Audio, or 3D Model
          </div>
          <div className="create-child upload-content">
            <img src={imgholder} id="create-img" alt="" />
          </div>

          <div id="create-label">Name</div>
          <input type="text" id="create-input" name="fname"></input>

          <div id="create-label">Description</div>
          <input type="text" id="create-input" name="fname"></input>

          <button type="submit" id="create-btn">
            Create
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreatNFTs;
