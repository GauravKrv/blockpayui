import "../css/sendphone.css";
import Footer from "./footer";
const Sendcomponent = (props) => {
  return (
    <div id="send-parent">
      <div id="send-form">
        <div id="send-title">
          Send NFTs to anyone's <span id="span-phone">{props.text}</span>
        </div>
        <form>
          <input
            type="text"
            placeholder={props.text}
            id="send-number"
            list="history"
          ></input>
          <datalist id="history">
            <option value="Value1">Value1</option>
            <option value="Value2">Value2</option>
            <option value="Value3">Value3</option>
            <option value="Value4">Value4</option>
            <option value="Value5">Value5</option>
          </datalist>
          <div id="send-curr-nft"></div>
          <button id="send-button">Send</button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Sendcomponent;
