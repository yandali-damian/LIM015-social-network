import { auth, db } from './config-firebase.js';

const getUser = () => db.collection('users').get();
const infoUsers = () => {}

// const formLogin = document.querySelector('#formLogin');
// formLogin.addEventListener('submit', (e) => {
//     e.preventDefault();
//     // const email = document.querySelector('#inputEmail');
//     console.log(e);
// });
console.log(auth.currentUser);
window.addEventListener('DOMContentLoaded', async(e) => {
    const dateFirebase = await getUser();
    dateFirebase.forEach(doc => {
        // const divProfile = document.querySelector('#divProfile');
        // divProfile.innerText = `${doc.data().name}`;
    })

})


export { infoUsers };