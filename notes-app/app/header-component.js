class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
        <header>
          <div class="header-notes">
            <h2 class="title-notes">Fachm Notes App</h2>
          </div>
        </header>
      `;
  }
}

customElements.define('header-component', HeaderComponent);
