import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import SendComponent from "./components/sendphone";
import CreatNFTs from "./routes/createnft";
import Explore from "./routes/explore";
import MyNfts from "./routes/mynfts";
import NFTDetail from "./routes/nftdetail";
function App() {
  return (
    <>
      {/* <Navbar />
      <SendComponent text="Wallet address" /> */}
      {/* <SendComponent text="Phone number" /> */}
      <MyNfts />
      {/* <CreatNFTs /> */}
      {/* <NFTDetail /> */}
      {/* <Footer /> */}
      {/* <Explore /> */}
    </>
  );
}

export default App;
