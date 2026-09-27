import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../config/navigation';
import { SITE } from '../config/site';
import SocialLinks from './SocialLinks';
import { RESERVATION_PROMPT, whatsappUrl } from '../utils/whatsapp';

const FooterNavLink = ({ link }) => {
  if (link.external) {
    return (
      <a
        href={link.href}
        target={link.sameTab ? undefined : '_blank'}
        rel={link.sameTab ? undefined : 'noopener noreferrer'}
      >
        {link.label}
      </a>
    );
  }
  return <Link to={link.to}>{link.label}</Link>;
};

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <img
                src="/brand/logo.webp"
                alt="Dr. Sheesha Dubai"
                width="960"
                height="408"
                decoding="async"
              />
            </Link>
            <p className="footer__tagline">Where every session tells a story.</p>
            <p className="footer__sub">{SITE.tagline}</p>
            <a
              href={whatsappUrl(RESERVATION_PROMPT)}
              className="btn btn-outline footer__cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reserve a Table
            </a>
          </div>

          {/* Navigation */}
          <div className="footer__col">
            <h3 className="footer__heading">Explore</h3>
            <nav className="footer__links" aria-label="Footer navigation">
              {NAV_LINKS.map((link) => (
                <FooterNavLink key={link.label} link={link} />
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h3 className="footer__heading">Visit Us</h3>
            <address className="footer__contact">
              <p>{SITE.address.formatted}</p>
              <p>
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {SITE.phone}
                </a>
              </p>
              <p>{SITE.hours}</p>
            </address>
          </div>

          {/* Social & menu */}
          <div className="footer__col">
            <h3 className="footer__heading">Connect</h3>
            <SocialLinks className="footer__social" />
            <a
              href={SITE.menuUrl}
              className="footer__menu-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Digital Menu →
            </a>
          </div>
        </div>

        <div className="footer__bar">
          <p className="footer__copy">
            © {year} {SITE.legalName}. All rights reserved.
          </p>
          <p className="footer__domain">
            <a href={SITE.url}>drsheesha.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
