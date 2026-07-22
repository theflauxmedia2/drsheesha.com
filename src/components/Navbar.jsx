import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { NAV_LINKS } from '../config/navigation';
import { SITE } from '../config/site';
import { useLenis } from './SmoothScroll';
import { RESERVATION_PROMPT, whatsappUrl } from '../utils/whatsapp';

const NavItem = ({ link, onClick }) => {
  if (link.external) {
    return (
      <a
        href={link.href}
        target={link.sameTab ? undefined : '_blank'}
        rel={link.sameTab ? undefined : 'noopener noreferrer'}
        onClick={onClick}
      >
        {link.label}
      </a>
    );
  }

  return (
    <NavLink
      to={link.to}
      end={link.to === '/'}
      className={({ isActive }) => (isActive ? 'active' : '')}
      onClick={onClick}
    >
      {link.label}
    </NavLink>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { lenis } = useLenis();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    const lenisInstance = lenis?.current;
    if (lenisInstance) {
      if (drawerOpen) lenisInstance.stop();
      else lenisInstance.start();
    }
    return () => {
      document.body.style.overflow = '';
      lenisInstance?.start();
    };
  }, [drawerOpen, lenis]);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__inner">
          <Link to="/" className="navbar__logo" onClick={closeDrawer}>
            <img
              src="/Dr_Sheesha_Dubai_Logo.png"
              alt="Dr. Sheesha Dubai"
              width="120"
              height="48"
            />
          </Link>

          <ul className="navbar__links">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                {link.external ? (
                  <NavItem link={link} />
                ) : (
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) => (isActive ? 'active' : '')}
                  >
                    {link.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>

          <div className="navbar__actions">
            <a
              href={whatsappUrl(RESERVATION_PROMPT)}
              className="btn btn-outline navbar__reserve"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reserve
            </a>
            <a
              href={SITE.whatsapp}
              className="navbar__phone"
              target="_blank"
              rel="noopener noreferrer"
            >
              {SITE.phone}
            </a>
          </div>

          <button
            type="button"
            className="navbar__toggle"
            aria-label="Open menu"
            onClick={() => setDrawerOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div
        className={`navbar__drawer ${drawerOpen ? 'navbar__drawer--open' : ''}`}
        aria-hidden={!drawerOpen}
      >
        <button
          type="button"
          className="navbar__drawer-close"
          aria-label="Close menu"
          onClick={closeDrawer}
        >
          ×
        </button>
        {NAV_LINKS.map((link) => (
          <NavItem key={link.label} link={link} onClick={closeDrawer} />
        ))}
        <a
          href={whatsappUrl(RESERVATION_PROMPT)}
          className="btn btn-outline"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeDrawer}
        >
          Reserve
        </a>
        <a
          href={SITE.whatsapp}
          className="navbar__phone"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeDrawer}
        >
          {SITE.phone}
        </a>
      </div>
    </>
  );
};

export default Navbar;
