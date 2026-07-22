import { SOCIAL_ITEMS } from '../data/socialLinks';

const SocialLinks = ({ className = '', labeled = false }) => (
  <div
    className={`${labeled ? 'social-row' : 'social-links'} ${className}`.trim()}
    role="list"
  >
    {SOCIAL_ITEMS.map(({ key, label, href, icon }) => (
      <a
        key={key}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={labeled ? 'social-item' : 'social-links__item'}
        role="listitem"
      >
        {labeled ? <span>{label}</span> : icon}
      </a>
    ))}
  </div>
);

export default SocialLinks;
