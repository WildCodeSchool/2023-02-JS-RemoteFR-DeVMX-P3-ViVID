import "./footer.scss";
import logo from "../../assets/vivid_logo.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="col-logo">
        <img src={logo} alt="vivid_logo" />
        <p>
          ViVID est une plateforme unique en son genre de vidéo à la demande sur
          le thème de vidéo aériennes
        </p>
      </div>
      <div className="col-contact">
        <ul className="unstyled">
          <li>Contact</li>
          <li>A propos</li>
          <li>Plan du site</li>
        </ul>
      </div>
      <div className="col-3">
        <ul className="unstyled">
          <li>Des vidéos exclusives pour vous</li>
          <li>Inscrivez-vous</li>
          <li>fse</li>
        </ul>
      </div>
      <div className="row">
        <p className="copyright">
          &copy;{new Date().getFullYear()} ViViD. All right reserved.
        </p>
      </div>
    </div>
  );
}
