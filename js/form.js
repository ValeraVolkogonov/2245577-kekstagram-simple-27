import { isEscapeKey } from './util.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';

const userForm = document.querySelector('.img-upload__form');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const closeButton = document.querySelector('#upload-cancel');

const pristine = new Pristine(userForm,
  {
    classTo: 'img-upload__text',
    errorTextParent: 'img-upload__text',
  },
  true
);

const showModal = () => {
  imgUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onEscapeKeyPress);
};

const hideModal = () => {
  userForm.reset();
  resetScale();
  resetEffects();
  imgUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscapeKeyPress);
};

function onEscapeKeyPress(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideModal();
  }
}

uploadFile.addEventListener('change', showModal);
closeButton.addEventListener('click', hideModal);

userForm.addEventListener('click', (evt) => {
  if (evt.target.className === 'img-upload__overlay') {
    hideModal();
  }
});

userForm.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});
