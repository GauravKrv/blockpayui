import logo from "../icons/chains48.png";
import "../css/footer.css";
const Footer = () => {
  return (
    <div id="footer-parent">
      <div id="footer-body">
        <img id="logo" src={logo}></img>

        <div id="footer-company">BlockPay</div>
        <div id="footer-contact">hammad@blockpay.tech</div>
        <div id="footer-ending">
          Made with <span>&hearts;</span> in India
        </div>
      </div>
    </div>
  );
};

export default Footer;
