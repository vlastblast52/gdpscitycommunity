class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background-color: #111827;
          color: #9ca3af;
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
          background: linear-gradient(to right, #8b5cf6, #ec4899);
        }
        
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        
        .footer-link {
          color: #9ca3af;
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
        .social-button {
        width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: #1f2937;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;

          /*display: inline-flex;
          align-items: center; 
          padding: 10px 20px;
          background-color: #1f2937 #5865F2;  Фирменный цвет Discord
          color: #ffffff;
          text-decoration: none;
          border-radius: 8px;
          font-family: sans-serif;
          font-weight: bold;
          font-size: 16px;
          transition: background-color 0.3s ease;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
}

  .social-button:hover {
    background-color: #00554c;
    transform: translateY(-3px);
}

  .social-icon {
    width: 20px; /* Размер иконки */
    height: 20px;
}
      </style>
      
      <div class="footer-content">
        <div class="footer-section">
          <h3>City GDPS Community</h3>
          <p>Сайт достижений сообщества City GDPS</p>
          <div class="social-links">
            <a href="#" class="social-link">
              <i data-feather="youtube"></i>
            </a>
            <a href="#" class="social-link">
              <i data-feather="twitter"></i>
            </a>
            <a href="#" class="social-link">
              <i data-feather="discord"></i>
            </a>
            <a href="https://www.tiktok.com/@citygdps1" class="social-button" target="_blank">
              <img src="https://vlastblast52.github.io/gdpscitycommunity/images/tticon.svg" alt="TikTok" class="social-icon">
            </a>
            <a href="https://t.me/CityGDPS" class="social-button" target="_blank">
              <img src="https://vlastblast52.github.io/gdpscitycommunity/images/tgicon.svg" alt="Telegram" class="social-icon">
            </a>
          </div>
        </div>
        
        <div class="footer-section">
          <h3>Категории</h3>
          <div class="footer-links">
            <a href="demons.html" class="footer-link">Топ демонов</a>
            <a href="players.html" class="footer-link">Топ игроков</a>
          </div>
        </div>
        
        <div class="footer-section">
          <h3>Ресурсы</h3>
          <div class="footer-links">
            <a href="https://citygdps.online" class="footer-link">Вебсайт GDPS</a>
            <!--a href="players.html" class="footer-link">Таблица лидеров</a-->
            <a href="https://t.me/citygdpsnews" class="footer-link">Новостной канал сервера</a>
            <a href="https://t.me/CityGDPS" class="footer-link">Тг-чат сообщества</a>
          </div>
        </div>
      </div>
      
      <div class="copyright">
        &copy; ${new Date().getFullYear()} City GDPS Community. Не имеет отношения к Geometry Dash. Права не защищены, но кто возьмёт сайт - тот крайне плохой человек!
      </div>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);
