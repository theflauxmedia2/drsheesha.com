import { Link } from 'react-router-dom';

const NotFound = () => (
  <main className="page" id="main-content">
    <section className="section bg-black">
      <div className="section-inner section-centered">
        <p className="label-gold">404</p>
        <h1
          className="h1"
          style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', margin: '1rem 0 1.25rem' }}
        >
          Page not found
        </h1>
        <p style={{ color: 'var(--smoke-dim)', maxWidth: '36rem', margin: '0 auto 2rem' }}>
          That address is not on this site. Return home, or reserve a table at
          Dr. Sheesha in Al Karama.
        </p>
        <Link to="/" className="btn btn-gold">
          Back to home
        </Link>
      </div>
    </section>
  </main>
);

export default NotFound;
