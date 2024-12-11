  import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, signOut } from 'firebase/auth';
  import { auth } from '../firebase';

  export const loginWithEmailAndPassword = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error) {
      throw error;
    }
  };

  export const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      return result.user;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  export const loginWithFacebook = async () => {
    const provider = new FacebookAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      return result.user;
    } catch (error) {
      throw error;
    }
  };

  export const logout = async () => {
    try {
      await signOut(auth);
      console.log('Sesión cerrada exitosamente.');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      throw error;
    }
  };

  export const getAuthenticatedUser = () => {
    try {
      const user = auth.currentUser;
      if (user) {
        return user;
      } else {
        console.log('No hay usuario autenticado.');
        return null;
      }
    } catch (error) {
      console.error('Error al obtener el usuario autenticado:', error);
      throw error;
    }
  };
  