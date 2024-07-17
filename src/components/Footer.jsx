import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="contact-info">
        <p>Contact us: info@artistryhaven.com | +1 234 567 890</p>
      </div>
      <div className="social-media">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
      <div className="policies">
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-of-service">Terms of Service</a>
        <a href="/return-policy">Return Policy</a>
      </div>
      <div className="newsletter">
        <input type="email" placeholder="Subscribe to our newsletter" />
        <button>Subscribe</button>
      </div>
    </footer>
  );
}

export default Footer;