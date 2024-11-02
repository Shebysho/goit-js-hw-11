import { fetchImages } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const searchForm = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader'); // Ваш лоадер

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
let currentPage = 1;
let currentQuery = '';

searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const query = event.currentTarget.elements.searchQuery.value.trim();

  if (query === '') {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query.',
    });
    return;
  }

  loader.classList.remove('hidden');
  currentPage = 1;
  currentQuery = query;
  gallery.innerHTML = '';

  try {
    const { hits, totalHits } = await fetchImages(query, currentPage);
    if (hits.length === 0) {
      iziToast.info({
        title: 'Information',
        message: 'Sorry, there are no images matching your search query. Please try again!',
      });
    } else {
      renderGallery(hits);
      lightbox.refresh();

    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch images. Please try again later.',
    });
  } finally {
    loader.classList.add('hidden');
  }
});