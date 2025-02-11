class NoteList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.notes = [];
  }

  connectedCallback() {
    if (!this.shadowRoot.innerHTML) {
      this.shadowRoot.innerHTML = `
          <style>
            ul { list-style-type: none; padding: 0; margin: 0; }
            li { 
              margin-bottom: 10px; 
              padding: 8px; 
              border: 1px solid #ddd; 
              border-radius: 5px; 
              background: #f9f9f9;
            }
            strong { display: block; font-size: 1.2em; }
            p { margin: 5px 0; }
            small { color: gray; }
          </style>
          <div id="noteContainer"></div>
        `;
    }
    this.render();
  }

  set data(notes) {
    this.updateNotes(notes);
  }

  updateNotes(notes = []) {
    if (!Array.isArray(notes)) {
      console.error('Data catatan harus berupa array.');
      return;
    }
    this.notes = notes;
    console.log('Memperbarui daftar catatan:', this.notes);
    this.render();
  }

  render() {
    const container = this.shadowRoot.getElementById('noteContainer');
    if (!container) return;

    container.innerHTML = ''; // Kosongkan sebelum merender ulang

    if (this.notes.length === 0) {
      return;
    }

    const listElement = document.createElement('ul');

    this.notes.forEach((note) => {
      const listItem = document.createElement('li');

      const title = note.title || 'Tanpa Judul';
      const body = note.body || 'Tidak ada isi.';
      const createdAt = note.createdAt ? new Date(note.createdAt).toLocaleString() : 'Tanggal tidak tersedia';

      listItem.innerHTML = `
          <strong>${title}</strong>
          <p>${body}</p>
          <small>${createdAt}</small>
        `;
      listElement.appendChild(listItem);
    });

    container.appendChild(listElement);
  }
}

customElements.define('note-list', NoteList);

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('note-form');
  const noteList = document.querySelector('note-list');

  if (!form || !noteList) {
    console.error('Elemen <note-form> atau <note-list> tidak ditemukan.');
    return;
  }

  let notesData = [];

  // Render awal dengan data kosong
  noteList.updateNotes(notesData);

  // Event listener untuk menangkap event dari note-form
  form.addEventListener('noteAdded', (event) => {
    if (!event.detail) {
      console.error('Event detail kosong.');
      return;
    }

    if (!Array.isArray(event.detail)) {
      console.warn('Event detail bukan array, menambahkan satu item.');
      notesData.push(event.detail);
    } else {
      notesData = event.detail;
    }

    console.log('Catatan baru diterima:', notesData);
    noteList.updateNotes(notesData);
  });
});
