import {generatePhotos} from './data.js';

const templatePicture = document.querySelector('#picture').content.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');
const picturesListFragment = document.createDocumentFragment();

const photos = generatePhotos();

photos.forEach((photo) => {
  const userPhoto = templatePicture.cloneNode(true);
  userPhoto.querySelector('.picture__img').src = photo.url;
  userPhoto.querySelector('.picture__likes').textContent = photo.likes;
  userPhoto.querySelector('.picture__comments').textContent = photo.comments;
  picturesListFragment.append(userPhoto);
});

picturesContainer.append(picturesListFragment);

