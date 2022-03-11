import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "../css/nftdetail.css";
const NFTDetail = () => {
  return (
    <div>
      <Navbar />
      <div id="detail-parent">
        <div id="detail-body">
          <div id="detail-nft-parent">
            <div id="detail-nft-img">
              <img id="detail-img" alt="" src=""></img>
            </div>
            <div id="detail-nft-name-body">
              <div id="nft-name-creator">[creator’s name]</div>
              <div id="nft-name-name">gale</div>
              <div id="nft-name-owner">[owned by]</div>
              <button id="nft-name-send">Send</button>
            </div>
          </div>
          <div id="detail-desc-body">
            <div className="detail-desc-desc">Description</div>
            <div id="detail-desc">[description...........................]</div>
            <div className="detail-desc-desc">Details</div>
            <div className="detail-desc-content">
              Contract address: xxxxxxxxxxx{" "}
            </div>
            <div className="detail-desc-content">Token ID: xxxxxxxxxxxx</div>
            <div className="detail-desc-content">Token Standard: xxxxxx</div>
            <div className="detail-desc-content">
              Blockchain: xxxxx Metadata: xxxxxx
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NFTDetail;
