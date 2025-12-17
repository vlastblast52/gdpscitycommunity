//absolute top-2 right-2 #ba0100 px-2 py-1 rounded text-sm font-bold
class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background-color: rgba(0,0,0,0);
          color: rgba(0,0,0,1);
          padding: 3rem 1rem;
          margin-top: 4rem;
        }
        
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }
        
        .footer-section h3 {
          color: white;
          font-size: 1.2rem;
          margin-bottom: 1.5rem;
          position: relative;
        }
        
        .footer-section h3::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 40px;
          height: 3px;
          background: linear-gradient(to bottom, #cb9fba, #4a4595);
        }
        
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        
        .footer-link {
          color: rgba(0,0,0,1);
          transition: color 0.2s, transform 0.2s;
        }
        
        .footer-link:hover {
          color: white;
          transform: translateX(4px);
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        
        .social-link {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: #1f2937;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }
        
        .social-link:hover {
          background: linear-gradient(to right, #8b5cf6, #ec4899);
          transform: translateY(-3px);
        }
        
        .copyright {
          text-align: center;
          margin-top: 3rem;
          padding-top: 1.5rem;
          border-top: 1px solid #1f2937;
        }
        
        @media (max-width: 640px) {
          .footer-content {
            grid-template-columns: 1fr;
          }
        }
      </style>
      <div class="footer-content">
        <div class="footer-section">
          <h3>GDPS City</h3>
          <p>The site for Geometry Dash private server challenges and records.</p>
          <div class="social-links">
            <a href="https://telegram.org" class="social-link">
              <i data-feather="send"></i>
            </a>
            <a href="https://twitter.com" class="social-link">
              <i data-feather="twitter"></i>
            </a>
            <a href="https://discord.com" class="social-link">
              <i data-feather="discord"></i>
            </a>
          </div>
        </div>
        
        <div class="footer-section">
          <h3>Categories</h3>
          <div class="footer-links">
            <a href="demons.html" class="footer-link">Demons</a>
            <a href="players.html" class="footer-link">Players</a>
            <!--a href="platformers.html" class="footer-link">Platformers</a>
            <a href="challenges.html" class="footer-link">Challenges</a>
            <a href="silent.html" class="footer-link">Silents</a>
            <a href="impossible.html" class="footer-link">Impossibles</a-->
          </div>
        </div>
        
        <div class="footer-section">
          <h3>Resources</h3>
          <div class="footer-links">
            <a href="#" class="footer-link">GDPS Website</a>
            <a href="#" class="footer-link">Leaderboards</a>
            <a href="#" class="footer-link">Submission Form</a>
            <a href="#" class="footer-link">Community Discord</a>
          </div>
        </div>
      </div>
      
      <div class="copyright">
        &copy; ${new Date().getFullYear()} GDPS City Level Lists. Not affiliated with Geometry Dash.
      </div>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);