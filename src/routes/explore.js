import Footer from "../components/footer";
import Navbar from "../components/navbar";
import CardNFT from "../components/card";

import "../css/explore.css";
const Explore = () => {
  return (
    <div>
      <Navbar />
      <div id="explore-parent">
        <div id="explore-title">Explore NFTs</div>
        <div id="explore-body">
          <CardNFT />
          <CardNFT />
          <CardNFT />
          <CardNFT />
          <CardNFT />
          <CardNFT />
          <CardNFT />
          <CardNFT />
          <CardNFT />
          <CardNFT />
          <CardNFT />
          <CardNFT />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Explore;
