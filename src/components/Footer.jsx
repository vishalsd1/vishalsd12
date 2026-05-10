import { profile } from "../data/portfolio";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__mark">VD</span>
          <span>{profile.shortName}</span>
        </div>
        <div className="footer__copy">
          © {new Date().getFullYear()} {profile.shortName}. Built with React + Vite.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
