import Logo from "./Logo";
import { profile } from "../data/portfolio";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <Logo size={28} showText={true} />
        </div>
        <div className="footer__copy">
          © {new Date().getFullYear()} {profile.shortName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
