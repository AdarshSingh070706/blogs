import {auth} from './conf'
import { onAuthStateChanged } from 'firebase/auth'

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe(); 
      resolve(user || null);
    }, reject);
  });
};