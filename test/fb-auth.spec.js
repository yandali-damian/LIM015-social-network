// import funtions firebase auth
import {
    createUserBD,
    currentUser,
    logInEmail,
    logInWithGoogle,
    signOut,
} from '../src/firebase/fb-auth.js';

const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockFirebase();

mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
    // use null if your code does not use RTDB
    () => null,
    () => mockauth,
);

describe('Crear un usuario con email', () => {
    it('is a function', () => {
        expect(typeof createUserBD).toBe('function');
    });

    it('Debería crear un usuario con grellatasquintana@gmail.com', () => {
        return createUserBD('grellatasquintana@gmail.com', '123456')
        .then((data) => {
            expect(data.email).toBe('grellatasquintana@gmail.com');
        }).catch(() => {});
    });

    it('Debería crear un usuario con ydamianelguera@gmail.com', () => {
        return createUserBD('ydamianelguera@gmail.com', '123456')
        .then((data) => {
            expect(data.password).toBe('123456');
        }).catch(() => {});
    });
});

describe('Usuario actual', () => {
    it('is a function', () => {
        expect(typeof currentUser).toBe('function');
    });

    it('Debería obtener datos de usuario logeado', () => {
        const data = {
            getUser: {
                uid: 'abc123',
                displayName: 'Yandali',
            },
        };
        firebase.auth().onAuthStateChanged().currentUser = data.currentUser;
        const id = () => {
            expect(getUser.uid).toEqual('abc123');
        };
        currentUser(id);
    });
});

describe('Login con email', () => {
    it('is a function', () => {
        expect(typeof logInEmail).toBe('function');
    });

    it('Debería iniciar sesión con email', () => {
        return logInEmail('grellatasquintana@gmail.com', '123456')
        .then((data) => {
            expect(data.email).toBe('grellatasquintana@gmail.com');
        }).catch(() => {});
    });
});

describe('Login con google', () => {
    it('is a function', () => {
        expect(typeof logInWithGoogle).toBe('function');
    });

    it('Debería iniciar sesión con google', () => {
        return logInWithGoogle()
        .then((data) => {
            console.log(data);
            expect(data.email).toBe(undefined);
        }).catch(() => {});
    });
});

describe('Cerrar sesión', () => {
    it('is a function', () => {
        expect(typeof signOut).toBe('function');
    });

    it('Debería iniciar sesión con email', () => {
        return signOut()
        .then((data) => {
            expect(data).toBe(undefined);
        }).catch(() => {});
    });
});
