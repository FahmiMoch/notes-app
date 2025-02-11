// Import form validation (untuk judul)
import { customValidationJudulHandler, customValidationIsiHandler } from '../form-custom-validation.js';

const form = document.querySelector('form');
const judulInput = form.elements['judul'];
const isiInput = form.elements['isi'];

form.addEventListener('submit', (event) => {
  event.preventDefault();
});

// Validasi untuk input judul
judulInput.addEventListener('change', customValidationJudulHandler);
judulInput.addEventListener('invalid', customValidationJudulHandler);
judulInput.addEventListener('blur', (event) => {
  const isValid = event.target.validity.valid;
  const errorMessage = event.target.validationMessage;

  const connectedValidationId = event.target.getAttribute('aria-describedby');
  const connectedValidationEl = connectedValidationId ? document.getElementById(connectedValidationId) : null;

  if (connectedValidationEl && errorMessage && !isValid) {
    connectedValidationEl.innerText = errorMessage;
  } else {
    connectedValidationEl.innerText = '';
  }
});

// Validasi untuk input isi (perbaikan handler)
isiInput.addEventListener('change', customValidationIsiHandler);
isiInput.addEventListener('invalid', customValidationIsiHandler);
isiInput.addEventListener('blur', (event) => {
  const isValid = event.target.validity.valid;
  const errorMessage = event.target.validationMessage;

  const connectedValidationId = event.target.getAttribute('aria-describedby');
  const connectedValidationEl = connectedValidationId ? document.getElementById(connectedValidationId) : null;

  if (connectedValidationEl && errorMessage && !isValid) {
    connectedValidationEl.innerText = errorMessage;
  } else {
    connectedValidationEl.innerText = '';
  }
});

// Ambil elemen form dan daftar catatan
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('note-form');
  const noteList = document.querySelector('note-list');

  // Pastikan elemen ditemukan
  if (!form || !noteList) {
    console.error('Elemen <note-form> atau <note-list> tidak ditemukan.');
    return;
  }

  let notesData = [];

  noteList.updateNotes(notesData);

  form.addEventListener('noteAdded', (event) => {
    notesData = event.detail; // Ambil data terbaru dari event
    noteList.updateNotes(notesData); // Perbarui daftar catatan
  });
});
