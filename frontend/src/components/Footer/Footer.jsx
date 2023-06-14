import "./footer.scss";
import logo from "../../assets/vivid_logo.png";

export default function Footer() {
  return (
    <footer>
      <img src={logo} alt="vivid_logo" />

      <div className="footer-copyright">
        &copy; {new Date().getFullYear()} ViViD. All rights reserved.
      </div>
    </footer>
  );
}
