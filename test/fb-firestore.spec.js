import MockFirebase from 'mock-cloud-firestore';

// import funtions firebase firestore
import { addUsers } from '../src/firebase/fb-firestore.js';
// import { auth, db } from '../src/firebase/config-firebase.js';
// , createPost, getAllPost, getPost, editDataPost, deleteDataPost

const fixtureData = {
    __collection__: {
        post: {
            __doc__: {
                abc123: {
                    name: 'Grecia Llatas',
                    email: 'grellatasquintana@gmail.com',
                    post: 'Chicos! Visiten este lugar, Marakos, la comida es buenísima. Queda en Chiclayo, es muy conocido.',
                    datePost: '11/10/2021',
                    timePost: '11 de octubre de 2021, 14:53:07 UTC-5',
                },

                def456: {
                    name: 'Yandali Damian',
                    email: 'ydamianelguera@gmail.com',
                    post: 'Gente, alguna recomandación de restaurante en Cuzco',
                    datePost: '12/10/2021',
                    timePost: '12 de octubre de 2021, 10:00:01 UTC-5',
                },
            },
        },
        users: {
            __doc__: {
                ghi789: {
                    name: 'Grecia LLatas',
                    uid: 'gl123',
                },
                jkl012: {
                    name: 'Yandali Damian',
                    uid: 'yd123',
                },
            },
        },
    },
};

// sNaiveSnapshotListenerEnabled - Si es true, se mostrarán los cambios con onSnapshot().
// De lo contrario, onSnapshot() no recibirá actualizaciones en tiempo real.
global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

describe('Add User', () => {
    it('is a function', () => {
        expect(typeof addUsers).toBe('function');
    });

    // it('should return true if the path exist', () => {
    //     expect(index.existPath(path)).toBe(true);
    // });

    // it('should return false if the path isn`t exist', () => {
    //     expect(index.existPath(pathFail)).toBe(false);
    // });
});
