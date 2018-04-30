import { ActionsProvider } from './../../providers/actions/actions';
import { eventWord } from './../../app/event.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireStorage } from 'angularfire2/storage';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the AddUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-add-user',
	templateUrl: 'add-user.html'
})
export class AddUserPage {
	base64Image: string;
	eventWord: eventWord;
	imageData;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public cameraPlugin: Camera,
		public actionsProvider: ActionsProvider
	) {
		this.eventWord = navParams.get('currentItem');
		console.log(this.eventWord.id);
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
				this.base64Image = imageData;
			},
			(err) => {
				// Handle error
			}
		);
	}
	uploadPicture(): void {
		this.actionsProvider.createImage(this.eventWord, this.base64Image);
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad AddUserPage');
	}
}
