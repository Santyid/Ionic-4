import { AddUserPage } from './../add-user/add-user';
import { eventWord } from './../../app/event.interface';
import { userWord } from './../../app/user.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { ActionsProvider } from '../../providers/actions/actions';

import { AngularFireStorageModule } from 'angularfire2/storage';
/**
 * Generated class for the DetailEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-detail-event',
	templateUrl: 'detail-event.html'
})
export class DetailEventPage {
	eventWord: eventWord;
	eventWord2: eventWord[];
	image: string;

	listaInvitados: userWord[];
	id: number;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public actionProvider: ActionsProvider,
		public alertCtrl: AlertController
	) {
		this.eventWord = navParams.get('currentItem');
		this.selectList(this.eventWord);
	}

	showAlert() {}

	goToAddUser(): void {
		this.navCtrl.push('AddUserPage', { currentItem: this.eventWord });
		let alert = this.alertCtrl.create({
			title: 'Esta Hecho! Puedes regresar',
			subTitle: 'Tu registro se hizo correctamente',
			buttons: [ 'Aceptar' ]
		});
		alert.present();
	}

	addlist(nombre: string) {
		this.actionProvider.addGuest(this.eventWord, nombre);
	}

	selectList(eventWord: eventWord) {
		this.actionProvider.viewPicture(eventWord).subscribe((content) => {
			this.eventWord2 = content;

			console.log(this.eventWord2);
		});
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad DetailEventPage');
	}
}
