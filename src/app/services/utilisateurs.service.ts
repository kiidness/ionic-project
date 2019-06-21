import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';


export interface Utilisateur {
  id?: string;
  nom: string;
  prenom: string;
  email: string;
}


@Injectable({
  providedIn: 'root'
})
export class UtilisateursService {
  private dataBase: AngularFirestore;

  constructor(db: AngularFirestore) {
    this.dataBase = db;
  }

  getUtilisateur(id) {
    return this.dataBase.doc<Utilisateur>('utilisateurs/' + id);
  }
}


