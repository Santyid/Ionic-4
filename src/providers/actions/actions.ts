import { eventWord } from './../../app/event.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';

import { AngularFireStorage } from 'angularfire2/storage';

/*
  Generated class for the ActionsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ActionsProvider {
	constructor(
		private db: AngularFirestore,
		public afAth: AngularFireAuth,
		public Storage: AngularFireStorage
	) {
		console.log('Hello ActionsProvider Provider');
	}

	addEvent(word: string) {
		const id = this.db.createId();
		const idEvent = this.db.createId();
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

	addGuest(event: eventWord, nombre: string) {
		const id = this.db.createId();
		this.db.collection('event').doc(event.id).collection('list').doc(id).set({ nombre });
	}

	viewPicture(event: eventWord) {
		return this.db.collection<eventWord>('event/' + event.id + '/' + 'list').valueChanges();
	}

	createImage(event: eventWord, image: string) {
		
		this.Storage.storage
			.ref(`/guestProfile/profilePicture.png`)
			.putString(image, 'base64', {
				contentType: 'image/png'
			})
			.then((savedPicture) => {
				const id = this.db.createId();
				this.db
					.collection('event')
					.doc(event.id)
					.collection('list')
					.doc(id)
					.set({ this.savedPicture.downloadURL });
			});
	}
}
