import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ActionsProvider } from '../../providers/actions/actions';

/**
 * Generated class for the AddEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-add-event',
	templateUrl: 'add-event.html'
})
export class AddEventPage {
	eventText: string;
	eventLugar: string;
	eventDescp: string;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public actionsProvider: ActionsProvider,
		public alertCtrl: AlertController
	) {}

	addEvent(event: string, eventlugar: string, eventDesc: string) {
		this.actionsProvider.addEvent(event, eventlugar, eventDesc);
		let alert = this.alertCtrl.create({
			title: 'Registro Exitoso!!!',
			subTitle: 'Tu registro se hizo correctamente',
			buttons: [ 'Aceptar' ]
		});
		alert.present();
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad AddEventPage');
	}
}
