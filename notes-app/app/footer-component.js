class FooterComponent extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
        <footer>
          <div class="footer-notes">
            <p>&copy; 2025 Fachm Notes App. Made With &hearts;</p>
          </div>
        </footer>
      `;
  }
}

customElements.define('footer-component', FooterComponent);
