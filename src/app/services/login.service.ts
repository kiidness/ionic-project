import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  loginUser(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  signupUser(email: string, password: string): Promise<any> {
    return firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((newUserCredential: firebase.auth.UserCredential) => {
          firebase
              .firestore()
              .doc(`/userProfile/${newUserCredential.user.uid}`)
              .set({ email });
        })
        .catch(error => {
          console.error(error);
          throw new Error(error);
        });
  }

  logoutUser() {
    return firebase.auth().signOut();
  }

  getUserLoggedEmail() {
    if (firebase.auth().currentUser == null) {
      return null;
     }
    return firebase.auth().currentUser.email;
  }

  removeLoggedAccount() {
    firebase.auth().currentUser.delete();
  }

}
