import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import nftimg from "../assets/nft1.png";
import "../css/card.css";
const CardNFT = () => {
  return (
    <div id="card-parent" className="bg-dark text-white">
      <Card border="info" style={{ width: "15rem", height: "15rem" }}>
        <div id="cimgdiv" className="">
          <Card.Img variant="top" src={nftimg} />
        </div>

        <Card.Body>
          <Card.Title>Wonky Stonks #5905</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, modi.
          </Card.Text>
          <Button variant="dark">Send NFT</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
export default CardNFT;
