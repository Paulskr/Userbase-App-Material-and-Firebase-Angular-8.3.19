import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

	private FirestoreCollection: AngularFirestoreCollection<User>; 
  private FirestoreDocument: AngularFirestoreDocument<User>;

	users: Observable<User[]>;

  constructor(private afs: AngularFirestore) {
  	// afs.firestore.settings( { timestampsInSnapshots: true } );
  	// afs.firestore.enablePersistence();

    // get changes & data
  	this.FirestoreCollection = afs.collection<User>('users');

  	this.users = this.FirestoreCollection.snapshotChanges().pipe(
      map(actions => 
        actions.map(a => {
          const data = a.payload.doc.data() as User;
          const id = a.payload.doc.id;
          return { id, ...data };
      })) 
    );
  }
 
  getUser() {
  	return this.users;
  } 

  addUser(user: User) {
    this.FirestoreCollection.add(user);
  }

  deleteUserId(user) {
    this.FirestoreDocument = this.afs.doc(`users/${user.id}`);
    this.FirestoreDocument.delete(); 
  }
 
  updateUserId(user) { 
    this.FirestoreDocument = this.afs.doc(`users/${user.id}`);
    this.FirestoreDocument.update(user);
  }

}

export interface User {  
	username: string;
	profession: string;
}