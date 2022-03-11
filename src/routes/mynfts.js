import CardNFT from "../components/card";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "../css/mynfts.css";
import puser from "../icons/user90.png";

const MyNfts = () => {
  return (
    <>
      <Navbar />
      <div id="my-parent">
        <div id="my-cover"></div>
        <div id="my-profile">
          <img id="puser" src={puser} alt="" />
          <h2>Amrutam</h2>
          <p id="wallet">[wallet address]</p>
        </div>
        <div id="my-body">
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
        <Footer />
      </div>
    </>
  );
};

export default MyNfts;
