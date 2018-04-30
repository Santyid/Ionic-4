import { eventWord } from './../../app/event.interface';
import { userWord } from './../../app/user.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ActionsProvider } from '../../providers/actions/actions';

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
	base64Image: string;
	eventname: string;
	listaInvitados: userWord[];
	id: number;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public actionProvider: ActionsProvider,
		public cameraPlugin: Camera
	) {
		this.eventWord = navParams.get('currentItem');
		this.selectList(this.eventWord);
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

	takePicture(): void {
		const options: CameraOptions = {
			quality: 100,
			destinationType: this.cameraPlugin.DestinationType.DATA_URL,
			encodingType: this.cameraPlugin.EncodingType.JPEG,
			mediaType: this.cameraPlugin.MediaType.PICTURE
		};

		this.cameraPlugin.getPicture(options).then(
			(imageData) => {
				// imageData is either a base64 encoded string or a file URI
				// If it's base64:
				this.base64Image = 'data:image/jpeg;base64,' + imageData;
			},
			(err) => {
				// Handle error
			}
		);
	}
}
