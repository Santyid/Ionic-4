import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { eventWord } from '../../app/event.interface';

/*
  Generated class for the ActionsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ActionsProvider {
	constructor(private db: AngularFirestore, public afAth: AngularFireAuth) {
		console.log('Hello ActionsProvider Provider');
	}

	addEvent(word: string) {
		const id = this.db.createId();
		this.db.collection('event').doc(id).set({ id, word });
	}

	selectAllEvents() {
		return this.db.collection<eventWord>('event').valueChanges();
	}

	Login(email: string, password: string) {
		this.afAth.auth.createUserWithEmailAndPassword(email, password).then((user) => {
			const id = this.db.createId();
			this.db.collection('user').doc(id).set({ id, email, password });
		});
	}
}