// Handler validasi untuk judul
export const customValidationJudulHandler = (event) => {
  event.target.setCustomValidity('');

  if (event.target.validity.valueMissing) {
    event.target.setCustomValidity('Wajib diisi.');
    return;
  }

  if (event.target.validity.tooShort) {
    event.target.setCustomValidity('Minimal mengisi karakter sebanyak 5.');
    return;
  }

  if (event.target.validity.patternMismatch) {
    event.target.setCustomValidity('Tidak boleh diawali dengan simbol, mengandung spasi, atau karakter spesial seperti dolar ($).');
    return;
  }
};

// Handler validasi untuk isi
export const customValidationIsiHandler = (event) => {
  event.target.setCustomValidity('');

  if (event.target.validity.valueMissing) {
    event.target.setCustomValidity('Wajib diisi.');
    return;
  }

  if (event.target.validity.tooShort) {
    event.target.setCustomValidity('Minimal mengisi karakter sebanyak 5.');
    return;
  }

  if (event.target.validity.patternMismatch) {
    event.target.setCustomValidity('Isi tidak boleh diawali dengan simbol atau karakter spesial.');
    return;
  }
};
