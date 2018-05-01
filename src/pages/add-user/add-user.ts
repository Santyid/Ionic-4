import { ActionsProvider } from './../../providers/actions/actions';
import { eventWord } from './../../app/event.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

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
	base64Image: string = null;
	eventWord: eventWord;
	eventname: string;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public cameraPlugin: Camera,
		public actionsProvider: ActionsProvider,
		public alertCtrl: AlertController
	) {
		this.eventWord = navParams.get('currentItem');
		console.log(this.eventWord.id);
	}

	takePicture(): void {
		this.cameraPlugin
			.getPicture({
				quality: 95,
				destinationType: this.cameraPlugin.DestinationType.DATA_URL,
				sourceType: this.cameraPlugin.PictureSourceType.CAMERA,
				allowEdit: true,
				encodingType: this.cameraPlugin.EncodingType.PNG,
				targetWidth: 500,
				targetHeight: 500,
				saveToPhotoAlbum: true
			})
			.then(
				(imageData) => {
					this.base64Image = imageData;
				},
				(error) => {
					console.log('ERROR -> ' + JSON.stringify(error));
				}
			);
	}
	uploadPicture(eventaName: string): void {
		console.log(this.base64Image);
		this.actionsProvider.createImage(this.eventWord, eventaName, this.base64Image);
		let alert = this.alertCtrl.create({
			title: 'Registro Exitoso!!!',
			subTitle: 'Tu registro se hizo correctamente',
			buttons: [ 'Aceptar' ]
		});
		alert.present();
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad AddUserPage');
	}
}
