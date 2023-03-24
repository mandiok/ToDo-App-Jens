import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

export default function toastify(text) {
  Toastify({
    text: text,
    duration: 3000,
    gravity: 'top',
    close: true,
    position: 'right',
    backgroundColor: 'grey'
  }).showToast();
}