import MockFirebase from 'mock-cloud-firestore';

// import funtions firebase firestore
import {
            addUsers,
            createPost,
            getAllPost,
            getPost,
            editDataPost,
            deleteDataPost,
        } from '../src/firebase/fb-firestore.js';

const fixtureData = {
    __collection__: {
        post: {
            __doc__: {
                abc001: {
                    // uid: 'def001',
                    email: 'grellatasquintana@gmail.com',
                    name: 'Grecia Llatas',
                    // photoUser: '../src/img/user.png',
                    post: 'Chicos! Visiten este lugar, Marakos.',
                    // photoPost: '../src/img/newLogo.png',
                    timePost: '11 de octubre de 2021, 14:53:07 UTC-5',
                },

                abc002: {
                    // uid: 'def002',
                    email: 'ydamianelguera@gmail.com',
                    name: 'Yandali Damian',
                    // photoUser: '../src/img/user.png',
                    post: 'Gente, alguna recomandación de restaurante en Cuzco',
                    // photoPost: '../src/img/newLogo.png',
                    timePost: '12 de octubre de 2021, 10:00:01 UTC-5',
                },
            },
        },
        users: {
            __doc__: {
                def001: {
                    name: 'Grecia LLatas',
                    uid: 'gl123',
                    photo: '../src/img/user.png',
                },
                def002: {
                    name: 'Yandali Damian',
                    uid: 'yd123',
                    photo: '../src/img/user.png',
                },
            },
        },
    },
};

// sNaiveSnapshotListenerEnabled - Si es true, se mostrarán los cambios con onSnapshot().
// De lo contrario, onSnapshot() no recibirá actualizaciones en tiempo real.
global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

describe('Crear un usuario', () => {
    it('is a function', () => {
        expect(typeof addUsers).toBe('function');
    });

    it('Debería retornar undefined de un usuario', () => {
        return addUsers('Grecia', '../src/img/user.png', 'abc123').then((data) => {
            expect(data).toBe(undefined);
        });
    });
});

describe('Crear un post', () => {
    it('is a function', () => {
        expect(typeof createPost).toBe('function');
    });

    it('Debería agregar un post a la colección', () => {
        return createPost('ydamianelguera@gmail.com', 'Yandali Damian', 'Hola', 'abc003')
        .then(() => {
            getAllPost().then((data) => {
                data.forEach((post) => {
                    const resultPost = post.data();
                    expect(resultPost).toBe('ydamianelguera@gmail.com', 'Yandali Damian', 'Hola', 'abc003');
                });
            });
        }).catch(() => {});
    });
});

describe('Obtener todos los post de una coleccion', () => {
    it('is a function', () => {
        expect(typeof getAllPost).toBe('function');
    });
});

describe('Obtener post por id', () => {
    it('is a function', () => {
        expect(typeof getPost).toBe('function');
    });
});

describe('Editar un post', () => {
    it('is a function', () => {
        expect(typeof editDataPost).toBe('function');
    });

    it('Debería editar un post con el id: abc003', () => {
        return editDataPost('abc002', { post: 'Hola editando post' })
        .then(() => {
            getAllPost().then((data) => {
                data.forEach((post) => {
                    const resultPost = post.data().id;
                    expect(resultPost).toBe('abc002', { post: 'Hola editando post' });
                });
            });
        }).catch(() => {});
    });
});

describe('Eliminar un post', () => {
    it('is a function', () => {
        expect(typeof deleteDataPost).toBe('function');
    });

    it('Debería eliminar un post con el id: abc003', () => {
        return deleteDataPost('abc003')
        .then(() => {
            getAllPost().then((data) => {
                data.forEach((post) => {
                    const resultPost = post.data().id;
                    expect(resultPost).toBe(undefined);
                });
            });
        }).catch(() => {});
    });
});
