import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { eventWord } from '../../app/event.interface';

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

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.eventWord = navParams.get('currentItem');
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad DetailEventPage');
	}
}
