import { modalPost } from '../views/modal.js';

const post = () => {
    const btnPost = document.querySelector('#btnPost');
    const sectionModalPost = document.querySelector('#sectionModalPost');

    btnPost.addEventListener('click', (e) => {
        e.preventDefault();
        sectionModalPost.classList.add('show-modal');
        modalPost();
    });

    const btnClose = document.querySelector('#btnClose');

    btnClose.addEventListener('click', () => {
        sectionModalPost.classList.remove('show-modal');
    });

}

export { post };