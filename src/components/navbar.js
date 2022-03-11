import "../css/navbar.css";
import user from "../icons/user30.png";
import logo from "../icons/chains48.png";
import { Icon } from "semantic-ui-react";

const Navbar = () => {
  return (
    <div id="nav">
      <div id="nav-parent">
        <div id="nav-left">
          <div id="brand">
            {" "}
            <img src={logo} id="logo"></img>{" "}
          </div>
          <div id="brand-name" class="brand-name">
            BlockPay
          </div>
        </div>
        <div id="nav-right">
          <div id="nav-item">Dasboard</div>
          <div class="dropdown">
            <div>
              NFTs
              {/* <Icon link name="angle down" /> */}
            </div>
            <div class="dropdown-content">
              <a href="#">Create NFTs</a>
              <a href="#">My NFTs</a>
            </div>
          </div>
          <div id="nav-item">About</div>
          <div id="nav-item">Pricing</div>
          <div id="nav-item">
            {" "}
            <img src={user} id="userim"></img>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
