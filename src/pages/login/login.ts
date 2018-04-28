import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionsProvider } from '../../providers/actions/actions';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-login',
	templateUrl: 'login.html'
})
export class LoginPage {
	email: string;
	password: string;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private actionsProvider: ActionsProvider
	) {}

	Login(email: string, password: string) {
		this.actionsProvider.Login(email, password);
	}
}
