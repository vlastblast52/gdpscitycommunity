class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          position: sticky;
          top: 0;
          z-index: 50;
          background-color: rgba(17, 24, 39, 0.9);
          backdrop-filter: blur(8px);
        }
        
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .logo {
          font-weight: 700;
          font-size: 1.5rem;
          background: linear-gradient(to top right, #8b5cf6, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .nav-links {
          display: flex;
          gap: 1.5rem;
        }
        
        .nav-link {
          color: #d1d5db;
          font-weight: 500;
          transition: color 0.2s;
          position: relative;
        }
        
        .nav-link:hover {
          color: white;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(to top right, #8b5cf6, #ec4899);
          transition: width 0.3s;
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }
        
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          
          .mobile-menu-btn {
            display: block;
          }
        }
      </style>
      
      <nav>
        <a href="index.html" class="logo">City GDPS Community</a>
        
        <div class="nav-links">
          <a href="demons.html" class="nav-link">Demons</a>
          <a href="players.html" class="nav-link">Players</a>
          <!--a href="platformers.html" class="nav-link">Platformers</a>
          <a href="challenges.html" class="nav-link">Challenges</a>
          <a href="silent.html" class="nav-link">Silents</a>
          <a href="impossible.html" class="nav-link">Impossibles</a-->
        </div>
        
        <button class="mobile-menu-btn">
          <i data-feather="menu"></i>
        </button>
      </nav>
    `;
  }
}

customElements.define('custom-navbar', CustomNavbar);
